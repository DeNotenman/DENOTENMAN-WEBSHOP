import { Icon } from "../ui/Icon";

const navItems = [
  { href: "/winkel", label: "Winkel", icon: "shopping-bag" },
  { href: "/zoeken", label: "Zoeken", icon: "search-location" },
  { href: "/zakelijk", label: "Zakelijk", icon: "briefcase" },
  { href: "/klantenservice", label: "Klantenservice", icon: "user-support" },
  { href: "/account", label: "Account", icon: "user-account-support" },
];

export function Header() {
  return (
    <header className="site-header">
      <a href="/" className="site-header__brand" aria-label="De Notenman home">
        <img className="site-header__logo-image" src="/Notenman_onlylogo.png" alt="De Notenman" />
      </a>

      <nav className="site-header__nav" aria-label="Hoofdnavigatie">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            <Icon name={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="site-header__actions">
        <a href="/winkelwagen" className="site-header__cart" aria-label="Winkelwagen">
          <Icon name="shopping-cart-1" />
          Mand
        </a>

        <details className="mobile-menu">
          <summary className="mobile-menu__button" aria-label="Menu openen">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>

          <nav className="mobile-menu__panel" aria-label="Mobiele navigatie">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                <Icon name={item.icon} />
                {item.label}
              </a>
            ))}
            <a href="/winkelwagen">
              <Icon name="shopping-cart-1" />
              Winkelwagen
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
