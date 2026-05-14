export default function AdminBusinessCustomerDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijke klant</p>
        <h1>Voorbeeldbedrijf B.V.</h1>
        <span>
          Beheer klantgegevens, contactpersonen, factuurgegevens, bestellijsten,
          prijsafspraken, bestellingen en facturen.
        </span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Bedrijfsgegevens</h2>
          <p>Voorbeeldstraat 12, 1234 AB Amsterdam</p>
          <p>BTW: NL123456789B01</p>
        </article>

        <article className="admin-card">
          <h2>Contactpersoon</h2>
          <p>Jan Jansen</p>
          <p>inkoop@voorbeeldbedrijf.nl</p>
        </article>

        <article className="admin-card">
          <h2>Bestellijsten</h2>
          <p>2 actieve bestellijsten gekoppeld.</p>
        </article>

        <article className="admin-card">
          <h2>Facturen</h2>
          <p>Laatste factuur: 2026-001.</p>
        </article>
      </section>
    </main>
  );
}