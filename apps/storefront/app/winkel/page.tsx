import { ProductGrid } from "../../components/product/ProductGrid";
import { getCategoryLinks, listProducts } from "../../lib/products";

export default async function ShopPage() {
  const products = await listProducts();
  const categories = getCategoryLinks(products);

  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <p className="business-hero__label">Winkel</p>
          <h1>Onze producten</h1>
          <p>Ontdek noten, pitten, zaden, mixen, chocolade en gedroogd fruit.</p>
        </div>

        <div className="shop-filters">
          {categories.map((category) => (
            <a key={category.slug} href={category.href}>
              {category.label}
            </a>
          ))}
        </div>

        <ProductGrid products={products} />
      </section>
    </main>
  );
}
