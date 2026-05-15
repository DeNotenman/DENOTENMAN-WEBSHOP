const prices = [
  {
    product: "Amandelen ongezouten",
    customer: "Voorbeeldbedrijf B.V.",
    price: "€ 14,95",
  },
  {
    product: "Cashewnoten gebrand",
    customer: "Catering Van Dijk",
    price: "€ 16,95",
  },
];

export default function AdminBusinessPricesPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Zakelijke prijzen</h1>
        <span>
          Beheer klantprijzen, prijsafspraken en afwijkende tarieven per
          zakelijke klant.
        </span>
      </section>

      <section className="admin-list">
        {prices.map((item) => (
          <article key={`${item.product}-${item.customer}`} className="admin-list-row">
            <div>
              <h2>{item.product}</h2>
              <p>{item.customer}</p>
            </div>

            <strong>{item.price}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}