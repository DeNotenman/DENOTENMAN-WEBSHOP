const products = [
  { name: "Amandelen ongezouten", category: "Noten", price: "€ 14,95", href: "/winkel/amandelen-ongezouten" },
  { name: "Cashewnoten gebrand", category: "Noten", price: "€ 16,95", href: "/winkel/cashewnoten-gebrand" },
  { name: "Notenmix luxe", category: "Mixen", price: "€ 18,95", href: "/winkel/notenmix-luxe" },
  { name: "Gedroogde abrikozen", category: "Gedroogd fruit", price: "€ 9,95", href: "/winkel/gedroogde-abrikozen" },
];

export default function ShopPage() {
  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <p className="business-hero__label">Winkel</p>
          <h1>Onze producten</h1>
          <p>Ontdek noten, pitten, zaden, mixen, chocolade en gedroogd fruit.</p>
        </div>

        <div className="shop-filters">
          <a href="/categorie/noten">Noten</a>
          <a href="/categorie/zaden">Zaden</a>
          <a href="/categorie/gedroogd-fruit">Gedroogd fruit</a>
          <a href="/categorie/mixen">Mixen</a>
        </div>

        <div className="list-grid">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="dashboard-card">
              <p className="business-hero__label">{product.category}</p>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}