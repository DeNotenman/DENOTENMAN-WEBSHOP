import { CheckoutLayout } from "../../../components/checkout/CheckoutLayout";
import { PaymentMethods } from "../../../components/checkout/PaymentMethods";

export default function CheckoutPaymentPage() {
  return (
    <main className="business-page">
      <CheckoutLayout>
        <section className="auth-card">
          <p className="business-hero__label">Checkout</p>
          <h1>Betaling</h1>

          <PaymentMethods />

          <a href="/checkout/controleren" className="button button--primary">
            Verder naar controleren
          </a>
        </section>
      </CheckoutLayout>
    </main>
  );
}