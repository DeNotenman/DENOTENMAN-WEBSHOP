export function ShippingMethods() {
  return (
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
    </form>
  );
}