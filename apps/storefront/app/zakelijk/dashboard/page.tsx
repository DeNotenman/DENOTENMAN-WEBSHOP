export default function BusinessDashboardPage() {
  return (
    <main className="business-page">
      <section className="container dashboard-page">
        <div>
          <p className="business-hero__label">Mijn zakelijke omgeving</p>
          <h1>Dashboard</h1>
          <p>
            Bekijk bestellijsten, bestellingen, facturen en accountgegevens.
          </p>
        </div>

        <div className="dashboard-grid">
          <a href="/zakelijk/bestellijsten" className="dashboard-card">
            <h2>Bestellijsten</h2>
            <p>Bestel uit producten die voor jouw account zijn klaargezet.</p>
          </a>

          <a href="/zakelijk/bestellingen" className="dashboard-card">
            <h2>Bestellingen</h2>
            <p>Bekijk eerdere bestellingen en actuele statussen.</p>
          </a>

          <a href="/zakelijk/facturen" className="dashboard-card">
            <h2>Facturen</h2>
            <p>Bekijk en download zakelijke facturen.</p>
          </a>

          <a href="/zakelijk/gegevens" className="dashboard-card">
            <h2>Gegevens</h2>
            <p>Beheer bedrijfs-, factuur- en contactgegevens.</p>
          </a>
        </div>
      </section>
    </main>
  );
}