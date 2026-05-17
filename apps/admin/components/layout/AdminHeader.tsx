import Link from "next/link";
import { getAdminSession, logoutAction } from "../../lib/admin-auth";

export async function AdminHeader() {
  const session = await getAdminSession();

  return (
    <header className="admin-header">
      <Link href="/" className="admin-header__logo">
        De Notenman Admin
      </Link>

      <nav className="admin-header__nav" aria-label="Admin navigatie">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/producten">Producten</Link>
        <Link href="/categorieen">Categorieën</Link>
        <Link href="/bestellingen">Bestellingen</Link>
        <Link href="/klanten">Klanten</Link>
        <Link href="/zakelijk">Zakelijk</Link>
        <Link href="/instellingen">Instellingen</Link>
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
