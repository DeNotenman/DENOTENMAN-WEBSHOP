export default function AdminOrderShippingPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Bestelling</p>
        <h1>Verzending</h1>
        <span>Beheer verzendlabel, track & trace en verzendstatus.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Vervoerder</h2>
          <p>PostNL</p>
        </article>

        <article className="admin-card">
          <h2>Track & trace</h2>
          <p>3STEST123456789</p>
        </article>

        <article className="admin-card">
          <h2>Status</h2>
          <p>Label aangemaakt</p>
        </article>
      </section>

      <button className="admin-button" type="button">
        Label aanmaken
      </button>
    </main>
  );
}