import { getCart } from "../../lib/cart";
import { Icon } from "../ui/Icon";

const navItems = [
  { href: "/winkel", label: "Winkel", icon: "medium_bag" },
  { href: "/zoeken", label: "Zoeken", icon: "search_loop" },
  { href: "/klantenservice", label: "Klantenservice", icon: "customer_service" },
  { href: "/zakelijk", label: "Zakelijk", icon: "bussines_icon" },
];

function HeaderCartAction({ itemCount }: { itemCount: number }) {
  const hasItems = itemCount > 0;
  const cartLabel = hasItems
    ? `Winkelwagen met ${itemCount} ${itemCount === 1 ? "product" : "producten"}`
    : "Winkelwagen is leeg";

  return (
    <a
      href="/winkelwagen"
      className={`site-header__action site-header__action--cart${hasItems ? " site-header__action--cart-active" : ""}`}
      aria-label={cartLabel}
      title={cartLabel}
    >
      <Icon name={hasItems ? "shopping-basket" : "Cart_empty"} />
      {itemCount >= 2 ? <span className="site-header__cart-badge">{itemCount}</span> : null}
    </a>
  );
}

function MobileCartLink({ itemCount }: { itemCount: number }) {
  const hasItems = itemCount > 0;

  return (
    <a href="/winkelwagen" className="mobile-menu__cart-link">
      <span className="mobile-menu__cart-icon">
        <Icon name={hasItems ? "shopping-basket" : "Cart_empty"} />
        {itemCount >= 2 ? <span className="site-header__cart-badge">{itemCount}</span> : null}
      </span>
      Winkelwagen
    </a>
  );
}

export async function Header() {
  const cart = await getCart();
  const itemCount = cart.itemCount;

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
        <a
          href="/account"
          className="site-header__action site-header__action--account"
          aria-label="Mijn account"
          title="Mijn account"
        >
          <Icon name="portrait" />
        </a>
        <HeaderCartAction itemCount={itemCount} />
        <a
          href="/checkout"
          className="site-header__action site-header__action--checkout"
          aria-label="Afrekenen"
          title="Afrekenen"
        >
          <Icon name="checkout" />
        </a>

        <details className="mobile-menu">
          <summary className="mobile-menu__button" aria-label="Menu openen">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </summary>

          <nav className="mobile-menu__panel" aria-label="Mobiele navigatie">
            <div className="mobile-menu__quick-actions" aria-label="Snelle acties">
              <a href="/account">
                <Icon name="portrait" />
                Mijn account
              </a>
              <MobileCartLink itemCount={itemCount} />
              <a href="/checkout">
                <Icon name="checkout" />
                Afrekenen
              </a>
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
