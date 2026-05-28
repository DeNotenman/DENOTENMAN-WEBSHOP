import { AdminModuleStatus } from "../../../../components/layout/AdminModuleStatus";

export default function BlogPostDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Blogartikel</p>
        <h1>Artikel detail</h1>
        <span>Beheer titel, inhoud, categorie, publicatie en SEO.</span>
      </section>

      <AdminModuleStatus
        title="Blogdetail is nog niet gekoppeld"
        description="Er wordt geen voorbeeldartikel meer getoond. Deze pagina kan het echte artikel laden zodra de blogtabellen bestaan."
        items={[
          "Lees het artikel server-side op id of slug.",
          "Toon conceptstatus, publicatiedatum en SEO-velden.",
          "Gebruik een beveiligde save-action voor wijzigingen.",
        ]}
      />
    </main>
  );
}
