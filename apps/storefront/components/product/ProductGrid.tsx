import type { StorefrontProduct } from "../../lib/products";
import { formatPrice } from "../../lib/products";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  products: StorefrontProduct[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="list-grid">
      {products.map((product) => (
        <ProductCard
          key={product.slug}
          name={product.name}
          category={product.categoryLabel}
          price={formatPrice(product.basePrice)}
          href={`/winkel/${product.slug}`}
          image={product.image}
        />
      ))}
    </div>
  );
}
