const logs = [
  { action: "Product aangepast", user: "Fedor van Ravesteijn", date: "14-05-2026 20:12" },
  { action: "Bestellijst aangemaakt", user: "Fedor van Ravesteijn", date: "14-05-2026 20:34" },
  { action: "Factuur bekeken", user: "Dave Vera", date: "14-05-2026 21:02" },
];

export default function AuditLogPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Beveiliging</p>
        <h1>Audit log</h1>
        <span>Bekijk belangrijke wijzigingen en beheeracties binnen de adminomgeving.</span>
      </section>

      <section className="admin-list">
        {logs.map((log) => (
          <article key={`${log.action}-${log.date}`} className="admin-list-row">
            <div>
              <h2>{log.action}</h2>
              <p>{log.user}</p>
            </div>

            <span>{log.date}</span>
          </article>
        ))}
      </section>
    </main>
  );
}