export default function EmailSettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>E-mail</h1>
        <span>Beheer afzendergegevens, e-mailtemplates en notificaties.</span>
      </section>

      <form className="admin-form">
        <label>
          Afzendernaam
          <input type="text" name="fromName" defaultValue="De Notenman" />
        </label>

        <label>
          Afzender e-mailadres
          <input type="email" name="fromEmail" defaultValue="info@denotenman.com" />
        </label>

        <label>
          Standaard ordertekst
          <textarea
            name="orderText"
            defaultValue="Bedankt voor je bestelling bij De Notenman."
          />
        </label>

        <button className="admin-button" type="submit">
          E-mailinstellingen opslaan
        </button>
      </form>
    </main>
  );
}