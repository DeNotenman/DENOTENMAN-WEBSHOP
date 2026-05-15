export default function ProductMediaPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Productmedia</p>
        <h1>Amandelen ongezouten</h1>
        <span>Beheer productafbeeldingen, alt-teksten en volgorde.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Hoofdafbeelding</h2>
          <p>Nog geen afbeelding geselecteerd.</p>
        </article>

        <article className="admin-card">
          <h2>Galerij</h2>
          <p>Upload extra productafbeeldingen.</p>
        </article>
      </section>

      <form className="admin-form">
        <label>
          Alt-tekst
          <input type="text" name="alt" placeholder="Amandelen ongezouten in verpakking" />
        </label>

        <button className="admin-button" type="submit">
          Media opslaan
        </button>
      </form>
    </main>
  );
}