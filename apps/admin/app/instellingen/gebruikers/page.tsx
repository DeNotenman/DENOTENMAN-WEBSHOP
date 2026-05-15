const users = [
  { name: "Fedor van Ravesteijn", role: "Eigenaar", status: "Actief" },
  { name: "Dave Vera", role: "Developer", status: "Actief" },
  { name: "Medewerker", role: "Staff", status: "Actief" },
];

export default function UsersSettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>Gebruikers</h1>
        <span>Beheer admingebruikers, rollen en toegang.</span>
      </section>

      <section className="admin-list">
        {users.map((user) => (
          <article key={user.name} className="admin-list-row">
            <div>
              <h2>{user.name}</h2>
              <p>{user.role}</p>
            </div>

            <strong>{user.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}