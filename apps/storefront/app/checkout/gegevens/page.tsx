export default function CheckoutDetailsPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">Checkout</p>
        <h1>Gegevens</h1>

        <form className="auth-form">
          <label>
            Naam
            <input type="text" name="name" autoComplete="name" />
          </label>

          <label>
            E-mailadres
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label>
            Adres
            <input type="text" name="address" autoComplete="street-address" />
          </label>

          <button className="button button--primary" type="submit">
            Verder naar verzending
          </button>
        </form>
      </section>
    </main>
  );
}