import { formatCartPrice, type StorefrontCart } from "../../lib/cart";

export function CartTotals({ cart }: { cart: StorefrontCart }) {
  return (
    <div className="invoice-panel">
      <div>
        <span>Subtotaal</span>
        <strong>{formatCartPrice(cart.subtotalCents)}</strong>
      </div>

      <div>
        <span>Verzending</span>
        <strong>{cart.shippingCents === 0 ? "Gratis" : formatCartPrice(cart.shippingCents)}</strong>
      </div>

      <div>
        <span>Btw</span>
        <strong>{formatCartPrice(cart.taxCents)}</strong>
      </div>

      <div>
        <span>Totaal</span>
        <strong>{formatCartPrice(cart.totalCents)}</strong>
      </div>
    </div>
  );
}
