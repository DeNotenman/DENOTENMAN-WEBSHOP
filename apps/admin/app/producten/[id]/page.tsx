export default function ProductDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Product</p>
        <h1>Amandelen ongezouten</h1>
        <span>Beheer productgegevens, prijs, voorraad, varianten, media en SEO.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Basisgegevens</h2>
          <p>Categorie: Noten</p>
          <p>Status: Actief</p>
        </article>

        <article className="admin-card">
          <h2>Voorraad</h2>
          <p>42 kg beschikbaar</p>
        </article>

        <article className="admin-card">
          <h2>Prijs</h2>
          <p>Vanaf € 14,95</p>
        </article>
      </section>
    </main>
  );
}