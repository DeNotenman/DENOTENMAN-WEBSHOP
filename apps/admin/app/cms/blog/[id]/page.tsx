export default function BlogPostDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Blogartikel</p>
        <h1>Waarom ongebrande noten populair zijn</h1>
        <span>Beheer titel, inhoud, categorie, publicatie en SEO.</span>
      </section>

      <form className="admin-form">
        <label>
          Titel
          <input type="text" name="title" defaultValue="Waarom ongebrande noten populair zijn" />
        </label>

        <label>
          Slug
          <input type="text" name="slug" defaultValue="waarom-ongebrande-noten-populair-zijn" />
        </label>

        <label>
          Inhoud
          <textarea
            name="content"
            defaultValue="Ongebrande noten behouden hun pure smaak en natuurlijke structuur."
          />
        </label>

        <button className="admin-button" type="submit">
          Artikel opslaan
        </button>
      </form>
    </main>
  );
}