import Link from "next/link";
import type { CSSProperties } from "react";
import { MARKET_LOCATIONS } from "../../lib/market-locations";

const mapFocusPositions: Record<string, string> = {
  Anvers: "9% 38%",
  Hilvarenbeek: "51% 56%",
  Uden: "68% 55%",
  Haaren: "91% 65%",
};

const footerGroups = [
  {
    title: "Webshop",
    links: [
      { href: "/winkel", label: "Winkel" },
      { href: "/categorie/noten", label: "Noten" },
      { href: "/categorie/zuidvruchten", label: "Gedroogd fruit" },
      { href: "/categorie/zaden-pitten", label: "Pitten & zaden" },
      { href: "/categorie/snacks", label: "Snacks" },
      { href: "/categorie/superfoods", label: "Superfoods" },
    ],
  },
  {
    title: "Service",
    links: [
      { href: "/klantenservice", label: "Klantenservice" },
      { href: "/klantenservice/verzenden", label: "Verzenden" },
      { href: "/klantenservice/retourneren", label: "Retourneren" },
      { href: "/klantenservice/betalen", label: "Betalen" },
      { href: "/klantenservice/veelgestelde-vragen", label: "Veelgestelde vragen" },
      { href: "/klantenservice/contact", label: "Contact" },
    ],
  },
  {
    title: "De Notenman",
    links: [
      { href: "/over-ons", label: "Over De Notenman" },
      { href: "/over-ons", label: "Markt & webshop" },
      { href: "/zakelijk", label: "Zakelijk bestellen" },
      { href: "/privacyverklaring", label: "Privacyverklaring" },
      { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <section className="site-footer__brand" aria-labelledby="footer-brand-title">
          <img className="site-footer__logo" src="/Notenman_onlylogo.png" alt="De Notenman" />
          <h2 id="footer-brand-title">Dagvers van markt tot webshop</h2>
          <p>
            Je vindt De Notenman wekelijks op de markt in Anvers, Hilvarenbeek, Uden en Haaren.
            Online bestel je dezelfde selectie noten, pitten, zaden en gedroogd fruit gemakkelijk
            via de webshop.
          </p>
        </section>

        <section className="site-footer__market" aria-labelledby="footer-market-title">
          <div className="site-footer__section-heading">
            <h2 id="footer-market-title">Marktlocaties</h2>
            <Link href="/over-ons">Bekijk onze route</Link>
          </div>

          <div className="site-footer__map-strip" aria-label="Kaart met marktlocaties">
            {MARKET_LOCATIONS.map((location) => (
              <Link
                className="site-footer__map-card"
                href="/over-ons"
                key={location.name}
                style={
                  {
                    "--map-position": mapFocusPositions[location.name] ?? `${location.x}% ${location.y}%`,
                    "--pin-x": "50%",
                    "--pin-y": "46%",
                  } as CSSProperties
                }
                aria-label={`Marktlocatie ${location.name}, ${location.label}`}
              >
                <span className="site-footer__pin" aria-hidden="true" />
                <span className="site-footer__map-label">
                  <strong>{location.name}</strong>
                  <span>{location.label}</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        <nav className="site-footer__nav" aria-label="Footer navigatie">
          {footerGroups.map((group) => (
            <section className="site-footer__link-group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={`${group.title}-${link.href}-${link.label}`}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </nav>
      </div>
    </footer>
  );
}
