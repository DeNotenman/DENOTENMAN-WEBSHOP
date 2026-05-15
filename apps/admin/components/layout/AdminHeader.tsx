export function AdminHeader() {
  return (
    <header className="admin-header">
      <a href="/" className="admin-header__logo">
        De Notenman Admin
      </a>

      <nav className="admin-header__nav" aria-label="Admin navigatie">
        <a href="/dashboard">Dashboard</a>
        <a href="/producten">Producten</a>
        <a href="/bestellingen">Bestellingen</a>
        <a href="/zakelijk">Zakelijk</a>
        <a href="/instellingen">Instellingen</a>
      </nav>
    </header>
  );
}