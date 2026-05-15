export default function ProductPage() {
  return (
    <main className="business-page">
      <section className="container product-detail-page">
        <div className="product-media-placeholder">
          Productafbeelding
        </div>

        <div className="product-detail-content">
          <p className="business-hero__label">Product</p>
          <h1>Amandelen ongezouten</h1>
          <p>
            Verse ongezouten amandelen, zorgvuldig geselecteerd en verpakt door
            De Notenman.
          </p>

          <strong className="product-detail-price">€ 14,95</strong>

          <form className="auth-form">
            <label>
              Variant
              <select name="variant">
                <option>Ongezouten</option>
                <option>Gezouten</option>
                <option>Gebrand</option>
                <option>Ongebrand</option>
              </select>
            </label>

            <label>
              Gewicht
              <select name="weight">
                <option>250g</option>
                <option>500g</option>
                <option>750g</option>
                <option>1kg</option>
              </select>
            </label>

            <label>
              Aantal
              <input type="number" name="quantity" defaultValue={1} min={1} />
            </label>

            <button className="button button--primary" type="submit">
              Toevoegen aan winkelwagen
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}