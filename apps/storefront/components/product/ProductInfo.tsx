import { ProductPrice } from "./ProductPrice";
import { StockStatus } from "./StockStatus";

type ProductInfoProps = {
  description?: string | null;
  name: string;
  origin?: string | null;
  price: string;
  stockLabel?: string;
};

export function ProductInfo({
  description,
  name,
  origin,
  price,
  stockLabel,
}: ProductInfoProps) {
  return (
    <div className="product-detail-content">
      <h1>{name}</h1>
      {description && <p>{description}</p>}
      {origin && <p>Herkomst: {origin}</p>}

      <ProductPrice price={price} />
      <StockStatus status={stockLabel} />
    </div>
  );
}
