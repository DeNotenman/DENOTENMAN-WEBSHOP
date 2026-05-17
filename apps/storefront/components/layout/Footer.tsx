import { Icon } from "../ui/Icon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <img className="site-footer__logo" src="/Notenman_onlylogo.png" alt="De Notenman" />
          <p>Van markt tot webshop: noten, pitten en gedroogd fruit.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigatie">
          <a href="/klantenservice"><Icon name="customer_service" />Klantenservice</a>
          <a href="/privacyverklaring"><Icon name="question-square" />Privacy</a>
          <a href="/algemene-voorwaarden"><Icon name="Mail" />Voorwaarden</a>
          <a href="/zakelijk"><Icon name="webshop" />Zakelijk</a>
        </nav>
      </div>
    </footer>
  );
}
