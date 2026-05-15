export default function ProductSeoPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Product SEO</p>
        <h1>Amandelen ongezouten</h1>
        <span>Beheer titel, meta description, slug en zoekmachinegegevens.</span>
      </section>

      <form className="admin-form">
        <label>
          SEO titel
          <input type="text" name="title" defaultValue="Amandelen ongezouten kopen" />
        </label>

        <label>
          Slug
          <input type="text" name="slug" defaultValue="amandelen-ongezouten" />
        </label>

        <label>
          Meta description
          <textarea
            name="description"
            defaultValue="Koop amandelen ongezouten bij De Notenman. Vers verpakt en snel verzonden."
          />
        </label>

        <button className="admin-button" type="submit">
          SEO opslaan
        </button>
      </form>
    </main>
  );
}