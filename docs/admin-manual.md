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
- Storefront `/winkel`, `/categorie/[slug]` en `/winkel/[slug]` lezen nu remote Supabase catalogusdata.
- Lokale smoke-test is uitgevoerd op `http://localhost:3000/winkel` en een echte productdetailpagina.
- Admin `/producten`, `/producten/nieuw`, `/producten/[id]` en `/producten/[id]/media` zijn gekoppeld aan remote Supabase catalogusdata.
- Admin kan server-side producten opslaan en productfoto's uploaden naar `product-images` via een service-role server action.
- Admin `/producten/[id]/varianten` beheert productgewichten, varianten, SKU's, prijzen en voorraadlabels.
- Producten kunnen vanuit de detailpagina veilig verborgen of opnieuw zichtbaar gemaakt worden zonder hard delete.
- Lokale smoke-test is uitgevoerd op `http://localhost:3001/producten` en een echte productdetailpagina.
- Admin login is toegevoegd met een gesigneerde httpOnly sessie-cookie.
- Admin routes worden beschermd via Next.js `proxy.ts`; zonder sessie redirect `/producten` naar `/login?next=%2Fproducten`.
- Product write-actions vereisen server-side een geldige adminsessie voordat Supabase-mutaties of foto-uploads worden uitgevoerd.
- Supabase security hardening is remote toegepast:
  - `public.image_backup_products`, `public.image_backup_product_variants`, `public.backup_products_image` en `public.orders` hebben RLS aan.
  - `anon` en `authenticated` hebben geen select-rechten op deze private tabellen.
  - Alleen `service_role` heeft beheerpolicies voor deze private tabellen.
  - `product-images` heeft geen brede `storage.objects` listing-policy.
  - `public.rls_auto_enable()` is niet meer uitvoerbaar voor `anon` of `authenticated`.
- Supabase security advisor-check geeft momenteel `0` lints terug.

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
- Remote `public.orders` gebruikt nog `stripe_payment_intent_id`, terwijl checkout richting Mollie moet.
- Lege commerce- en validation-packages. Checkout, prijzen, voorraad en ordervalidatie missen daarmee nog veel kernlogica.
- Lege worker-jobs. E-mail, voorraad, labels en cleanup draaien nog niet echt.
- Lege tests. Er is nog geen regressiebewaking.

Middel risico:

- Storefront en admin gebruiken nog veel hardcoded demo-inhoud.
- Veel actions en lib-bestanden bestaan nog als placeholders buiten de inmiddels gekoppelde productbeheer-flow.
- Admin login vereist nog productie-env vars: `ADMIN_EMAIL`, `ADMIN_PASSWORD` en `ADMIN_SESSION_SECRET`.
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

De beste volgende stap is productbeheer functioneel testen met veilige testdata:

- Zet `ADMIN_EMAIL`, `ADMIN_PASSWORD` en `ADMIN_SESSION_SECRET` in de admin runtime-omgeving.
- Log lokaal in op de admin.
- Maak of kies een expliciet testproduct.
- Test product opslaan, gewicht toevoegen, variant toevoegen, foto uploaden en zichtbaar/verbergen.
- Controleer daarna storefront `/winkel` en de productdetailpagina.

Daarna kunnen we de migration-history mismatch (`MIGRATIONS_FAILED`) en de resterende checkout/order-bouwschuld gericht aanpakken.
