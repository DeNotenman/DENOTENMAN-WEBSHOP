const tiers = [
  {
    product: "Amandelen ongezouten",
    tier: "Vanaf 10 kg",
    discount: "8%",
  },
  {
    product: "Cashewnoten gebrand",
    tier: "Vanaf 15 kg",
    discount: "10%",
  },
];

export default function AdminBusinessPriceTiersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Staffelprijzen</h1>
        <span>
          Beheer volumekortingen en staffels per product, categorie of zakelijke
          klant.
        </span>
      </section>

      <section className="admin-list">
        {tiers.map((tier) => (
          <article key={`${tier.product}-${tier.tier}`} className="admin-list-row">
            <div>
              <h2>{tier.product}</h2>
              <p>{tier.tier}</p>
            </div>

            <strong>{tier.discount}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}