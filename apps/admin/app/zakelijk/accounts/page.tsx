const accounts = [
  {
    name: "Jan Jansen",
    company: "Voorbeeldbedrijf B.V.",
    email: "inkoop@voorbeeldbedrijf.nl",
    role: "Inkoper",
  },
  {
    name: "Sanne van Dijk",
    company: "Catering Van Dijk",
    email: "bestellen@cateringvandijk.nl",
    role: "Beheerder",
  },
];

export default function AdminBusinessAccountsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Accounts</h1>
        <span>
          Beheer gebruikers, rollen en toegang per zakelijke klant.
        </span>
      </section>

      <section className="admin-list">
        {accounts.map((account) => (
          <a
            key={account.email}
            href="/zakelijk/accounts/voorbeeldaccount"
            className="admin-list-row"
          >
            <div>
              <h2>{account.name}</h2>
              <p>{account.company}</p>
            </div>

            <span>{account.email}</span>
            <strong>{account.role}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}