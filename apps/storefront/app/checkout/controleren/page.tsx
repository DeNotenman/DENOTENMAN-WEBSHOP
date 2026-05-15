import { CheckoutLayout } from "../../../components/checkout/CheckoutLayout";
import { OrderReview } from "../../../components/checkout/OrderReview";

export default function CheckoutReviewPage() {
  return (
    <main className="business-page">
      <CheckoutLayout>
        <section className="invoice-detail">
          <div>
            <p className="business-hero__label">Checkout</p>
            <h1>Controleren</h1>
            <p>Controleer je bestelling voordat je betaalt.</p>
          </div>

          <div className="invoice-panel">
            <div>
              <span>Klant</span>
              <strong>Jan Jansen</strong>
            </div>

            <div>
              <span>Verzending</span>
              <strong>PostNL</strong>
            </div>

            <div>
              <span>Betaling</span>
              <strong>iDEAL</strong>
            </div>
          </div>

          <OrderReview />

          <a href="/checkout/succes" className="button button--primary">
            Bestelling plaatsen
          </a>
        </section>
      </CheckoutLayout>
    </main>
  );
}