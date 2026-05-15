const products = [
  { name: "Amandelen ongezouten", price: "€ 14,95", href: "/winkel/amandelen-ongezouten" },
  { name: "Cashewnoten gebrand", price: "€ 16,95", href: "/winkel/cashewnoten-gebrand" },
  { name: "Notenmix luxe", price: "€ 18,95", href: "/winkel/notenmix-luxe" },
];

export default function ShopPage() {
  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <p className="business-hero__label">Winkel</p>
          <h1>Onze producten</h1>
          <p>Ontdek noten, pitten, zaden, mixen en gedroogd fruit.</p>
        </div>

        <div className="list-grid">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="dashboard-card">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}