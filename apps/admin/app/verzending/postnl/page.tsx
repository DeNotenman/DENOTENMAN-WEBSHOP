const shipments = [
  { id: "SHIP-2026-001", order: "ORD-2026-001", carrier: "PostNL", status: "Verzonden" },
  { id: "SHIP-2026-002", order: "ORD-2026-003", carrier: "PostNL", status: "Label aangemaakt" },
];

export default function ShippingPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Verzending</p>
        <h1>Verzendingen</h1>
        <span>Bekijk labels, zendingen, retouren en track & trace-statussen.</span>
      </section>

      <section className="admin-list">
        {shipments.map((shipment) => (
          <article key={shipment.id} className="admin-list-row">
            <div>
              <h2>{shipment.id}</h2>
              <p>{shipment.order}</p>
            </div>

            <span>{shipment.carrier}</span>
            <strong>{shipment.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}