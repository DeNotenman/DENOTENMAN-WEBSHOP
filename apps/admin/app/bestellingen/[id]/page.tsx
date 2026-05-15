const items = [
  { name: "Amandelen ongezouten", quantity: "2 × 1kg", total: "€ 29,90" },
  { name: "Notenmix luxe", quantity: "1 × 1kg", total: "€ 18,95" },
];

export default function AdminOrderDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Bestelling</p>
        <h1>ORD-2026-001</h1>
        <span>Bekijk klantgegevens, producten, betaling, verzending en factuur.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Klant</h2>
          <p>Voorbeeldbedrijf B.V.</p>
          <p>inkoop@voorbeeldbedrijf.nl</p>
        </article>

        <article className="admin-card">
          <h2>Status</h2>
          <p>Betaald</p>
        </article>

        <article className="admin-card">
          <h2>Totaal</h2>
          <p>€ 48,85</p>
        </article>
      </section>

      <section className="admin-list">
        {items.map((item) => (
          <article key={item.name} className="admin-list-row">
            <div>
              <h2>{item.name}</h2>
              <p>{item.quantity}</p>
            </div>

            <strong>{item.total}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}