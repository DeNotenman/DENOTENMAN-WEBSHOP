export default function CategoryDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Categorie</p>
        <h1>Noten</h1>
        <span>Beheer categorienaam, omschrijving, zichtbaarheid, volgorde en SEO.</span>
      </section>

      <form className="admin-form">
        <label>
          Categorienaam
          <input type="text" name="name" defaultValue="Noten" />
        </label>

        <label>
          Slug
          <input type="text" name="slug" defaultValue="noten" />
        </label>

        <label>
          Omschrijving
          <textarea
            name="description"
            defaultValue="Verse noten, zorgvuldig geselecteerd en snel verzonden."
          />
        </label>

        <button className="admin-button" type="submit">
          Categorie opslaan
        </button>
      </form>
    </main>
  );
}