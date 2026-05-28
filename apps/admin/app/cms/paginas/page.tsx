import { AdminModuleStatus } from "../../../components/layout/AdminModuleStatus";

export default function CmsPagesPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS</p>
        <h1>CMS paginas</h1>
        <span>Beheer vaste contentroutes, juridische content en SEO-inhoud.</span>
      </section>

      <AdminModuleStatus
        title="CMS-pagina opslag ontbreekt nog"
        description="De publieke content bestaat nu als vaste storefront-routes. Er is nog geen CMS-tabel of publicatieflow waarmee de admin deze content veilig kan opslaan."
        items={[
          "Maak een cms_pages tabel met slug, titel, inhoud, SEO-velden en publicatiestatus.",
          "Koppel de adminlijst en detailroutes aan echte records via service-role actions.",
          "Laat de storefront dezelfde gepubliceerde records server-side lezen.",
        ]}
      />
    </main>
  );
}
