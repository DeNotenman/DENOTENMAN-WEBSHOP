import { Drawer } from "../ui/Drawer";
import { CartItem } from "./CartItem";
import { CartTotals } from "./CartTotals";

export function CartDrawer() {
  return (
    <Drawer title="Winkelwagen">
      <div className="product-list">
        <CartItem name="Amandelen ongezouten" quantity="1 × 1kg" total="€ 14,95" />
        <CartItem name="Notenmix luxe" quantity="1 × 1kg" total="€ 18,95" />
      </div>

      <CartTotals />

      <a href="/checkout" className="button button--primary">
        Naar de kassa
      </a>
    </Drawer>
  );
}