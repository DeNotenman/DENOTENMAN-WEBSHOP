const products = [
  {
    name: "Amandelen ongezouten",
    weight: "1 kg",
    price: "€ 14,95",
    status: "Actief",
  },
  {
    name: "Cashewnoten gebrand",
    weight: "1 kg",
    price: "€ 16,95",
    status: "Actief",
  },
  {
    name: "Notenmix luxe",
    weight: "1 kg",
    price: "€ 18,95",
    status: "Actief",
  },
];

export default function BusinessOrderListDetailAdminPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Bestellijst</p>
        <h1>Vaste bestellijst</h1>
        <span>
          Beheer producten, aantallen, prijzen en beschikbaarheid binnen deze
          zakelijke bestellijst.
        </span>
      </section>

      <section className="admin-list">
        {products.map((product) => (
          <article key={product.name} className="admin-list-row">
            <div>
              <h2>{product.name}</h2>
              <p>{product.weight}</p>
            </div>

            <span>{product.price}</span>
            <strong>{product.status}</strong>
          </article>
        ))}
      </section>

      <form className="admin-form">
        <label>
          Product toevoegen
          <input type="text" name="product" placeholder="Zoek product" />
        </label>

        <button className="admin-button" type="submit">
          Product toevoegen
        </button>
      </form>
    </main>
  );
}