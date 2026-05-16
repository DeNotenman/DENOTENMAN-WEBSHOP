import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "../components/ui/Icon";
import { formatPrice, listProducts, type StorefrontProduct } from "../lib/products";

const categories = [
  {
    href: "/categorie/noten",
    icon: "acorn",
    label: "Noten",
    text: "Gebrand, ongebrand, naturel en gemixt.",
    meta: "Voor borrel, keuken en voorraadkast",
  },
  {
    href: "/categorie/pitten-zaden",
    icon: "wheat-grain",
    label: "Pitten en zaden",
    text: "Voor ontbijt, bakkerij, salades en topping.",
    meta: "Klein van stuk, groot in gebruik",
  },
  {
    href: "/categorie/gedroogd-fruit",
    icon: "apple-fruit",
    label: "Gedroogd fruit",
    text: "Zoet, fris en makkelijk mee te nemen.",
    meta: "Los of in mixen",
  },
];

const trustSignals = [
  {
    icon: "leaf-1",
    label: "Dagvers geselecteerd",
    text: "Kleine batches en een assortiment dat voelt als de marktkraam.",
  },
  {
    icon: "delivery-truck",
    label: "Aan huis of zaak",
    text: "Bestel voor thuis, kantoor, horeca of wederverkoop.",
  },
  {
    icon: "shield-1",
    label: "Veilig bestellen",
    text: "Duidelijke checkout en vertrouwde betaalstappen.",
  },
];

const journeySteps = [
  {
    label: "Vandaag iets nodig",
    text: "Ga direct naar de winkel en kies uit noten, mixen, pitten, zaden en fruit.",
  },
  {
    label: "Vaste voorraad",
    text: "Gebruik categorieen en zoekfunctie om sneller opnieuw te bestellen.",
  },
];

function getSiteBaseUrl() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (rawSiteUrl) {
    try {
      return new URL(rawSiteUrl).origin;
    } catch {
      // Fall back to the public production URL when local env is unset or malformed.
    }
  }

  return "https://denotenman.nl";
}

const siteBaseUrl = getSiteBaseUrl();

function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function getCategoryIcon(category: string) {
  if (category.includes("noten")) return "acorn";
  if (category.includes("fruit")) return "apple-fruit";
  if (category.includes("zaden") || category.includes("pitten")) return "wheat-grain";
  if (category.includes("honing")) return "jar-food";
  if (category.includes("muesli")) return "food-container";
  return "shopping-bag";
}

function getFeaturedProducts(products: StorefrontProduct[]) {
  return products.slice(0, 3).map((product) => ({
    href: `/winkel/${product.slug}`,
    icon: getCategoryIcon(product.category),
    label: product.name,
    text: product.description ?? product.categoryLabel,
    price: formatPrice(product.weights[0]?.price ?? product.basePrice),
  }));
}

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: "De Notenman | Noten, pitten en gedroogd fruit",
  description:
    "Bestel dagverse noten, pitten, zaden, mixen en gedroogd fruit bij De Notenman.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "De Notenman",
    description:
      "Van markt tot webshop: noten, pitten, zaden, mixen en gedroogd fruit.",
    images: ["/Notenman_onlylogo.png"],
  },
};

export default async function HomePage() {
  const products = await listProducts();
  const featuredProducts = getFeaturedProducts(products);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "De Notenman",
    url: siteBaseUrl,
    image: `${siteBaseUrl}/Notenman_onlylogo.png`,
    description:
      "Specialist in noten, pitten, zaden, mixen en gedroogd fruit.",
    sameAs: [],
  };

  return (
    <main className="landing-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
      />

      <section className="landing-hero" aria-labelledby="landing-title">
        <div className="container landing-hero__grid">
          <div className="landing-hero__content">
            <h2 id="landing-title">Dagvers net als bij ons op de markt, nu ook online!</h2>
            <p className="landing-hero__lead">
              De lekkerste noten, mixen, pitten, zaden en gedroogd fruit.
            </p>

            <div className="landing-hero__actions" aria-label="Belangrijkste acties">
              <Link href="#marktfavorieten" className="button button--primary landing-button">
                <Icon name="shopping-cart-1" />
                Snel kopen
              </Link>
              <Link href="/winkel" className="button button--secondary landing-button">
                <Icon name="shopping-bag" />
                Naar de winkel
              </Link>
            </div>

            <dl className="landing-hero__facts" aria-label="Service samenvatting">
              <div>
                <dt>Assortiment</dt>
                <dd>Noten, mixen, pitten, zaden en fruit</dd>
              </div>
              <div>
                <dt>Bestemming</dt>
                <dd>Thuis, kantoor en horeca</dd>
              </div>
            </dl>
          </div>

          <div className="landing-hero__showcase" aria-label="Uitgelicht assortiment">
            <div id="marktfavorieten" className="landing-market-card">
              <div className="landing-market-card__head">
                <strong>Uitgelicht</strong>
              </div>

              <div className="landing-market-card__products">
                {featuredProducts.map((product) => (
                  <Link key={product.href} href={product.href} className="landing-market-product">
                    <span className="landing-market-product__icon">
                      <Icon name={product.icon} />
                    </span>
                    <span>
                      <strong>{product.label}</strong>
                      <small>{product.text}</small>
                    </span>
                    <b>{product.price}</b>
                  </Link>
                ))}
              </div>

              <Link href="/winkel" className="landing-market-card__link">
                Alle producten
                <Icon name="arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-trust" aria-label="Waarom klanten kiezen voor De Notenman">
        <ul className="container landing-trust__grid">
          {trustSignals.map((signal) => (
            <li key={signal.label} className="landing-trust__item">
              <Icon name={signal.icon} />
              <strong>{signal.label}</strong>
              <span>{signal.text}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className="landing-final" aria-labelledby="final-title">
        <div className="container landing-final__inner">
          <h2 id="final-title">Klaar om te bestellen?</h2>
          <div className="landing-hero__actions">
            <Link href="/winkel" className="button button--primary landing-button">
              Naar de winkel
            </Link>
          </div>
        </div>
      </section>/
      <section className="landing-section" aria-labelledby="categories-title">
        <div className="container landing-section__head">
          <h2 id="categories-title">Shop per categorie</h2>
        </div>

        <div className="container landing-category-grid">
          {categories.map((category) => (
            <Link key={category.href} href={category.href} className="landing-category">
              <span className="landing-category__icon">
                <Icon name={category.icon} />
              </span>
              <span className="landing-category__meta">{category.meta}</span>
              <strong>{category.label}</strong>
              <span>{category.text}</span>
              <span className="landing-category__action">
                Bekijk assortiment
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="landing-final" aria-labelledby="final-title">
        <div className="container landing-final__inner">
          <h2 id="final-title">Klaar om te bestellen?</h2>
          <div className="landing-hero__actions">
            <Link href="/winkel" className="button button--primary landing-button">
              Naar de winkel
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
