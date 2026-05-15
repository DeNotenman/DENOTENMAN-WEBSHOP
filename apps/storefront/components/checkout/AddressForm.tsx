export function AddressForm() {
  return (
    <form className="auth-form">
      <label>
        Straat en huisnummer
        <input type="text" name="street" autoComplete="street-address" />
      </label>

      <label>
        Postcode
        <input type="text" name="postalCode" autoComplete="postal-code" />
      </label>

      <label>
        Plaats
        <input type="text" name="city" autoComplete="address-level2" />
      </label>
    </form>
  );
}