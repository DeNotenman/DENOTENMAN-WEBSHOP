import { Icon } from "../ui/Icon";

type ProductCardProps = {
  name: string;
  price: string;
  href: string;
  category?: string;
  image?: string | null;
};

export function ProductCard({ name, price, href, category, image }: ProductCardProps) {
  return (
    <a href={href} className="dashboard-card">
      {image && <img className="product-card-image" src={image} alt="" />}
      {category && (
        <p className="business-hero__label product-card__category">
          <Icon name="leaf-1" />
          {category}
        </p>
      )}
      <h2>{name}</h2>
      <p className="product-card__price">
        <Icon name="shopping-bag" />
        {price}
      </p>
    </a>
  );
}
