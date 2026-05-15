export default function NewBusinessCustomerPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijke klant</p>
        <h1>Nieuwe klant</h1>
        <span>
          Voeg een bedrijf toe aan de zakelijke bestelomgeving.
        </span>
      </section>

      <form className="admin-form">
        <label>
          Bedrijfsnaam
          <input type="text" name="company" placeholder="Bedrijfsnaam" />
        </label>

        <label>
          Contactpersoon
          <input type="text" name="contact" placeholder="Naam contactpersoon" />
        </label>

        <label>
          E-mailadres
          <input type="email" name="email" placeholder="inkoop@bedrijf.nl" />
        </label>

        <label>
          Factuuradres
          <textarea name="invoiceAddress" placeholder="Straat, postcode, plaats" />
        </label>

        <button className="admin-button" type="submit">
          Zakelijke klant aanmaken
        </button>
      </form>
    </main>
  );
}