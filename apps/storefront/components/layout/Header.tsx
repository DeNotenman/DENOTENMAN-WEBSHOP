export function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-header__logo">
        De Notenman
      </a>

      <nav className="site-header__nav" aria-label="Hoofdnavigatie">
        <a href="/winkel">Winkel</a>
        <a href="/zoeken">Zoeken</a>
        <a href="/account">Account</a>
        <a href="/zakelijk">Zakelijk</a>
        <a href="/klantenservice">Klantenservice</a>
      </nav>

      <a href="/winkelwagen" className="site-header__cart" aria-label="Winkelwagen">
        Mand
      </a>
    </header>
  );
}