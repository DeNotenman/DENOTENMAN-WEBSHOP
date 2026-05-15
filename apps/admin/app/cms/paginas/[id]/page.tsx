export default function CmsPageDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS pagina</p>
        <h1>Over ons</h1>
        <span>Beheer titel, slug, inhoud, status en SEO.</span>
      </section>

      <form className="admin-form">
        <label>
          Titel
          <input type="text" name="title" defaultValue="Over ons" />
        </label>

        <label>
          Slug
          <input type="text" name="slug" defaultValue="over-ons" />
        </label>

        <label>
          Inhoud
          <textarea
            name="content"
            defaultValue="De Notenman levert zorgvuldig geselecteerde noten, pitten en gedroogd fruit."
          />
        </label>

        <button className="admin-button" type="submit">
          Pagina opslaan
        </button>
      </form>
    </main>
  );
}