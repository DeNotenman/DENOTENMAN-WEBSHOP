const navItems = [
  { href: "/winkel", label: "Winkel" },
  { href: "/zoeken", label: "Zoeken" },
  { href: "/zakelijk", label: "Zakelijk" },
  { href: "/klantenservice", label: "Klantenservice" },
  { href: "/account", label: "Account" },
];

export function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-header__brand" aria-label="De Notenman home">
        {/* Later logo vervangen: plaats definitief logo op apps/storefront/public/logo.svg */}
        <span className="site-header__logo-mark" aria-hidden="true">
          DN
        </span>
        <span className="site-header__logo-text">De Notenman</span>
      </a>

      <nav className="site-header__nav" aria-label="Hoofdnavigatie">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <a href="/winkelwagen" className="site-header__cart" aria-label="Winkelwagen">
          Mand
        </a>

        <details className="mobile-menu">
          <summary className="mobile-menu__button" aria-label="Menu openen">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>

          <nav className="mobile-menu__panel" aria-label="Mobiele navigatie">
            <div className="mobile-menu__asset-note">
              Logo, favicon en icons: zie <code>apps/storefront/public</code>.
            </div>
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
            <a href="/winkelwagen">Winkelwagen</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
