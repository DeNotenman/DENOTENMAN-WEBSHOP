const mutations = [
  { product: "Amandelen ongezouten", change: "+12 kg", reason: "Inkoop" },
  { product: "Cashewnoten gebrand", change: "-3 kg", reason: "Bestelling" },
  { product: "Notenmix luxe", change: "-2 kg", reason: "Bestelling" },
];

export default function InventoryMutationsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Voorraad</p>
        <h1>Mutaties</h1>
        <span>Bekijk voorraadbewegingen per product.</span>
      </section>

      <section className="admin-list">
        {mutations.map((item) => (
          <article key={`${item.product}-${item.change}`} className="admin-list-row">
            <div>
              <h2>{item.product}</h2>
              <p>{item.reason}</p>
            </div>

            <strong>{item.change}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}