type ProductCardProps = {
  name: string;
  price: string;
  href: string;
  category?: string;
};

export function ProductCard({ name, price, href, category }: ProductCardProps) {
  return (
    <a href={href} className="dashboard-card">
      {category && <p className="business-hero__label">{category}</p>}
      <h2>{name}</h2>
      <p>{price}</p>
    </a>
  );
}