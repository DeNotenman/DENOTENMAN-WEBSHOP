const methods = [
  { name: "PostNL pakket", price: "€ 6,95", status: "Actief" },
  { name: "Gratis verzending vanaf", price: "€ 50,00", status: "Actief" },
];

export default function ShippingSettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>Verzending</h1>
        <span>Beheer verzendmethodes, tarieven en gratis verzending.</span>
      </section>

      <section className="admin-list">
        {methods.map((method) => (
          <article key={method.name} className="admin-list-row">
            <div>
              <h2>{method.name}</h2>
              <p>{method.price}</p>
            </div>

            <strong>{method.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}