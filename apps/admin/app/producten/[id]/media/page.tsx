import { notFound } from "next/navigation";
import { saveProductAction } from "../../../../actions/product.actions";
import { getAdminProduct } from "../../../../lib/products";

type ProductMediaPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductMediaPage({ params }: ProductMediaPageProps) {
  const { id } = await params;
  const product = await getAdminProduct(Number(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Productmedia</p>
        <h1>{product.name}</h1>
        <span>Upload een nieuwe hoofdafbeelding voor de productpagina.</span>
      </section>

      {product.image && (
        <section className="admin-image-preview admin-image-preview--large">
          <img src={product.image} alt="" />
        </section>
      )}

      <form className="admin-form" action={saveProductAction}>
        <input type="hidden" name="id" value={product.id} />
        <input type="hidden" name="name" value={product.name} />
        <input type="hidden" name="slug" value={product.slug} />
        <input type="hidden" name="category" value={product.category} />
        <input type="hidden" name="categoryLabel" value={product.categoryLabel ?? ""} />
        <input type="hidden" name="basePrice" value={product.basePrice} />
        <input type="hidden" name="unit" value={product.unit ?? ""} />
        <input type="hidden" name="badge" value={product.badge ?? ""} />
        <input type="hidden" name="origin" value={product.origin ?? ""} />
        <input type="hidden" name="description" value={product.description ?? ""} />
        <input type="hidden" name="image" value={product.image ?? ""} />
        {product.isActive && <input type="hidden" name="isActive" value="on" />}

        <label>
          Nieuwe hoofdafbeelding
          <input type="file" name="imageFile" accept="image/jpeg,image/png,image/webp" required />
        </label>

        <button className="admin-button" type="submit">
          Foto uploaden
        </button>
      </form>
    </main>
  );
}
