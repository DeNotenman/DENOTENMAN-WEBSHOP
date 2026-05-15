const refunds = [
  { id: "REF-2026-001", order: "ORD-2026-002", amount: "€ 12,95", status: "Verwerkt" },
  { id: "REF-2026-002", order: "ORD-2026-004", amount: "€ 24,50", status: "In behandeling" },
];

export default function RefundsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Betalingen</p>
        <h1>Refunds</h1>
        <span>Bekijk en beheer terugbetalingen via Mollie.</span>
      </section>

      <section className="admin-list">
        {refunds.map((refund) => (
          <article key={refund.id} className="admin-list-row">
            <div>
              <h2>{refund.id}</h2>
              <p>{refund.order}</p>
            </div>

            <span>{refund.amount}</span>
            <strong>{refund.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}