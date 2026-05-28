import { AdminModuleStatus } from "../../../../components/layout/AdminModuleStatus";

export default function NewCmsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS</p>
        <h1>Nieuwe pagina</h1>
        <span>Maak een nieuwe contentpagina aan.</span>
      </section>

      <AdminModuleStatus
        title="Pagina aanmaken is nog geblokkeerd"
        description="Deze route toont geen formulier totdat CMS-opslag, validatie en publicatiegedrag zijn aangesloten."
        items={[
          "Voeg eerst cms.actions.ts toe met requireAdmin en server-side validatie.",
          "Sla concepten en gepubliceerde pagina's op in Supabase.",
          "Revalideer de bijbehorende storefront-route na publicatie.",
        ]}
      />
    </main>
  );
}
