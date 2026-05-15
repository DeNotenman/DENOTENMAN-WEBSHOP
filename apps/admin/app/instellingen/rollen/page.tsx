const roles = [
  { name: "Eigenaar", permissions: "Volledige toegang" },
  { name: "Manager", permissions: "Producten, orders, klanten en marketing" },
  { name: "Staff", permissions: "Orders, voorraad en klantenservice" },
  { name: "Developer", permissions: "Technisch beheer en instellingen" },
];

export default function RolesSettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>Rollen</h1>
        <span>Beheer rechten en toegangsniveaus per rol.</span>
      </section>

      <section className="admin-list">
        {roles.map((role) => (
          <article key={role.name} className="admin-list-row">
            <div>
              <h2>{role.name}</h2>
              <p>{role.permissions}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}