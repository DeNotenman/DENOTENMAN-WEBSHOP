import { notFound } from "next/navigation";
import { ProductGrid } from "../../../components/product/ProductGrid";
import { getCategoryLinks, listProducts } from "../../../lib/products";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const allProducts = await listProducts();
  const category = getCategoryLinks(allProducts).find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="business-page">
      <section className="container list-page">
        <ProductGrid activeCategory={slug} products={allProducts} showFilters />
      </section>
    </main>
  );
}
