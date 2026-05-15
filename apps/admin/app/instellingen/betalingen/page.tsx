const methods = [
  { name: "iDEAL", provider: "Mollie", status: "Actief" },
  { name: "Bancontact", provider: "Mollie", status: "Actief" },
  { name: "Creditcard", provider: "Mollie", status: "Actief" },
];

export default function PaymentSettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>Betalingen</h1>
        <span>Beheer betaalmethodes, providers en betaalstatussen.</span>
      </section>

      <section className="admin-list">
        {methods.map((method) => (
          <article key={method.name} className="admin-list-row">
            <div>
              <h2>{method.name}</h2>
              <p>{method.provider}</p>
            </div>

            <strong>{method.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}