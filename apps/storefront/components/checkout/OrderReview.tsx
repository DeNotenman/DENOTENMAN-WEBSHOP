import { CartItem } from "../cart/CartItem";
import { CartTotals } from "../cart/CartTotals";

const items = [
  { name: "Amandelen ongezouten", quantity: "1 × 1kg", total: "€ 14,95" },
  { name: "Notenmix luxe", quantity: "1 × 1kg", total: "€ 18,95" },
];

export function OrderReview() {
  return (
    <section className="product-list">
      {items.map((item) => (
        <CartItem key={item.name} {...item} />
      ))}

      <CartTotals />
    </section>
  );
}