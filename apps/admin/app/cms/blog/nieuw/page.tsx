import { AdminModuleStatus } from "../../../../components/layout/AdminModuleStatus";

export default function NewBlogPostPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Blog</p>
        <h1>Nieuw artikel</h1>
        <span>Schrijf een nieuw blogartikel voor de webshop.</span>
      </section>

      <AdminModuleStatus
        title="Artikel aanmaken is nog geblokkeerd"
        description="Deze route wacht op echte blogopslag en validatie, zodat er geen content verdwijnt of alleen lokaal lijkt opgeslagen."
        items={[
          "Voeg blog server actions toe met requireAdmin.",
          "Valideer slug, titel, categorie en publicatiestatus.",
          "Revalideer blogoverzicht en detailroute na publicatie.",
        ]}
      />
    </main>
  );
}
