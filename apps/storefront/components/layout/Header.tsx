import { Icon } from "../ui/Icon";

const navItems = [
  { href: "/winkel", label: "Winkel", icon: "shopping-bag" },
  { href: "/zoeken", label: "Zoeken", icon: "search-location" },
  { href: "/klantenservice", label: "Klantenservice", icon: "user-support" },
];

const actionItems = [
  { href: "/account", label: "My account", icon: "user-circle", modifier: "account" },
  { href: "/winkelwagen", label: "Winkelwagen", icon: "shopping-cart-1", modifier: "cart" },
  { href: "/checkout", label: "Afrekenen", icon: "credit-card", modifier: "checkout" },
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
        {actionItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={`site-header__action site-header__action--${item.modifier}`}
            aria-label={item.label}
            title={item.label}
          >
            <Icon name={item.icon} />
          </a>
        ))}

        <details className="mobile-menu">
          <summary className="mobile-menu__button" aria-label="Menu openen">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>

          <nav className="mobile-menu__panel" aria-label="Mobiele navigatie">
            <div className="mobile-menu__quick-actions" aria-label="Snelle acties">
              {actionItems.map((item) => (
                <a key={item.href} href={item.href}>
                  <Icon name={item.icon} />
                  {item.label}
                </a>
              ))}
            </div>

            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                <Icon name={item.icon} />
                {item.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
