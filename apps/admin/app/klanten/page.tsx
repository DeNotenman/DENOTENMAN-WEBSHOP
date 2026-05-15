const customers = [
  { name: "Jan Jansen", email: "jan@example.com", type: "Particulier" },
  { name: "Voorbeeldbedrijf B.V.", email: "inkoop@voorbeeldbedrijf.nl", type: "Zakelijk" },
  { name: "Sanne van Dijk", email: "sanne@example.com", type: "Particulier" },
];

export default function AdminCustomersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Klanten</p>
        <h1>Klantenoverzicht</h1>
        <span>Bekijk klanten, accountgegevens, bestellingen en klanttype.</span>
      </section>

      <section className="admin-list">
        {customers.map((customer) => (
          <a key={customer.email} href="/klanten/voorbeeld-klant" className="admin-list-row">
            <div>
              <h2>{customer.name}</h2>
              <p>{customer.email}</p>
            </div>

            <strong>{customer.type}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}