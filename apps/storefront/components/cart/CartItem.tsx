type CartItemProps = {
  name: string;
  quantity: string;
  total: string;
};

export function CartItem({ name, quantity, total }: CartItemProps) {
  return (
    <article className="product-row">
      <div>
        <h2>{name}</h2>
        <p>{quantity}</p>
      </div>

      <strong>{total}</strong>
    </article>
  );
}