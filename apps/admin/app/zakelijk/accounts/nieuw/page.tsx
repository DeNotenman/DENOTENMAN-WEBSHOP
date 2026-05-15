export default function NewBusinessAccountPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk account</p>
        <h1>Nieuw account</h1>
        <span>
          Maak een gebruiker aan en koppel deze aan een zakelijke klant.
        </span>
      </section>

      <form className="admin-form">
        <label>
          Naam
          <input type="text" name="name" placeholder="Naam contactpersoon" />
        </label>

        <label>
          E-mailadres
          <input type="email" name="email" placeholder="naam@bedrijf.nl" />
        </label>

        <label>
          Zakelijke klant
          <select name="customer">
            <option>Voorbeeldbedrijf B.V.</option>
            <option>Catering Van Dijk</option>
          </select>
        </label>

        <label>
          Rol
          <select name="role">
            <option>Inkoper</option>
            <option>Beheerder</option>
            <option>Alleen facturen</option>
          </select>
        </label>

        <button className="admin-button" type="submit">
          Account aanmaken
        </button>
      </form>
    </main>
  );
}