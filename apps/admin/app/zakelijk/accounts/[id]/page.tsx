export default function AdminBusinessAccountDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk account</p>
        <h1>Jan Jansen</h1>
        <span>
          Bekijk en beheer gebruikerstoegang, rollen, contactgegevens en
          gekoppelde zakelijke klant.
        </span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Gebruiker</h2>
          <p>Jan Jansen</p>
          <p>inkoop@voorbeeldbedrijf.nl</p>
        </article>

        <article className="admin-card">
          <h2>Zakelijke klant</h2>
          <p>Voorbeeldbedrijf B.V.</p>
        </article>

        <article className="admin-card">
          <h2>Rol</h2>
          <p>Inkoper</p>
        </article>

        <article className="admin-card">
          <h2>Toegang</h2>
          <p>Actief</p>
        </article>
      </section>
    </main>
  );
}