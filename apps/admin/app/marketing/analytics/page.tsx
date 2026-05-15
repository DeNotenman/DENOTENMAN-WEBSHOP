const metrics = [
  { label: "Conversie", value: "3,8%" },
  { label: "Gemiddelde orderwaarde", value: "€ 54,20" },
  { label: "Zakelijke omzet", value: "€ 2.840" },
];

export default function MarketingAnalyticsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Analytics</h1>
        <span>Bekijk commerciële prestaties, conversie en omzetinzichten.</span>
      </section>

      <section className="admin-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="admin-card">
            <h2>{metric.value}</h2>
            <p>{metric.label}</p>
          </article>
        ))}
      </section>
    </main>
  );
}