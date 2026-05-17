import type { Metadata } from "next";
import { MarketMapBlinkers, MarketPresence } from "../components/home/MarketPresence";
import { ProductGrid } from "../components/product/ProductGrid";
import { listProducts } from "../lib/products";

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
        <MarketMapBlinkers />
        <div className="container landing-hero__inner">
          <p className="landing-kicker">De Notenman</p>
          <h1 id="landing-title">Dagvers van markt tot webshop</h1>
          <MarketPresence />
        </div>
      </section>

      <section className="container landing-shop" aria-label="Producten ontdekken">
        <ProductGrid products={products} productLimit={16} showFilters />
      </section>
    </main>
  );
}
