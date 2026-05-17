import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductGallery } from "../../../components/product/ProductGallery";
import { ProductInfo } from "../../../components/product/ProductInfo";
import { ProductPurchaseForm } from "../../../components/product/ProductPurchaseForm";
import { ProductTabs } from "../../../components/product/ProductTabs";
import { RelatedProducts } from "../../../components/product/RelatedProducts";
import {
  formatPrice,
  getProductBySlug,
  listProducts,
} from "../../../lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSiteBaseUrl() {
  const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (rawSiteUrl) {
    try {
      return new URL(rawSiteUrl).origin;
    } catch {
      // Keep a stable fallback for metadata in local development.
    }
  }

  return "https://denotenman.nl";
}

function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function cleanProductText(text?: string | null) {
  return text?.replace(/^\s*ingredienten?\s*:\s*/i, "").trim() || null;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const price = product.weights[0]?.price ?? product.variants[0]?.price ?? product.basePrice;
  const description =
    cleanProductText(product.description) ??
    `Bestel ${product.name} online bij De Notenman. Dagvers geselecteerd, veilig betalen en snel geleverd.`;

  return {
    title: `${product.name} bestellen | De Notenman`,
    description,
    alternates: {
      canonical: `/winkel/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | De Notenman`,
      description,
      images: product.image ? [product.image] : ["/Notenman_onlylogo.png"],
    },
    other: {
      "product:price:amount": String(price),
      "product:price:currency": "EUR",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = (await listProducts()).filter((item) => item.slug !== product.slug).slice(0, 8);
  const description = cleanProductText(product.description);
  const lowestWeightPrice = product.weights[0]?.price;
  const displayPrice = formatPrice(lowestWeightPrice ?? product.basePrice);
  const stockLabel = product.variants[0]?.stockLabel ?? "Op voorraad";
  const siteBaseUrl = getSiteBaseUrl();
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image ? [product.image] : [`${siteBaseUrl}/Notenman_onlylogo.png`],
    description:
      description ??
      `${product.name} van De Notenman is dagvers geselecteerd en online te bestellen.`,
    brand: {
      "@type": "Brand",
      name: "De Notenman",
    },
    category: product.categoryLabel,
    offers: {
      "@type": "Offer",
      availability: stockLabel.toLowerCase().includes("niet")
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock",
      price: String(lowestWeightPrice ?? product.basePrice),
      priceCurrency: "EUR",
      url: `${siteBaseUrl}/winkel/${product.slug}`,
    },
  };

  return (
    <main className="business-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(productJsonLd) }}
      />

      <section className="container product-detail-page">
        <ProductGallery image={product.image} name={product.name} />

        <div className="product-detail-content">
          <ProductInfo
            description={product.description}
            name={product.name}
            origin={product.origin}
            price={displayPrice}
            stockLabel={stockLabel}
          />

          <ul className="product-trust-list" aria-label="Waarom bestellen bij De Notenman">
            <li>Dagvers geselecteerd</li>
            <li>Veilig betalen</li>
            <li>Snel geleverd</li>
          </ul>

          <ProductPurchaseForm product={product} />
        </div>
      </section>

      <section className="container product-detail-support">
        <RelatedProducts products={relatedProducts} />
        <ProductTabs
          category={product.categoryLabel}
          description={product.description}
          name={product.name}
        />
      </section>
    </main>
  );
}
