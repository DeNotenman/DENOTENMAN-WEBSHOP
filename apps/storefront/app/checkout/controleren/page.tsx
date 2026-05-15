const items = [
  { name: "Amandelen ongezouten", quantity: "1 × 1kg", total: "€ 14,95" },
  { name: "Notenmix luxe", quantity: "1 × 1kg", total: "€ 18,95" },
];

export default function CheckoutReviewPage() {
  return (
    <main className="business-page">
      <section className="container invoice-detail">
        <div>
          <p className="business-hero__label">Checkout</p>
          <h1>Controleren</h1>
          <p>Controleer je bestelling voordat je betaalt.</p>
        </div>

        <div className="invoice-panel">
          <div>
            <span>Klant</span>
            <strong>Jan Jansen</strong>
          </div>

          <div>
            <span>Verzending</span>
            <strong>PostNL</strong>
          </div>

          <div>
            <span>Betaling</span>
            <strong>iDEAL</strong>
          </div>
        </div>

        <div className="product-list">
          {items.map((item) => (
            <article key={item.name} className="product-row">
              <div>
                <h2>{item.name}</h2>
                <p>{item.quantity}</p>
              </div>

              <strong>{item.total}</strong>
            </article>
          ))}
        </div>

        <div className="invoice-panel">
          <div>
            <span>Subtotaal</span>
            <strong>€ 33,90</strong>
          </div>

          <div>
            <span>Verzending</span>
            <strong>€ 6,95</strong>
          </div>

          <div>
            <span>Totaal</span>
            <strong>€ 40,85</strong>
          </div>
        </div>

        <a href="/checkout/succes" className="button button--primary">
          Bestelling plaatsen
        </a>
      </section>
    </main>
  );
}