export default function AccountPage() {
  return (
    <main className="business-page">
      <section className="container dashboard-page">
        <div>
          <h1>Account</h1>
          <p>Bekijk bestellingen, adressen, gegevens en verlanglijst.</p>
        </div>

        <div className="dashboard-grid">
          <a href="/account/bestellingen" className="dashboard-card">
            <h2>Bestellingen</h2>
            <p>Bekijk eerdere bestellingen.</p>
          </a>

          <a href="/account/adressen" className="dashboard-card">
            <h2>Adressen</h2>
            <p>Beheer bezorg- en factuuradressen.</p>
          </a>

          <a href="/account/gegevens" className="dashboard-card">
            <h2>Gegevens</h2>
            <p>Beheer persoonlijke gegevens.</p>
          </a>

          <a href="/account/verlanglijst" className="dashboard-card">
            <h2>Verlanglijst</h2>
            <p>Bekijk bewaarde producten.</p>
          </a>
        </div>
      </section>
    </main>
  );
}