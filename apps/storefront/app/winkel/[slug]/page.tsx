import { notFound } from "next/navigation";
import { AddToCartButton } from "../../../components/product/AddToCartButton";
import { ProductGallery } from "../../../components/product/ProductGallery";
import { ProductInfo } from "../../../components/product/ProductInfo";
import { ProductReviews } from "../../../components/product/ProductReviews";
import { ProductTabs } from "../../../components/product/ProductTabs";
import { QuantitySelector } from "../../../components/product/QuantitySelector";
import { RelatedProducts } from "../../../components/product/RelatedProducts";
import { VariantSelector } from "../../../components/product/VariantSelector";
import {
  formatPrice,
  getProductBySlug,
  listProductsByCategory,
} from "../../../lib/products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = (await listProductsByCategory(product.category))
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);
  const lowestWeightPrice = product.weights[0]?.price;
  const displayPrice = formatPrice(lowestWeightPrice ?? product.basePrice);
  const stockLabel = product.variants[0]?.stockLabel ?? "Op voorraad";

  return (
    <main className="business-page">
      <section className="container product-detail-page">
        <ProductGallery image={product.image} name={product.name} />

        <div className="product-detail-content">
          <ProductInfo
            category={product.categoryLabel}
            description={product.description}
            name={product.name}
            origin={product.origin}
            price={displayPrice}
            stockLabel={stockLabel}
          />

          <form className="auth-form">
            <VariantSelector variants={product.variants.map((variant) => variant.name)} />

            {product.weights.length > 0 && (
              <label className="form-field">
                <span>Gewicht</span>
                <select name="weight">
                  {product.weights.map((weight) => (
                    <option key={weight.id} value={weight.grams}>
                      {weight.label} - {formatPrice(weight.price)}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <QuantitySelector />
            <AddToCartButton />
          </form>
        </div>
      </section>

      <section className="container">
        <ProductTabs />
        <ProductReviews />
        <RelatedProducts products={relatedProducts} />
      </section>
    </main>
  );
}
