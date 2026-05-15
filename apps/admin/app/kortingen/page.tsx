const discounts = [
  { code: "WELKOM10", type: "10%", status: "Actief" },
  { code: "ZAKELIJK5", type: "5%", status: "Actief" },
];

export default function DiscountsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Kortingen</h1>
        <span>Beheer kortingscodes, acties en voorwaarden.</span>
      </section>

      <section className="admin-list">
        {discounts.map((discount) => (
          <article key={discount.code} className="admin-list-row">
            <div>
              <h2>{discount.code}</h2>
              <p>{discount.type}</p>
            </div>

            <strong>{discount.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}