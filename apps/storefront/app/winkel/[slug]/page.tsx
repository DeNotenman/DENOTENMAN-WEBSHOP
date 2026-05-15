import { AddToCartButton } from "../../../components/product/AddToCartButton";
import { ProductGallery } from "../../../components/product/ProductGallery";
import { ProductInfo } from "../../../components/product/ProductInfo";
import { ProductReviews } from "../../../components/product/ProductReviews";
import { ProductTabs } from "../../../components/product/ProductTabs";
import { QuantitySelector } from "../../../components/product/QuantitySelector";
import { RelatedProducts } from "../../../components/product/RelatedProducts";
import { VariantSelector } from "../../../components/product/VariantSelector";

export default function ProductPage() {
  return (
    <main className="business-page">
      <section className="container product-detail-page">
        <ProductGallery />

        <div className="product-detail-content">
          <ProductInfo />

          <form className="auth-form">
            <VariantSelector />

            <label className="form-field">
              <span>Gewicht</span>
              <select name="weight">
                <option>250g</option>
                <option>500g</option>
                <option>750g</option>
                <option>1kg</option>
              </select>
            </label>

            <QuantitySelector />
            <AddToCartButton />
          </form>
        </div>
      </section>

      <section className="container">
        <ProductTabs />
        <ProductReviews />
        <RelatedProducts />
      </section>
    </main>
  );
}