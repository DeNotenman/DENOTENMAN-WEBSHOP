import { getCart } from "../../lib/cart";
import { CartTotals } from "../cart/CartTotals";
import { Icon } from "../ui/Icon";

export async function CheckoutSummary() {
  const cart = await getCart();

  return (
    <aside className="dashboard-card">
      <h2 className="section-title-with-icon">
        <Icon name="shopping-cart-1" />
        Samenvatting
      </h2>
      <CartTotals cart={cart} />
    </aside>
  );
}
