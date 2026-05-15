export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <h2>De Notenman</h2>
          <p>Van markt tot webshop: noten, pitten en gedroogd fruit.</p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigatie">
          <a href="/klantenservice">Klantenservice</a>
          <a href="/privacyverklaring">Privacy</a>
          <a href="/algemene-voorwaarden">Voorwaarden</a>
          <a href="/zakelijk">Zakelijk</a>
        </nav>
      </div>
    </footer>
  );
}