import { notFound } from "next/navigation";
import { formatAdminMoney, getAdminOrder } from "../../../../lib/orders";

type AdminOrderInvoicePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdminOrderInvoicePage({ params }: AdminOrderInvoicePageProps) {
  const { id } = await params;
  const order = await getAdminOrder(id);

  if (!order) {
    notFound();
  }

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Bestelling</p>
        <h1>Factuur {order.orderNumber}</h1>
        <span>Factuurbasis op echte orderregels. PDF-generatie volgt in de e-mail/factuurfase.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Klant</h2>
          <p>{order.customerName ?? "Naam onbekend"}</p>
          <p>{order.customerEmail ?? "E-mail onbekend"}</p>
        </article>
        <article className="admin-card">
          <h2>Status</h2>
          <p>Order: {order.status}</p>
          <p>Betaling: {order.paymentStatus}</p>
        </article>
        <article className="admin-card">
          <h2>Totaal</h2>
          <p>{formatAdminMoney(order.totalCents)}</p>
        </article>
      </section>

      <section className="admin-section">
        <h2>Factuurregels</h2>
        <div className="admin-list">
          {order.items.map((item) => (
            <article key={item.id} className="admin-list-row">
              <div>
                <h2>{item.name}</h2>
                <p>{item.quantity} x {formatAdminMoney(item.unitPriceCents)}</p>
              </div>
              <span>{formatAdminMoney(item.lineTotalCents)}</span>
              <strong>{item.quantity} st.</strong>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
