# Changelog

Alle belangrijke wijzigingen aan de DENOTENMAN WEBSHOP worden hier bijgehouden.

## [Unreleased]

### Status

- Project staat in scaffold- en stabilisatiefase.
- Hoofdapps zijn typecheck-schoon:
  - `@denotenman/storefront`
  - `@denotenman/admin`
  - `@denotenman/worker`
- Representatieve packagecheck uitgevoerd op `@denotenman/commerce`.
- Er zijn nog 283 lege placeholderbestanden buiten `node_modules`, `.next`, `.turbo` en `.git`.
- Database basis is gestart met een remote Supabase baseline voor catalogusdata, RLS en product-query helpers.

### Toegevoegd

- B2B/Zakelijk-portaal aan storefront toegevoegd.
- Zakelijke landingspagina toegevoegd (`/zakelijk`).
- Zakelijke inlogpagina toegevoegd (`/zakelijk/inloggen`).
- Zakelijk dashboard toegevoegd (`/zakelijk/dashboard`).
- Zakelijke bestellijsten overzicht toegevoegd (`/zakelijk/bestellijsten`).
- Zakelijke bestellijst-detailpagina toegevoegd (`/zakelijk/bestellijsten/[id]`).
- Zakelijke bestellingen overzicht toegevoegd (`/zakelijk/bestellingen`).
- Zakelijke bestelling-detailpagina toegevoegd (`/zakelijk/bestellingen/[id]`).
- Zakelijke facturen overzicht toegevoegd (`/zakelijk/facturen`).
- Zakelijke factuur-detailpagina toegevoegd (`/zakelijk/facturen/[id]`).
- Zakelijke betaalroute toegevoegd (`/zakelijk/betalen/[id]`).
- Zakelijke gegevenspagina toegevoegd (`/zakelijk/gegevens`).
- Adminroutes toegevoegd voor zakelijke klanten, accounts, bestellijsten, offertes, prijzen, staffels, assortiment, facturen en instellingen.
- Admin-detailpagina's toegevoegd voor zakelijke klanten, accounts, bestellijsten, offertes en facturen.
- Zakelijke bestelomgeving opgenomen als volwaardig onderdeel van de webshop.
- Basisnavigatie/Header toegevoegd aan storefront.
- Mobile-first globale storefront-styling toegevoegd.
- Mobile-first globale admin-styling toegevoegd.
- Homepagina voorzien van eerste mobile-first hero-opzet.
- Zakelijke omgeving voorzien van eerste mobile-first pagina-opbouw.
- Storefront UI-componenten toegevoegd voor buttons, inputs, select, checkbox, radio, modal, drawer, table, badges, alerts en skeletons.
- Storefront productdetailcomponenten toegevoegd voor gallery, productinfo, tabs, reviews, varianten, hoeveelheid, voorraadstatus en gerelateerde producten.
- Storefront winkelwagencomponenten toegevoegd voor cart items, totals, summary, coupon form en drawer.
- Storefront checkoutcomponenten toegevoegd voor klantgegevens, adres, verzending, betaling, review, summary en layout.
- Storefront accountcomponenten toegevoegd voor login, registratie en accountnavigatie.
- Checkoutpagina's voor gegevens, verzending, betaling en controleren ingericht.
- Winkelwagenpagina ingericht.
- Merkdetailpagina ingericht.
- Admin instellingenindex ingericht.
- Admin nieuwe-categoriepagina ingericht.
- Projectstatus en vervolgstrategie vastgelegd in `docs/admin-manual.md`.
- Root-configs toegevoegd voor `pnpm`, `turbo`, `tsconfig` en `.gitignore`.
- Packagebestanden toegevoegd voor storefront, admin, worker en workspace-packages.
- Supabase-projectcontext vastgelegd via productieconfiguratie: `https://luablfcmhzykjnxmtlqh.supabase.co`.
- Lokale Supabase baseline toegevoegd voor remote tabellen `products`, `product_variants`, `product_weights`, `orders` en image-backup tabellen.
- Lokale policybestanden toegevoegd voor publieke catalogus-read policies en geblokkeerde ordertoegang.
- `@denotenman/db` producttypes en queryhelpers toegevoegd voor storefront/admin catalogusgebruik.

### Gewijzigd

- Metadata van storefront bijgewerkt met De Notenman-positionering.
- Storefront-layout uitgebreid met globale header en footer.
- Admin-dashboardtekst uitgebreid met zakelijke accounts, bestellijsten en B2B-prijzen.
- Terminologie aangescherpt naar "Zakelijke bestelomgeving".
- Vermeden termen: "mini-shop", "klein" en "verkleind".
- Admin CSS-import hersteld via `apps/admin/app/layout.tsx`.
- Admin stylesheet opnieuw opgebouwd in `apps/admin/styles/globals.css`.
- Admin styling mobile-first hersteld voor zakelijke pagina's.
- Admin layout en styling geforceerd herschreven zonder BOM-encoding.
- `apps/admin/styles/global.css` gecorrigeerd naar `globals.css`.
- Storefront homepagina CTA's toegevoegd: `/winkel` en `/zakelijk`.
- Mobiele winkelwagenknop "Mand" toegevoegd aan header.
- Eerste dummydata toegevoegd voor zakelijke bestellijsten, producten en facturen.
- Factuur-downloadknop toegevoegd op zakelijke factuurdetailpagina.

### Gerepareerd

- Kapotte storefront `Modal.tsx` gerepareerd; verdwaalde CSS vervangen door een geldige React component.
- Lege adminroute `apps/admin/app/categorieen/nieuw/page.tsx` gevuld met een geldige pagina-export.
- Lege adminroute `apps/admin/app/instellingen/page.tsx` gevuld met een geldige instellingenindex.
- Verkeerde inhoud in `apps/storefront/components/checkout/CheckoutLayout.tsx` vervangen door de echte checkout-layout export.
- Lege storefront route `apps/storefront/app/merken/[slug]/page.tsx` gevuld met een geldige merkdetailpagina.
- TypeScript build-info artifacts toegevoegd aan `.gitignore` via `*.tsbuildinfo`.

### Technisch

- Root `package.json` hersteld zonder BOM-encoding.
- `packageManager` toegevoegd voor Turborepo-workspace-resolutie.
- Lege `package.json`-bestanden gevuld om `pnpm install` correct te laten draaien.
- `pnpm install` succesvol uitgevoerd.
- Dynamische Next.js-routes met `[id]` gecontroleerd via `-LiteralPath`.
- `.env.example` verwijderd.
- `.env.prod` toegevoegd voor productieconfiguratie.
- Productieconfiguratie bevat ingestelde waarden voor Supabase, Mollie, PostNL, mail, site URL, admin URL en `NODE_ENV`.
- Empty-file audit uitgevoerd en vastgelegd in `docs/admin-manual.md`.
- Read-only Supabase audit uitgevoerd op project `luablfcmhzykjnxmtlqh`; remote project heet `nutty`, draait Postgres 17.6 en bevat 77 actieve producten, 129 varianten en 98 gewichten.
- Remote Edge Functions vastgesteld: `products-sync-images` en `products-sync-images-invoke`, beide actief met JWT-verificatie.
- Remote storage vastgesteld: buckets `Products` en `product-images`.
- Typechecks succesvol uitgevoerd voor:
  - `pnpm --filter @denotenman/storefront typecheck`
  - `pnpm --filter @denotenman/admin typecheck`
  - `pnpm --filter @denotenman/worker typecheck`
  - `pnpm --filter @denotenman/commerce typecheck`
  - `pnpm --filter @denotenman/db typecheck`

### Bekende Bouwschuld

- Supabase branch `main` meldt remote status `MIGRATIONS_FAILED`; lokale migration history en remote migration history moeten nog bewust worden gerepareerd.
- `public.image_backup_products` en `public.image_backup_product_variants` hebben remote RLS uit; dit is een kritieke security finding en moet worden opgelost voordat deze tabellen ooit door de app worden gebruikt.
- `public.orders` gebruikt remote nog `stripe_payment_intent_id`, terwijl de webshoprichting Mollie is.
- `packages/commerce`, `packages/validation`, `packages/mollie`, `packages/postnl`, `packages/email`, `packages/seo`, `packages/analytics`, `packages/media`, `packages/config` en `packages/ui` bevatten nog veel lege bronbestanden.
- Storefront en admin bevatten nog veel hardcoded demo-inhoud.
- Worker jobs, queues en cronbestanden zijn nog placeholders.
- Tests zijn aanwezig als structuur, maar inhoudelijk nog niet gevuld.
- Documentatie buiten `docs/admin-manual.md` is nog leeg.
- Remote Supabase-project lijkt voorbereid voor notenman.com, maar schema/data zijn vanuit deze changelog-update nog niet inhoudelijk gevalideerd.

## [0.1.0] - 2026-05-14

### Toegevoegd

- Eerste projectstructuur aangemaakt.
- Monorepo-opzet toegevoegd.
- Storefront-app toegevoegd.
- Admin-app toegevoegd.
- Worker-app toegevoegd.
- Packages-structuur toegevoegd.
- Supabase-structuur toegevoegd.
- Basisdocumentatie toegevoegd.
- Productie-env-bestand voorbereid.
