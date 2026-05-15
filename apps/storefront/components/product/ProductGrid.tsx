import { ProductCard } from "./ProductCard";

const products = [
  {
    name: "Amandelen ongezouten",
    category: "Noten",
    price: "€ 14,95",
    href: "/winkel/amandelen-ongezouten",
  },
  {
    name: "Cashewnoten gebrand",
    category: "Noten",
    price: "€ 16,95",
    href: "/winkel/cashewnoten-gebrand",
  },
  {
    name: "Notenmix luxe",
    category: "Mixen",
    price: "€ 18,95",
    href: "/winkel/notenmix-luxe",
  },
];

export function ProductGrid() {
  return (
    <div className="list-grid">
      {products.map((product) => (
        <ProductCard key={product.href} {...product} />
      ))}
    </div>
  );
}