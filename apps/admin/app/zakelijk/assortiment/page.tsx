const assortment = [
  {
    product: "Amandelen ongezouten",
    customerGroup: "Horeca",
    status: "Zichtbaar",
  },
  {
    product: "Notenmix luxe",
    customerGroup: "Kantoren",
    status: "Zichtbaar",
  },
];

export default function AdminBusinessAssortmentPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Zakelijk assortiment</h1>
        <span>
          Beheer welke producten zichtbaar en bestelbaar zijn per zakelijke klant
          of klantgroep.
        </span>
      </section>

      <section className="admin-list">
        {assortment.map((item) => (
          <article key={`${item.product}-${item.customerGroup}`} className="admin-list-row">
            <div>
              <h2>{item.product}</h2>
              <p>{item.customerGroup}</p>
            </div>

            <strong>{item.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}