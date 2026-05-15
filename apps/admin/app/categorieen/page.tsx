const categories = [
  { name: "Noten", products: "24 producten", status: "Actief" },
  { name: "Zaden", products: "12 producten", status: "Actief" },
  { name: "Gedroogd fruit", products: "18 producten", status: "Actief" },
];

export default function AdminCategoriesPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Catalogus</p>
        <h1>Categorieën</h1>
        <span>Beheer categorieën, zichtbaarheid, volgorde en SEO.</span>
      </section>

      <section className="admin-list">
        {categories.map((category) => (
          <a key={category.name} href="/categorieen/noten" className="admin-list-row">
            <div>
              <h2>{category.name}</h2>
              <p>{category.products}</p>
            </div>

            <strong>{category.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}