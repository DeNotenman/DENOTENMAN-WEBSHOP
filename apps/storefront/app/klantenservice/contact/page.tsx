export default function ContactPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">Klantenservice</p>
        <h1>Contact</h1>

        <form className="auth-form">
          <label>
            Naam
            <input type="text" name="name" />
          </label>

          <label>
            E-mailadres
            <input type="email" name="email" />
          </label>

          <label>
            Bericht
            <textarea name="message" placeholder="Waarmee kunnen we helpen?" />
          </label>

          <button className="button button--primary" type="submit">
            Versturen
          </button>
        </form>
      </section>
    </main>
  );
}