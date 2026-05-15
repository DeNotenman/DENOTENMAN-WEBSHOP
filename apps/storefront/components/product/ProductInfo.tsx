import { ProductPrice } from "./ProductPrice";
import { StockStatus } from "./StockStatus";

export function ProductInfo() {
  return (
    <div className="product-detail-content">
      <p className="business-hero__label">Product</p>
      <h1>Amandelen ongezouten</h1>
      <p>
        Verse ongezouten amandelen, zorgvuldig geselecteerd en verpakt door
        De Notenman.
      </p>

      <ProductPrice price="€ 14,95" />
      <StockStatus />
    </div>
  );
}