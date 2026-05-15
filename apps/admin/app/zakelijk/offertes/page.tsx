const quotes = [
  {
    id: "OFF-2026-001",
    customer: "Voorbeeldbedrijf B.V.",
    amount: "€ 245,00",
    status: "Concept",
  },
  {
    id: "OFF-2026-002",
    customer: "Catering Van Dijk",
    amount: "€ 389,50",
    status: "Verzonden",
  },
];

export default function AdminBusinessQuotesPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Offertes</h1>
        <span>Maak, bekijk en beheer offertes voor zakelijke klanten.</span>
      </section>

      <section className="admin-list">
        {quotes.map((quote) => (
          <a
            key={quote.id}
            href={`/zakelijk/offertes/${quote.id}`}
            className="admin-list-row"
          >
            <div>
              <h2>{quote.id}</h2>
              <p>{quote.customer}</p>
            </div>

            <span>{quote.amount}</span>
            <strong>{quote.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}