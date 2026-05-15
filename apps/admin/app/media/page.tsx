const assets = [
  { name: "logo.svg", type: "Logo", status: "Actief" },
  { name: "amandelen.jpg", type: "Productfoto", status: "Geoptimaliseerd" },
  { name: "hero-noten.jpg", type: "Hero", status: "Geoptimaliseerd" },
];

export default function MediaPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Media</p>
        <h1>Mediabibliotheek</h1>
        <span>Beheer afbeeldingen, logo’s, iconen en productmedia.</span>
      </section>

      <section className="admin-list">
        {assets.map((asset) => (
          <article key={asset.name} className="admin-list-row">
            <div>
              <h2>{asset.name}</h2>
              <p>{asset.type}</p>
            </div>

            <strong>{asset.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}