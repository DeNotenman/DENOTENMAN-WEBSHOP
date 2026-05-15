const campaigns = [
  { title: "Voorjaarsactie", period: "Mei 2026", status: "Actief" },
  { title: "Zakelijke startkorting", period: "Q2 2026", status: "Concept" },
];

export default function MarketingActionsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Acties</h1>
        <span>Beheer tijdelijke acties, campagnes en commerciële blokken.</span>
      </section>

      <section className="admin-list">
        {campaigns.map((campaign) => (
          <article key={campaign.title} className="admin-list-row">
            <div>
              <h2>{campaign.title}</h2>
              <p>{campaign.period}</p>
            </div>

            <strong>{campaign.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}