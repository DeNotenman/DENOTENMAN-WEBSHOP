const banners = [
  { title: "Voorjaarsactie", position: "Homepage hero", status: "Actief" },
  { title: "Zakelijk bestellen", position: "Zakelijke pagina", status: "Actief" },
];

export default function MarketingBannersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Banners</h1>
        <span>Beheer commerciële banners, posities en zichtbaarheid.</span>
      </section>

      <section className="admin-list">
        {banners.map((banner) => (
          <article key={banner.title} className="admin-list-row">
            <div>
              <h2>{banner.title}</h2>
              <p>{banner.position}</p>
            </div>

            <strong>{banner.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}