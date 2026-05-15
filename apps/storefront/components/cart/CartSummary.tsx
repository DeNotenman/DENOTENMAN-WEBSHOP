import { CartTotals } from "./CartTotals";

export function CartSummary() {
  return (
    <aside className="dashboard-card">
      <h2>Samenvatting</h2>
      <CartTotals />

      <a href="/checkout" className="button button--primary">
        Naar de kassa
      </a>
    </aside>
  );
}