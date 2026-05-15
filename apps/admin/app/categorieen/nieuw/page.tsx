export default function NewCategoryPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Catalogus</p>
        <h1>Nieuwe categorie</h1>
        <span>Voeg een nieuwe productcategorie toe aan de webshop.</span>
      </section>

      <form className="admin-form">
        <label>
          Categorienaam
          <input type="text" name="name" placeholder="Bijvoorbeeld: Noten" />
        </label>

        <label>
          Slug
          <input type="text" name="slug" placeholder="noten" />
        </label>

        <label>
          Omschrijving
          <textarea name="description" placeholder="Korte categorieomschrijving" />
        </label>

        <button className="admin-button" type="submit">
          Categorie aanmaken
        </button>
      </form>
    </main>
  );
}
