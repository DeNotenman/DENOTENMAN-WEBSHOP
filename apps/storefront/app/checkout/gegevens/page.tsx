import { AddressForm } from "../../../components/checkout/AddressForm";
import { CheckoutLayout } from "../../../components/checkout/CheckoutLayout";
import { CustomerForm } from "../../../components/checkout/CustomerForm";

export default function CheckoutDetailsPage() {
  return (
    <main className="business-page">
      <CheckoutLayout>
        <section className="auth-card">
          <p className="business-hero__label">Checkout</p>
          <h1>Gegevens</h1>

          <CustomerForm />
          <AddressForm />

          <a href="/checkout/verzending" className="button button--primary">
            Verder naar verzending
          </a>
        </section>
      </CheckoutLayout>
    </main>
  );
}