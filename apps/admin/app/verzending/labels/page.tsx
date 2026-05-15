const labels = [
  { id: "LBL-2026-001", order: "ORD-2026-001", status: "Aangemaakt" },
  { id: "LBL-2026-002", order: "ORD-2026-003", status: "Geprint" },
];

export default function ShippingLabelsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Verzending</p>
        <h1>Labels</h1>
        <span>Bekijk en beheer verzendlabels per bestelling.</span>
      </section>

      <section className="admin-list">
        {labels.map((label) => (
          <article key={label.id} className="admin-list-row">
            <div>
              <h2>{label.id}</h2>
              <p>{label.order}</p>
            </div>

            <strong>{label.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}