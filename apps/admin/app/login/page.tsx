export default function AdminLoginPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Admin</p>
        <h1>Inloggen</h1>
        <span>Log in om de beheeromgeving te openen.</span>
      </section>

      <form className="admin-form">
        <label>
          E-mailadres
          <input type="email" name="email" autoComplete="email" />
        </label>

        <label>
          Wachtwoord
          <input type="password" name="password" autoComplete="current-password" />
        </label>

        <button className="admin-button" type="submit">
          Inloggen
        </button>
      </form>
    </main>
  );
}