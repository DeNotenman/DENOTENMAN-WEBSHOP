export default function AdminBusinessQuoteDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijke offerte</p>
        <h1>OFF-2026-001</h1>
        <span>
          Bekijk offertegegevens, producten, prijzen, klantinformatie en status.
        </span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Klant</h2>
          <p>Voorbeeldbedrijf B.V.</p>
          <p>inkoop@voorbeeldbedrijf.nl</p>
        </article>

        <article className="admin-card">
          <h2>Status</h2>
          <p>Concept</p>
        </article>

        <article className="admin-card">
          <h2>Bedrag</h2>
          <p>Subtotaal: € 202,48</p>
          <p>BTW 21%: € 42,52</p>
          <p>Totaal: € 245,00</p>
        </article>
      </section>

      <button className="admin-button" type="button">
        Offerte verzenden
      </button>
    </main>
  );
}