export default function MolliePaymentsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Betalingen</p>
        <h1>Mollie</h1>
        <span>Beheer Mollie-koppeling, betaalmethodes, webhooks en betaalstatussen.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Status</h2>
          <p>Koppeling actief</p>
        </article>

        <article className="admin-card">
          <h2>Webhook</h2>
          <p>/api/mollie/webhook</p>
        </article>

        <article className="admin-card">
          <h2>Betaalmethodes</h2>
          <p>iDEAL, Bancontact, Creditcard</p>
        </article>
      </section>
    </main>
  );
}