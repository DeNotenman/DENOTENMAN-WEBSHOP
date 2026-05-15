const returns = [
  { id: "RET-2026-001", order: "ORD-2026-002", status: "Aangemeld" },
  { id: "RET-2026-002", order: "ORD-2026-005", status: "Verwerkt" },
];

export default function ReturnsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Verzending</p>
        <h1>Retouren</h1>
        <span>Bekijk retouraanvragen, retourlabels en retourstatussen.</span>
      </section>

      <section className="admin-list">
        {returns.map((item) => (
          <article key={item.id} className="admin-list-row">
            <div>
              <h2>{item.id}</h2>
              <p>{item.order}</p>
            </div>

            <strong>{item.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}