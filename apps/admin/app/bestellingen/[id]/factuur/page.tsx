export default function AdminOrderInvoicePage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Bestelling</p>
        <h1>Factuur</h1>
        <span>Bekijk of genereer de factuur voor deze bestelling.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Factuurnummer</h2>
          <p>2026-001</p>
        </article>

        <article className="admin-card">
          <h2>Status</h2>
          <p>Aangemaakt</p>
        </article>

        <article className="admin-card">
          <h2>Totaal</h2>
          <p>€ 48,85</p>
        </article>
      </section>

      <button className="admin-button" type="button">
        Factuur downloaden
      </button>
    </main>
  );
}