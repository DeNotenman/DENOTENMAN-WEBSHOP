const inventory = [
  { product: "Amandelen ongezouten", stock: "42 kg", status: "Op voorraad" },
  { product: "Cashewnoten gebrand", stock: "28 kg", status: "Op voorraad" },
  { product: "Notenmix luxe", stock: "4 kg", status: "Lage voorraad" },
];

export default function InventoryPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Voorraad</p>
        <h1>Voorraadoverzicht</h1>
        <span>Bekijk actuele voorraadstanden en voorraadstatussen per product.</span>
      </section>

      <section className="admin-list">
        {inventory.map((item) => (
          <article key={item.product} className="admin-list-row">
            <div>
              <h2>{item.product}</h2>
              <p>{item.stock}</p>
            </div>

            <strong>{item.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}