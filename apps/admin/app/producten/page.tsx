const products = [
  { name: "Amandelen ongezouten", category: "Noten", stock: "42 kg" },
  { name: "Cashewnoten gebrand", category: "Noten", stock: "28 kg" },
  { name: "Notenmix luxe", category: "Mixen", stock: "16 kg" },
];

export default function AdminProductsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Catalogus</p>
        <h1>Producten</h1>
        <span>Beheer producten, voorraad, prijzen, media en zichtbaarheid.</span>
      </section>

      <section className="admin-list">
        {products.map((product) => (
          <a key={product.name} href="/producten/voorbeeld-product" className="admin-list-row">
            <div>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
            </div>

            <strong>{product.stock}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}