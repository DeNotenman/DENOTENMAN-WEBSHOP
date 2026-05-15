const items = [
  { name: "Amandelen ongezouten", quantity: "1 × 1kg", total: "€ 14,95" },
  { name: "Notenmix luxe", quantity: "1 × 1kg", total: "€ 18,95" },
];

export default function CartPage() {
  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <p className="business-hero__label">Winkelwagen</p>
          <h1>Jouw mand</h1>
          <p>Controleer je producten voordat je afrekent.</p>
        </div>

        <div className="product-list">
          {items.map((item) => (
            <article key={item.name} className="product-row">
              <div>
                <h2>{item.name}</h2>
                <p>{item.quantity}</p>
              </div>

              <strong>{item.total}</strong>
            </article>
          ))}
        </div>

        <a href="/checkout" className="button button--primary">
          Naar de kassa
        </a>
      </section>
    </main>
  );
}