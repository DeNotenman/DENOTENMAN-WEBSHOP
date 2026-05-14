const invoices = [
  {
    id: "2026-001",
    customer: "Voorbeeldbedrijf B.V.",
    amount: "€ 184,50",
    status: "Betaald",
  },
  {
    id: "2026-002",
    customer: "Catering Van Dijk",
    amount: "€ 96,75",
    status: "Open",
  },
];

export default function AdminBusinessInvoicesPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Facturen</h1>
        <span>
          Bekijk facturen per zakelijke klant, betalingsstatussen en gekoppelde
          bestellingen.
        </span>
      </section>

      <section className="admin-list">
        {invoices.map((invoice) => (
          <a
            key={invoice.id}
            href={`/zakelijk/facturen/${invoice.id}`}
            className="admin-list-row"
          >
            <div>
              <h2>Factuur {invoice.id}</h2>
              <p>{invoice.customer}</p>
            </div>

            <span>{invoice.amount}</span>
            <strong>{invoice.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}