const newsletters = [
  { title: "Mei nieuwsbrief", audience: "Alle klanten", status: "Concept" },
  { title: "Zakelijke klanten update", audience: "Zakelijke klanten", status: "Gepland" },
];

export default function NewslettersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Nieuwsbrieven</h1>
        <span>Beheer nieuwsbrieven, doelgroepen en verzendstatussen.</span>
      </section>

      <section className="admin-list">
        {newsletters.map((newsletter) => (
          <article key={newsletter.title} className="admin-list-row">
            <div>
              <h2>{newsletter.title}</h2>
              <p>{newsletter.audience}</p>
            </div>

            <strong>{newsletter.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}