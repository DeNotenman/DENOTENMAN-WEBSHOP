import { CartItem } from "../../components/cart/CartItem";
import { CartSummary } from "../../components/cart/CartSummary";
import { CouponForm } from "../../components/cart/CouponForm";

const items = [
  { name: "Amandelen ongezouten", quantity: "1 × 1kg", total: "€ 14,95" },
  { name: "Notenmix luxe", quantity: "1 × 1kg", total: "€ 18,95" },
];

export default function CartPage() {
  return (
    <main className="business-page">
      <section className="container cart-page">
        <div>
          <p className="business-hero__label">Winkelwagen</p>
          <h1>Jouw mand</h1>
          <p>Controleer je producten voordat je afrekent.</p>
        </div>

        <div className="cart-layout">
          <div className="product-list">
            {items.map((item) => (
              <CartItem key={item.name} {...item} />
            ))}

            <CouponForm />
          </div>

          <CartSummary />
        </div>
      </section>
    </main>
  );
}