export default function CheckoutPaymentPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">Checkout</p>
        <h1>Betaling</h1>

        <form className="auth-form">
          <label>
            Betaalmethode
            <select name="payment">
              <option>iDEAL</option>
              <option>Bancontact</option>
              <option>Creditcard</option>
            </select>
          </label>

          <button className="button button--primary" type="submit">
            Verder naar controleren
          </button>
        </form>
      </section>
    </main>
  );
}