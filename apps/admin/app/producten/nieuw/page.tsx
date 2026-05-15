export default function NewProductPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Catalogus</p>
        <h1>Nieuw product</h1>
        <span>Voeg een nieuw product toe aan de webshop.</span>
      </section>

      <form className="admin-form">
        <label>
          Productnaam
          <input type="text" name="name" placeholder="Bijvoorbeeld: Amandelen ongezouten" />
        </label>

        <label>
          Categorie
          <select name="category">
            <option>Noten</option>
            <option>Zaden</option>
            <option>Gedroogd fruit</option>
            <option>Mixen</option>
            <option>Chocolade</option>
          </select>
        </label>

        <label>
          Korte omschrijving
          <textarea name="description" placeholder="Omschrijving voor de productpagina" />
        </label>

        <button className="admin-button" type="submit">
          Product aanmaken
        </button>
      </form>
    </main>
  );
}