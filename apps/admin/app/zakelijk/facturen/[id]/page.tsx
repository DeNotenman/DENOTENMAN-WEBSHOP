export default function AdminBusinessInvoiceDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijke factuur</p>
        <h1>Factuur 2026-001</h1>
        <span>
          Bekijk factuurregels, klantgegevens, betaling, bestelling en
          downloadstatus.
        </span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Klant</h2>
          <p>Voorbeeldbedrijf B.V.</p>
          <p>inkoop@voorbeeldbedrijf.nl</p>
        </article>

        <article className="admin-card">
          <h2>Betaling</h2>
          <p>Status: Betaald</p>
          <p>Methode: Mollie</p>
        </article>

        <article className="admin-card">
          <h2>Bedrag</h2>
          <p>Subtotaal: € 152,48</p>
          <p>BTW 21%: € 32,02</p>
          <p>Totaal: € 184,50</p>
        </article>
      </section>

      <button className="admin-button" type="button">
        Factuur downloaden
      </button>
    </main>
  );
}