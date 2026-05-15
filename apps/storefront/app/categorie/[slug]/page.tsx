import { notFound } from "next/navigation";
import { ProductGrid } from "../../../components/product/ProductGrid";
import { getCategoryLinks, listProducts, listProductsByCategory } from "../../../lib/products";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [allProducts, products] = await Promise.all([
    listProducts(),
    listProductsByCategory(slug),
  ]);
  const category = getCategoryLinks(allProducts).find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <p className="business-hero__label">Categorie</p>
          <h1>{category.label}</h1>
          <p>Bekijk alle producten binnen deze categorie.</p>
        </div>

        <ProductGrid products={products} />
      </section>
    </main>
  );
}
