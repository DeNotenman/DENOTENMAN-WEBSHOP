import { getAdminSession, logoutAction } from "../../lib/admin-auth";

export async function AdminHeader() {
  const session = await getAdminSession();

  return (
    <header className="admin-header">
      <a href="/" className="admin-header__logo">
        De Notenman Admin
      </a>

      <nav className="admin-header__nav" aria-label="Admin navigatie">
        <a href="/dashboard">Dashboard</a>
        <a href="/producten">Producten</a>
        <a href="/categorieen">Categorieën</a>
        <a href="/bestellingen">Bestellingen</a>
        <a href="/klanten">Klanten</a>
        <a href="/zakelijk">Zakelijk</a>
        <a href="/instellingen">Instellingen</a>
      </nav>

      {session ? (
        <form action={logoutAction}>
          <button className="admin-header__logout" type="submit">
            Uitloggen
          </button>
        </form>
      ) : null}
    </header>
  );
}
