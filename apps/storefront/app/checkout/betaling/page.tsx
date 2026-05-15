import { savePaymentAction } from "../../../actions/checkout.actions";
import { CheckoutLayout } from "../../../components/checkout/CheckoutLayout";
import { PaymentMethods } from "../../../components/checkout/PaymentMethods";

export default function CheckoutPaymentPage() {
  return (
    <main className="business-page">
      <CheckoutLayout>
        <section className="auth-card">
          <p className="business-hero__label">Checkout</p>
          <h1>Betaling</h1>

          <form className="auth-form" action={savePaymentAction}>
            <PaymentMethods />

            <button className="button button--primary" type="submit">
              Verder naar controleren
            </button>
          </form>
        </section>
      </CheckoutLayout>
    </main>
  );
}
