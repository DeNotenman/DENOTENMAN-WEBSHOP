# De Notenman Webshop - Admin Manual

Laatst bijgewerkt: 2026-05-15

Dit document is nu het centrale overdrachtspunt voor de bouw van de adminomgeving en de verdere Codex-werkwijze. De applicatie zit in scaffold- en stabilisatiefase: de routes en mappenstructuur staan grotendeels, maar veel domeinlogica, databasekoppelingen en integraties zijn nog placeholders.

## Huidige Status

De monorepo bevat drie apps:

- `apps/storefront`: publieke webshop.
- `apps/admin`: beheeromgeving.
- `apps/worker`: achtergrondtaken.

Daarnaast zijn er workspace packages voor onder meer commerce, database, validatie, Mollie, PostNL, e-mail, SEO, analytics, media, config en UI.

De eerste stabilisatiestap is afgerond:

- `@denotenman/admin` typecheckt succesvol.
- `@denotenman/storefront` typecheckt succesvol.
- `@denotenman/worker` typecheckt succesvol.
- Een representatieve package, `@denotenman/commerce`, typecheckt succesvol.
- De eerder bekende blockers in `Modal.tsx`, `categorieen/nieuw`, `instellingen`, `CheckoutLayout` en `merken/[slug]` zijn hersteld.

De database-baseline is gestart:

- Remote Supabase-project `luablfcmhzykjnxmtlqh` heet `nutty` en draait Postgres 17.6.
- Remote catalogus bevat 77 actieve producten, 129 varianten en 98 productgewichten.
- Lokale migrations beschrijven nu de bestaande remote catalogustabellen.
- `packages/db` bevat eerste producttypes en queryhelpers voor storefront/admin gebruik.
- `@denotenman/db`, `@denotenman/storefront` en `@denotenman/admin` typechecken succesvol na deze stap.

## Empty-File Audit

Er zijn momenteel 283 lege bestanden buiten `node_modules`, `.next`, `.turbo` en `.git`. Dat is geen directe compile-fout, maar wel de belangrijkste bouwschuld.

Belangrijkste clusters:

- `apps/storefront`: lege actions, libs en meerdere component-placeholders.
- `apps/admin`: lege actions, libs en B2B component-placeholders.
- `apps/worker`: lege queue-, job- en cron-bestanden.
- `packages/*`: vrijwel alle package-sourcebestanden zijn nog leeg.
- `supabase/migrations`, `supabase/policies`, `supabase/seed`: databasebestanden zijn nog leeg.
- `docs/*` en `database-map/*`: documentatie is grotendeels leeg.
- `tests/*`: testbestanden zijn aanwezig maar nog leeg.

Conclusie: de codebase is nu compile-stabiel voor de hoofdapps, maar nog niet functioneel compleet.

## Risico-Indeling

Hoog risico:

- Supabase branch `main` meldt remote `MIGRATIONS_FAILED`; lokale en remote migration history lopen niet gelijk.
- Remote `public.image_backup_products` en `public.image_backup_product_variants` hebben RLS uit.
- Remote `public.orders` gebruikt nog `stripe_payment_intent_id`, terwijl checkout richting Mollie moet.
- Lege commerce- en validation-packages. Checkout, prijzen, voorraad en ordervalidatie missen daarmee nog veel kernlogica.
- Lege worker-jobs. E-mail, voorraad, labels en cleanup draaien nog niet echt.
- Lege tests. Er is nog geen regressiebewaking.

Middel risico:

- Storefront en admin gebruiken nog veel hardcoded demo-inhoud.
- Actions en lib-bestanden bestaan, maar bevatten nog geen server actions of data-access.
- Integratiedocumentatie voor Mollie, PostNL, deployment en security ontbreekt nog.

Laag risico:

- Lege marketing/docs/assets placeholders die niet in runtime flows zitten.
- UI package placeholders zolang de apps eigen lokale UI-componenten gebruiken.

## Voortzettingsstrategie

We bouwen vanaf nu per verticale flow. Elke flow moet aan het einde typecheckbaar zijn en waar mogelijk visueel of functioneel verifieerbaar.

Voorgestelde volgorde:

1. Database basis
   - Vul Supabase schema voor profielen, klanten, categorieen, producten, varianten, voorraad, carts, orders, payments en shipments.
   - Voeg minimale RLS policies toe.
   - Voeg seeddata toe voor lokale/demo-verificatie.

2. Storefront core
   - Productoverzicht, categoriefilter en productdetail koppelen aan data.
   - Winkelwagen-state en totals werkend maken.
   - Checkout validatie en order-aanmaak implementeren.

3. Admin core
   - Producten, categorieen, voorraad, bestellingen en instellingen beheerbaar maken.
   - Admin acties koppelen aan `packages/db` en validatie.

4. Integraties
   - Mollie payment create/webhook/refund.
   - PostNL label/status/retourlabel.
   - E-mailtemplates en worker jobs.

5. Tests en deployment
   - Unit tests voor pricing, cart, inventory en checkout.
   - Integratietests voor order-flow, Mollie webhook en PostNL label.
   - E2E tests voor homepage, product, cart, checkout, account en admin.
   - Deployment-, security- en runbook-documentatie vullen.

## Werkafspraken Voor Codex

Voor elke nieuwe stap:

- Eerst relevante bestanden lezen.
- Daarna klein en gericht implementeren.
- Geen grote refactor zonder noodzaak.
- Na wijzigingen minimaal de relevante typecheck draaien.
- Bij frontendwijzigingen daarna lokaal openen en visueel controleren zodra een devserver draait.
- Nieuwe functionaliteit pas aan integraties koppelen nadat de interne flow lokaal klopt.

## Eerstvolgende Aanbevolen Stap

De beste volgende stap is storefront/admin catalogus koppelen:

- Maak app-level Supabase clients voor server-side reads.
- Koppel `/winkel`, `/categorie/[slug]` en `/winkel/[slug]` aan remote productdata.
- Maak daarna admin productoverzicht en productformulieren op basis van dezelfde `packages/db` helpers.
- Houd image upload/write flows admin-only via service-role/server actions; public storefront leest alleen gepubliceerde productdata en publieke image URLs.

Dit geeft sneller waarde dan willekeurig alle lege bestanden vullen, omdat productdata de basis vormt voor storefront, admin, cart en checkout.
