import { AdminModuleStatus } from "../../../../components/layout/AdminModuleStatus";

export default function CmsPageDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS pagina</p>
        <h1>Pagina detail</h1>
        <span>Beheer titel, slug, inhoud, status en SEO.</span>
      </section>

      <AdminModuleStatus
        title="CMS-detail is nog niet gekoppeld"
        description="Er wordt geen voorbeeldcontent meer getoond. Zodra cms_pages bestaat, kan deze pagina het echte record laden op basis van de route-id."
        items={[
          "Lees het CMS-record server-side op slug of id.",
          "Toon een 404 wanneer het record ontbreekt.",
          "Gebruik een beveiligde server action voor opslaan en publiceren.",
        ]}
      />
    </main>
  );
}
