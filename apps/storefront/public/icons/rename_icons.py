# -*- coding: utf-8 -*-
import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

"""
rename_icons.py — Hernoem numeriek benoemde icon-bestanden via AI-vision.

Gebruik:
  python rename_icons.py             # verwerk alle bestanden
  python rename_icons.py --dry-run   # toon alleen wat er zou gebeuren
  python rename_icons.py --resume    # sla al verwerkte bestanden over (gebruik voortgangsbestand)

Vereisten:
  - ANTHROPIC_API_KEY omgevingsvariabele ingesteld
  - pip install anthropic
"""

import anthropic
import base64
import json
import os
import re
import sys
import time
from pathlib import Path

# ── Configuratie ────────────────────────────────────────────────────────────
ICONS_DIR    = Path(__file__).parent
PROGRESS_FILE = ICONS_DIR / "_rename_progress.json"
BATCH_SIZE   = 8       # icons per API-aanroep
SLEEP_BETWEEN = 0.3    # seconden tussen batches
MODEL        = "claude-haiku-4-5-20251001"
# ────────────────────────────────────────────────────────────────────────────

SYSTEM_PROMPT = (
    "You are an expert UI icon identifier. "
    "Given icon images, you return concise kebab-case names describing what each icon depicts. "
    "Use standard icon naming conventions (e.g. 'shopping-cart', 'arrow-right', 'user-circle', "
    "'star-outline', 'settings-gear', 'menu-hamburger', 'close-x', 'search-magnifier', "
    "'heart', 'bell-notification', 'calendar', 'home', 'envelope-mail', 'lock', etc.). "
    "Never include file extensions. Always respond with valid JSON only."
)


def is_numeric_name(stem: str) -> bool:
    """Geeft True als de bestandsnaam alleen cijfers bevat (of een hex-hash)."""
    clean = re.sub(r'\s*\(\d+\)$', '', stem)
    return bool(re.match(r'^\d+$', clean) or re.match(r'^[0-9a-f]{32}$', clean))


def collect_files() -> list[Path]:
    """Verzamel alle numeriek benoemde PNG/SVG/GIF bestanden."""
    files = []
    for f in sorted(ICONS_DIR.iterdir()):
        if f.is_file() and f.suffix.lower() in ('.png', '.svg', '.gif'):
            if is_numeric_name(f.stem):
                files.append(f)
    return files


def encode_image(path: Path) -> tuple[str, str]:
    """Geef (base64-data, media_type) terug."""
    ext = path.suffix.lower()
    media_map = {'.png': 'image/png', '.gif': 'image/gif', '.svg': 'image/svg+xml'}
    media_type = media_map.get(ext, 'image/png')
    data = base64.standard_b64encode(path.read_bytes()).decode()
    return data, media_type


def identify_batch(client: anthropic.Anthropic, batch: list[Path]) -> dict[str, str]:
    """Stuur een batch naar Claude en geef {label: naam} terug."""
    content = []
    labels = []

    for i, path in enumerate(batch):
        label = f"ICON_{i + 1}"
        labels.append((label, path))
        img_data, media_type = encode_image(path)
        content.append({"type": "text", "text": f"{label}:"})
        content.append({
            "type": "image",
            "source": {"type": "base64", "media_type": media_type, "data": img_data}
        })

    content.append({
        "type": "text",
        "text": (
            "Identify each icon and respond with ONLY a JSON object.\n"
            "Format: {\"ICON_1\": \"kebab-case-name\", \"ICON_2\": \"kebab-case-name\", ...}\n"
            "No extra text, no markdown, just the JSON."
        )
    })

    for attempt in range(3):
        try:
            response = client.messages.create(
                model=MODEL,
                max_tokens=512,
                system=SYSTEM_PROMPT,
                messages=[{"role": "user", "content": content}]
            )
            text = response.content[0].text.strip()
            # Haal JSON op uit de response (ook als er toch extra tekst omheen staat)
            match = re.search(r'\{[^{}]+\}', text, re.DOTALL)
            if match:
                return json.loads(match.group())
        except anthropic.RateLimitError:
            wait = 10 * (attempt + 1)
            print(f"  Rate limit — wacht {wait}s...")
            time.sleep(wait)
        except Exception as e:
            print(f"  Fout bij batch (poging {attempt + 1}): {e}")
            time.sleep(2)

    # Bij falen: geef lege dict terug (bestanden worden overgeslagen)
    return {}


def safe_new_name(directory: Path, base_name: str, ext: str, original: Path) -> Path:
    """Zorg voor unieke bestandsnaam; voeg teller toe bij conflicten."""
    candidate = directory / f"{base_name}{ext}"
    if candidate == original:
        return candidate
    counter = 1
    while candidate.exists():
        candidate = directory / f"{base_name}-{counter}{ext}"
        counter += 1
    return candidate


def load_progress() -> dict:
    if PROGRESS_FILE.exists():
        return json.loads(PROGRESS_FILE.read_text(encoding='utf-8'))
    return {}


def save_progress(progress: dict):
    PROGRESS_FILE.write_text(json.dumps(progress, indent=2, ensure_ascii=False), encoding='utf-8')


def main():
    dry_run = '--dry-run' in sys.argv
    resume  = '--resume'  in sys.argv

    if dry_run:
        print("🔍 DRY-RUN modus — er worden geen bestanden hernoemd.\n")

    api_key = os.environ.get('ANTHROPIC_API_KEY')
    if not api_key and not dry_run:
        print("FOUT: ANTHROPIC_API_KEY omgevingsvariabele is niet ingesteld.")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key) if api_key else None

    print("Bestanden verzamelen...")
    all_files = collect_files()
    print(f"Gevonden: {len(all_files)} numeriek benoemde bestanden\n")

    progress = load_progress() if resume else {}

    # Filter al verwerkte bestanden
    todo = [f for f in all_files if str(f) not in progress]
    already_done = len(all_files) - len(todo)
    if already_done:
        print(f"Al verwerkt (overgeslagen): {already_done}")
    print(f"Te verwerken: {len(todo)}\n")

    renamed = 0
    skipped = 0
    total_batches = (len(todo) + BATCH_SIZE - 1) // BATCH_SIZE

    for batch_i in range(0, len(todo), BATCH_SIZE):
        batch = todo[batch_i:batch_i + BATCH_SIZE]
        batch_num = batch_i // BATCH_SIZE + 1
        print(f"Batch {batch_num}/{total_batches}  ({batch_i + 1}–{min(batch_i + BATCH_SIZE, len(todo))}/{len(todo)})")

        if dry_run:
            for f in batch:
                print(f"  [DRY] {f.name} → ???")
            continue

        names = identify_batch(client, batch)

        for i, path in enumerate(batch):
            label = f"ICON_{i + 1}"
            new_name = names.get(label, '').strip().lower()

            # Sanitize: vervang spaties/ongewenste tekens
            new_name = re.sub(r'[^\w-]', '-', new_name)
            new_name = re.sub(r'-+', '-', new_name).strip('-')

            if not new_name:
                print(f"  ⚠ Geen naam ontvangen voor {path.name} — overgeslagen")
                skipped += 1
                continue

            new_path = safe_new_name(ICONS_DIR, new_name, path.suffix, path)

            if new_path == path:
                print(f"  = {path.name} (naam al correct)")
                skipped += 1
            else:
                try:
                    path.rename(new_path)
                    print(f"  ✓ {path.name} → {new_path.name}")
                    renamed += 1
                    progress[str(path)] = str(new_path)
                except OSError as e:
                    print(f"  ✗ Fout bij hernoemen {path.name}: {e}")
                    skipped += 1

        save_progress(progress)
        time.sleep(SLEEP_BETWEEN)

    print(f"\n{'=' * 50}")
    print(f"Klaar!  Hernoemd: {renamed}  |  Overgeslagen: {skipped}")
    if PROGRESS_FILE.exists() and not dry_run:
        print(f"Voortgang opgeslagen in: {PROGRESS_FILE.name}")


if __name__ == '__main__':
    main()
