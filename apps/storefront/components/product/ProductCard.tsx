import { Icon } from "../ui/Icon";
import { addToCartAction, buyNowAction, quickAddToCartAction } from "../../actions/cart.actions";
import type { StorefrontProduct } from "../../lib/products";
import { formatPrice } from "../../lib/products";
import { ProductImage } from "./ProductImage";

type ProductCardProps = {
  product: StorefrontProduct;
  price: string;
  fallbackImage?: string | null;
  relatedProducts: StorefrontProduct[];
};

function getStockLabel(product: StorefrontProduct) {
  return product.variants[0]?.stockLabel ?? "Op voorraad";
}

function getSeoDescription(product: StorefrontProduct) {
  if (product.description) {
    return product.description;
  }

  return `${product.name} van De Notenman is zorgvuldig geselecteerd voor smaak, versheid en kwaliteit. Bestel ${product.name.toLowerCase()} eenvoudig online in handige besteleenheden voor thuis, horeca of zakelijke voorraad.`;
}

function getUsableImage(image: string | null) {
  if (!image) return null;
  if (image.startsWith("/assets/")) return null;
  if (image.includes("Gember-Uitgelekt-800x800.jpg")) return null;
  return image;
}

export function ProductCard({ product, price, fallbackImage = null, relatedProducts }: ProductCardProps) {
  const stockLabel = getStockLabel(product);
  const defaultWeight = product.weights[0];
  const defaultVariant = product.variants[0];
  const popoutId = `product-popout-${product.slug}`;
  const hasNewBadge = product.badge?.toLowerCase().includes("nieuw") ?? false;
  const image = getUsableImage(product.image) ?? getUsableImage(defaultVariant?.image ?? null) ?? fallbackImage;

  return (
    <article className="product-card-shell product-card">
      {hasNewBadge ? <span className="product-card__badge">Nieuw</span> : null}

      <div className="product-card__media">
        <ProductImage alt="" className="product-card-image" src={image} fallbackSrc={fallbackImage} />
        <span className="product-card__quick-actions" aria-label={`${product.name} acties`}>
          <button type="button" aria-label={`${product.name} bewaren`}>
            <Icon name="heart-outline" />
          </button>
          <button
            className="product-card__inspect"
            type="button"
            popoverTarget={popoutId}
            aria-label={`${product.name} snel bekijken`}
          >
            <span aria-hidden="true" />
          </button>
        </span>
      </div>

      <button className="product-card__open" type="button" popoverTarget={popoutId}>
        <span className="product-card__name">{product.name}</span>
        <span className="product-card__category">{product.categoryLabel}</span>
      </button>

      <div className="product-card__footer">
        <span className="product-card__price">
          <span>{price}</span>
          <small>
            {defaultWeight?.label ?? product.unit ?? "per stuk"}
          </small>
        </span>
        <form action={quickAddToCartAction}>
          <input type="hidden" name="slug" value={product.slug} />
          <input type="hidden" name="quantity" value="1" />
          {defaultWeight && <input type="hidden" name="weightId" value={defaultWeight.id} />}
          {defaultVariant && <input type="hidden" name="variantId" value={defaultVariant.variantId} />}
          <button className="product-card__cart" type="submit" aria-label={`${product.name} toevoegen aan winkelwagen`}>
            <Icon name="bag-plus" />
          </button>
        </form>
      </div>

      <div
        className="product-popout"
        id={popoutId}
        popover="auto"
        role="dialog"
        aria-label={`${product.name} bestellen`}
      >
        <button
          className="product-popout__close"
          type="button"
          popoverTarget={popoutId}
          popoverTargetAction="hide"
          aria-label="Sluiten"
        >
          x
        </button>

        <div className="product-popout__media">
          <ProductImage alt={product.name} src={image} fallbackSrc={fallbackImage} />
        </div>

        <div className="product-popout__content">
          <p className="business-hero__label">{product.categoryLabel}</p>
          <h2>{product.name}</h2>
          <p>{getSeoDescription(product)}</p>

          <dl className="product-popout__facts">
            <div>
              <dt>Voorraad</dt>
              <dd>{stockLabel}</dd>
            </div>
            <div>
              <dt>Vanaf</dt>
              <dd>{price}</dd>
            </div>
            <div>
              <dt>Besteleenheden</dt>
              <dd>
                {product.weights.length > 0
                  ? product.weights.map((weight) => weight.label).join(", ")
                  : product.unit ?? "Per stuk"}
              </dd>
            </div>
          </dl>

          <form className="product-popout__order-form" action={addToCartAction}>
            <input type="hidden" name="slug" value={product.slug} />

            {product.variants.length > 0 && (
              <label className="form-field">
                <span>Variant</span>
                <select name="variantId" defaultValue={defaultVariant?.variantId}>
                  {product.variants.map((variant) => (
                    <option key={variant.id} value={variant.variantId}>
                      {variant.name} - {variant.stockLabel}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {product.weights.length > 0 && (
              <label className="form-field">
                <span>Besteleenheid</span>
                <select name="weightId" defaultValue={defaultWeight?.id}>
                  {product.weights.map((weight) => (
                    <option key={weight.id} value={weight.id}>
                      {weight.label} - {formatPrice(weight.price)}
                    </option>
                  ))}
                </select>
              </label>
            )}

            <label className="form-field">
              <span>Aantal</span>
              <input type="number" name="quantity" defaultValue={1} min={1} />
            </label>

            <div className="product-popout__ctas">
              <button className="button button--primary" type="submit">
                <Icon name="shopping-cart-1" />
                In winkelwagen
              </button>
              <button className="button button--secondary" type="submit" formAction={buyNowAction}>
                <Icon name="credit-card" />
                Gelijk bestellen
              </button>
            </div>
          </form>

          {relatedProducts.length > 0 && (
            <section className="product-popout__related" aria-label="Vaak samen gekocht">
              <h3>Vaak samen gekocht</h3>
              <div className="product-popout__slider">
                {relatedProducts.map((relatedProduct) => (
                  <article key={relatedProduct.slug} className="product-popout__related-card">
                    <span className="product-popout__related-image">
                      <ProductImage alt="" src={getUsableImage(relatedProduct.image) ?? fallbackImage} />
                    </span>
                    <strong>{relatedProduct.name}</strong>
                    <span>{formatPrice(relatedProduct.weights[0]?.price ?? relatedProduct.basePrice)}</span>
                    <form action={quickAddToCartAction}>
                      <input type="hidden" name="slug" value={relatedProduct.slug} />
                      <input type="hidden" name="quantity" value="1" />
                      {relatedProduct.weights[0] && (
                        <input type="hidden" name="weightId" value={relatedProduct.weights[0].id} />
                      )}
                      {relatedProduct.variants[0] && (
                        <input
                          type="hidden"
                          name="variantId"
                          value={relatedProduct.variants[0].variantId}
                        />
                      )}
                      <button type="submit">Snel toevoegen</button>
                    </form>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
