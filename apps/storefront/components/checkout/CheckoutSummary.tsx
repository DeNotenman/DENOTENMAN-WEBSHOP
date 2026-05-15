import { getCart } from "../../lib/cart";
import { CartTotals } from "../cart/CartTotals";

export async function CheckoutSummary() {
  const cart = await getCart();

  return (
    <aside className="dashboard-card">
      <h2>Samenvatting</h2>
      <CartTotals cart={cart} />
    </aside>
  );
}
