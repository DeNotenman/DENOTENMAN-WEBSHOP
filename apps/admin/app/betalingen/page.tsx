const payments = [
  { id: "PAY-2026-001", customer: "Voorbeeldbedrijf B.V.", amount: "€ 184,50", status: "Betaald" },
  { id: "PAY-2026-002", customer: "Piet Particulier", amount: "€ 42,95", status: "Open" },
  { id: "PAY-2026-003", customer: "Catering Van Dijk", amount: "€ 96,75", status: "In behandeling" },
];

export default function PaymentsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Betalingen</p>
        <h1>Betalingsoverzicht</h1>
        <span>Bekijk betalingen, statussen en gekoppelde bestellingen.</span>
      </section>

      <section className="admin-list">
        {payments.map((payment) => (
          <article key={payment.id} className="admin-list-row">
            <div>
              <h2>{payment.id}</h2>
              <p>{payment.customer}</p>
            </div>

            <span>{payment.amount}</span>
            <strong>{payment.status}</strong>
          </article>
        ))}
      </section>
    </main>
  );
}