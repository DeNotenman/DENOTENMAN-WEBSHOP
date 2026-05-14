const customers = [
  {
    name: "Voorbeeldbedrijf B.V.",
    contact: "Jan Jansen",
    email: "inkoop@voorbeeldbedrijf.nl",
    status: "Actief",
  },
  {
    name: "Catering Van Dijk",
    contact: "Sanne van Dijk",
    email: "bestellen@cateringvandijk.nl",
    status: "Actief",
  },
];

export default function AdminBusinessCustomersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Zakelijke klanten</h1>
        <span>
          Beheer bedrijven, contactpersonen, factuurgegevens, prijsafspraken en
          toegang tot de zakelijke bestelomgeving.
        </span>
      </section>

      <section className="admin-list">
        {customers.map((customer) => (
          <a
            key={customer.email}
            href="/zakelijk/klanten/voorbeeldbedrijf"
            className="admin-list-row"
          >
            <div>
              <h2>{customer.name}</h2>
              <p>{customer.contact}</p>
            </div>

            <span>{customer.email}</span>
            <strong>{customer.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}