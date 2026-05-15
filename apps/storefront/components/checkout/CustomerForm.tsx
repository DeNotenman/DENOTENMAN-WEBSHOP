export function CustomerForm() {
  return (
    <form className="auth-form">
      <label>
        Naam
        <input type="text" name="name" autoComplete="name" />
      </label>

      <label>
        E-mailadres
        <input type="email" name="email" autoComplete="email" />
      </label>

      <label>
        Telefoonnummer
        <input type="text" name="phone" autoComplete="tel" />
      </label>
    </form>
  );
}