import { formatAdminPrice, listAdminProducts } from "../../lib/products";

export default async function AdminProductsPage() {
  const products = await listAdminProducts();

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Catalogus</p>
        <h1>Producten</h1>
        <span>Beheer producten, prijzen, media en zichtbaarheid in de webshop.</span>
      </section>

      <div className="admin-actions">
        <a href="/producten/nieuw" className="admin-button">
          Nieuw product
        </a>
      </div>

      <section className="admin-list">
        {products.map((product) => (
          <a key={product.id} href={`/producten/${product.id}`} className="admin-list-row">
            <div className="admin-product-summary">
              {product.image && <img src={product.image} alt="" />}
              <div>
                <h2>{product.name}</h2>
                <p>{product.categoryLabel ?? product.category}</p>
              </div>
            </div>

            <span>{formatAdminPrice(product.basePrice)}</span>
            <strong>{product.isActive ? "Actief" : "Verborgen"}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}
