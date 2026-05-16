import { ProductGrid } from "../../components/product/ProductGrid";
import { listProducts } from "../../lib/products";

export default async function ShopPage() {
  const products = await listProducts();

  return (
    <main className="business-page">
      <section className="container list-page">
        <ProductGrid products={products} showFilters />
      </section>
    </main>
  );
}
