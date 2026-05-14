export default function BusinessDashboardPage() {
  return (
    <main className="admin-main">
      <section className="admin-card">
        <h1>Zakelijk</h1>
        <p>
          Beheer zakelijke klanten, accounts, bestellijsten, facturen,
          offertes, staffelprijzen en het zakelijke assortiment.
        </p>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Zakelijke klanten</h2>
          <p>Bedrijven, contactpersonen, factuurgegevens en klantafspraken.</p>
        </article>

        <article className="admin-card">
          <h2>Bestellijsten</h2>
          <p>
            Zet producten klaar zodat zakelijke klanten direct kunnen bestellen
            en betalen.
          </p>
        </article>

        <article className="admin-card">
          <h2>Facturen</h2>
          <p>
            Bekijk facturen, betalingsstatussen en gekoppelde bestellingen.
          </p>
        </article>

        <article className="admin-card">
          <h2>Zakelijke bestelomgeving</h2>
          <p>
            Eigen omgeving voor bestellen, betalen, facturen inzien en gegevens
            beheren.
          </p>
        </article>
      </section>
    </main>
  );
}