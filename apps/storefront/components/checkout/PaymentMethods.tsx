export function PaymentMethods() {
  return (
    <form className="auth-form">
      <label>
        Betaalmethode
        <select name="payment">
          <option>iDEAL</option>
          <option>Bancontact</option>
          <option>Creditcard</option>
        </select>
      </label>
    </form>
  );
}