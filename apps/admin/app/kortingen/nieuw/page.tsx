export default function NewDiscountPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Nieuwe korting</h1>
        <span>Maak een kortingscode of actie aan.</span>
      </section>

      <form className="admin-form">
        <label>
          Kortingscode
          <input type="text" name="code" placeholder="Bijvoorbeeld: WELKOM10" />
        </label>

        <label>
          Type korting
          <select name="type">
            <option>Percentage</option>
            <option>Vast bedrag</option>
            <option>Gratis verzending</option>
          </select>
        </label>

        <label>
          Waarde
          <input type="text" name="value" placeholder="Bijvoorbeeld: 10%" />
        </label>

        <button className="admin-button" type="submit">
          Korting aanmaken
        </button>
      </form>
    </main>
  );
}