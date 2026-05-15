const variants = [
  { label: "250g", price: "€ 4,25", stock: "38 stuks" },
  { label: "500g", price: "€ 7,95", stock: "24 stuks" },
  { label: "1kg", price: "€ 14,95", stock: "42 stuks" },
];

export default function ProductVariantsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Productvarianten</p>
        <h1>Amandelen ongezouten</h1>
        <span>Beheer gewichten, prijzen en voorraad per variant.</span>
      </section>

      <section className="admin-list">
        {variants.map((variant) => (
          <article key={variant.label} className="admin-list-row">
            <div>
              <h2>{variant.label}</h2>
              <p>{variant.stock}</p>
            </div>

            <strong>{variant.price}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}