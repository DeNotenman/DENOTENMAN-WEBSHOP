import { AdminModuleStatus } from "../../../components/layout/AdminModuleStatus";

export default function BlogPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS</p>
        <h1>Blog</h1>
        <span>Beheer blogartikelen, categorieen en publicatiestatussen.</span>
      </section>

      <AdminModuleStatus
        title="Blogopslag ontbreekt nog"
        description="De admin toont geen voorbeeldartikelen meer. Blogbeheer wordt pas actief zodra er echte blogtabellen en publicatie-actions zijn."
        items={[
          "Maak blog_posts en blog_categories met publicatiestatus en SEO-velden.",
          "Koppel lijst, detail en nieuw-artikel routes aan Supabase.",
          "Laat storefront blogroutes alleen gepubliceerde artikelen tonen.",
        ]}
      />
    </main>
  );
}
