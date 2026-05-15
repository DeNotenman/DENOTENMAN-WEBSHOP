import { CartTotals } from "../cart/CartTotals";

export function CheckoutSummary() {
  return (
    <aside className="dashboard-card">
      <h2>Samenvatting</h2>
      <CartTotals />
    </aside>
  );
}