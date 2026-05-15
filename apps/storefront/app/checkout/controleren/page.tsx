import { prepareOrderDraftAction } from "../../../actions/checkout.actions";
import { CheckoutLayout } from "../../../components/checkout/CheckoutLayout";
import { OrderReview } from "../../../components/checkout/OrderReview";
import { Icon } from "../../../components/ui/Icon";
import { getCheckoutState } from "../../../lib/checkout";

export default async function CheckoutReviewPage() {
  const checkout = await getCheckoutState();
  const customerName = [checkout.firstName, checkout.lastName]
    .filter((part) => part && part !== "-")
    .join(" ");

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
              <span>
                <Icon name="user-account-support" />
                Klant
              </span>
              <strong>{customerName || checkout.email || "Nog niet ingevuld"}</strong>
            </div>

            <div>
              <span>
                <Icon name="delivery-truck" />
                Verzending
              </span>
              <strong>{checkout.shippingMethodId ?? "Nog niet gekozen"}</strong>
            </div>

            <div>
              <span>
                <Icon name="credit-card" />
                Betaling
              </span>
              <strong>Mollie draft</strong>
            </div>
          </div>

          <OrderReview />

          <form action={prepareOrderDraftAction}>
            <button className="button button--primary" type="submit">
              <Icon name="document-checkmark" />
              Bestelling als draft voorbereiden
            </button>
          </form>
        </section>
      </CheckoutLayout>
    </main>
  );
}
