export default function CheckoutShippingPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">Checkout</p>
        <h1>Verzending</h1>

        <form className="auth-form">
          <label>
            Verzendmethode
            <select name="shipping">
              <option>PostNL pakket — € 6,95</option>
              <option>Gratis verzending vanaf € 50</option>
            </select>
          </label>

          <label>
            Bezorgopmerking
            <textarea name="note" placeholder="Optioneel" />
          </label>

          <button className="button button--primary" type="submit">
            Verder naar betaling
          </button>
        </form>
      </section>
    </main>
  );
}