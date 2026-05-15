export default function NewCmsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>CMS</p>
        <h1>Nieuwe pagina</h1>
        <span>Maak een nieuwe contentpagina aan.</span>
      </section>

      <form className="admin-form">
        <label>
          Titel
          <input type="text" name="title" placeholder="Bijvoorbeeld: Over ons" />
        </label>

        <label>
          Slug
          <input type="text" name="slug" placeholder="over-ons" />
        </label>

        <label>
          Inhoud
          <textarea name="content" placeholder="Pagina-inhoud" />
        </label>

        <button className="admin-button" type="submit">
          Pagina aanmaken
        </button>
      </form>
    </main>
  );
}