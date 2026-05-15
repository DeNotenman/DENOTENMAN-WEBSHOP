export default function GeneralSettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>Algemeen</h1>
        <span>Beheer webshopnaam, contactgegevens en basisinstellingen.</span>
      </section>

      <form className="admin-form">
        <label>
          Webshopnaam
          <input type="text" name="shopName" defaultValue="De Notenman" />
        </label>

        <label>
          Contact e-mailadres
          <input type="email" name="email" defaultValue="info@denotenman.com" />
        </label>

        <label>
          Telefoonnummer
          <input type="text" name="phone" placeholder="Telefoonnummer" />
        </label>

        <button className="admin-button" type="submit">
          Instellingen opslaan
        </button>
      </form>
    </main>
  );
}