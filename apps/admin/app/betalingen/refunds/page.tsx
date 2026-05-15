import { listAdminPayments } from "../../../lib/orders";

export default async function RefundsPage() {
  const payments = await listAdminPayments();
  const refundablePayments = payments.filter((payment) => payment.status === "paid");

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Betalingen</p>
        <h1>Refunds</h1>
        <span>Refund-kandidaten op basis van echte betaalde payments. Terugbetaling uitvoeren volgt na Mollie test/live-validatie.</span>
      </section>

      <section className="admin-list">
        {refundablePayments.length === 0 ? <p>Geen betaalde payments beschikbaar voor refunds.</p> : null}
        {refundablePayments.map((payment) => (
          <a key={payment.id} href={`/bestellingen/${payment.orderId}`} className="admin-list-row">
            <div>
              <h2>{payment.orderNumber}</h2>
              <p>{payment.providerPaymentId ?? "Geen provider payment id"}</p>
            </div>
            <span>{payment.customer}</span>
            <strong>{payment.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}
