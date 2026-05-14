# Changelog

Alle belangrijke wijzigingen aan de DENOTENMAN WEBSHOP worden hier bijgehouden.

## [Unreleased]

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
- Admin-detailpagina’s toegevoegd voor zakelijke klanten, accounts, bestellijsten, offertes en facturen.
- Zakelijke bestelomgeving opgenomen als volwaardig onderdeel van de webshop.
- Basisnavigatie/Header toegevoegd aan storefront.
- Mobile-first globale storefront-styling toegevoegd.
- Mobile-first globale admin-styling toegevoegd.
- Dosis-fonts gekoppeld via lokale fontbestanden.
- Homepagina voorzien van eerste mobile-first hero-opzet.
- Zakelijke omgeving voorzien van eerste mobile-first pagina-opbouw.
- Database migraties toegevoegd voor B2B-functionaliteit: zakelijke klanten, accounts, prijsstaffels, bestellijsten, offertes en assortimenten.
- Packagebestanden toegevoegd voor storefront, admin, worker en workspace-packages.
- Root-configs toegevoegd voor `pnpm`, `turbo`, `tsconfig` en `.gitignore`.


### Gewijzigd

- Metadata van storefront bijgewerkt met De Notenman-positionering.
- Storefront-layout uitgebreid met globale header.
- Admin-dashboardtekst uitgebreid met zakelijke accounts, bestellijsten en B2B-prijzen.
- Terminologie aangescherpt naar “Zakelijke bestelomgeving”.
- Vermeden termen: “mini-shop”, “klein” en “verkleind”.

### Technisch

- Root `package.json` hersteld zonder BOM-encoding.
- `packageManager` toegevoegd voor Turborepo-workspace-resolutie.
- Lege `package.json`-bestanden gevuld om `pnpm install` correct te laten draaien.
- `pnpm install` succesvol uitgevoerd.
- Dynamische Next.js-routes met `[id]` gecontroleerd via `-LiteralPath`.
- `.env.example` verwijderd.
- `.env.prod` toegevoegd voor productieconfiguratie.
- `apps/admin/styles/global.css` gecorrigeerd naar `globals.css`.
- Storefront homepagina CTA’s toegevoegd: `/winkel` en `/zakelijk`.
- Mobiele winkelwagenknop “Mand” toegevoegd aan header.
- Eerste dummydata toegevoegd voor zakelijke bestellijsten, producten en facturen.
- Factuur-downloadknop toegevoegd op zakelijke factuurdetailpagina.

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