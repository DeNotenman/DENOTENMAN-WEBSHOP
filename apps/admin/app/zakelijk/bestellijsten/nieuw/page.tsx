export default function NewBusinessOrderListPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Nieuwe bestellijst</h1>
        <span>
          Stel een bestellijst samen voor een zakelijke klant.
        </span>
      </section>

      <form className="admin-form">
        <label>
          Zakelijke klant
          <select name="customer">
            <option>Voorbeeldbedrijf B.V.</option>
            <option>Catering Van Dijk</option>
          </select>
        </label>

        <label>
          Naam bestellijst
          <input type="text" name="title" placeholder="Bijvoorbeeld: Vaste bestellijst" />
        </label>

        <label>
          Interne notitie
          <textarea name="note" placeholder="Optioneel" />
        </label>

        <button className="admin-button" type="submit">
          Bestellijst aanmaken
        </button>
      </form>
    </main>
  );
}