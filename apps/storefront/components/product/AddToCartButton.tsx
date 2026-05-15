import { Icon } from "../ui/Icon";

export function AddToCartButton() {
  return (
    <button className="button button--primary" type="submit">
      <Icon name="shopping-cart-1" />
      Toevoegen aan winkelwagen
    </button>
  );
}
