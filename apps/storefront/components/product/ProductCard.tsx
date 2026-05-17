import { Icon } from "../ui/Icon";
import { addToCartAction, buyNowAction, quickAddToCartAction } from "../../actions/cart.actions";
import type { StorefrontProduct } from "../../lib/products";
import { formatPrice } from "../../lib/products";
import { ProductImage } from "./ProductImage";

type ProductCardProps = {
  product: StorefrontProduct;
  fallbackImage?: string | null;
  relatedProducts: StorefrontProduct[];
};

function getStockLabel(product: StorefrontProduct) {
  return product.variants[0]?.stockLabel ?? "Op voorraad";
}

function getSeoDescription(product: StorefrontProduct) {
  if (product.description) {
    return cleanProductText(product.description);
  }

  return `${product.name} van De Notenman is zorgvuldig geselecteerd voor smaak, versheid en kwaliteit. Bestel ${product.name.toLowerCase()} eenvoudig online in handige besteleenheden voor thuis, horeca of zakelijke voorraad.`;
}

function getUsableImage(image: string | null) {
  if (!image) return null;
  if (image.startsWith("/assets/")) return null;
  if (image.includes("Gember-Uitgelekt-800x800.jpg")) return null;
  return image;
}

function getStartingWeight(product: StorefrontProduct) {
  return product.weights.reduce<StorefrontProduct["weights"][number] | undefined>((lowestWeight, weight) => {
    if (!lowestWeight || weight.price < lowestWeight.price) {
      return weight;
    }

    return lowestWeight;
  }, undefined);
}

function getStartingPrice(product: StorefrontProduct) {
  return getStartingWeight(product)?.price ?? product.variants[0]?.price ?? product.basePrice;
}

function getStartingUnitLabel(product: StorefrontProduct, weight: StorefrontProduct["weights"][number] | undefined) {
  if (weight) {
    return `per ${weight.label}`;
  }

  if (product.unit?.toLowerCase().startsWith("per ")) {
    return product.unit;
  }

  return `per ${product.unit ?? "stuk"}`;
}

function cleanProductText(text: string) {
  return text.replace(/^\s*ingredienten?\s*:\s*/i, "").trim();
}

function getWeightIcon(index: number, total: number) {
  if (total <= 1) return "Small_bowl";
  if (index === 0) return "Small_bowl";
  if (index === total - 1) return "bucket";
  return "medium_bag";
}

export function ProductCard({ product, fallbackImage = null, relatedProducts }: ProductCardProps) {
  const stockLabel = getStockLabel(product);
  const defaultWeight = getStartingWeight(product);
  const defaultVariant = product.variants[0];
  const displayedPrice = formatPrice(getStartingPrice(product));
  const displayedUnit = getStartingUnitLabel(product, defaultWeight);
  const popoutId = `product-popout-${product.slug}`;
  const hasNewBadge = product.badge?.toLowerCase().includes("nieuw") ?? false;
  const image = getUsableImage(product.image) ?? getUsableImage(defaultVariant?.image ?? null) ?? fallbackImage;

  return (
    <article className="product-card-shell product-card">
      {hasNewBadge ? <span className="product-card__badge">Nieuw</span> : null}

      <div className="product-card__media">
        <ProductImage alt="" className="product-card-image" src={image} fallbackSrc={fallbackImage} />
        <span className="product-card__quick-actions" aria-label={`${product.name} snel bekijken`}>
          <button
            className="product-card__inspect"
            type="button"
            popoverTarget={popoutId}
            aria-label={`${product.name} snel bekijken`}
          >
            <Icon name="search_loop" className="product-card__inspect-icon" />
          </button>
        </span>
      </div>

      <button className="product-card__open" type="button" popoverTarget={popoutId}>
        <span className="product-card__name">{product.name}</span>
      </button>

      <div className="product-card__footer">
        <span className="product-card__price">
          <span className="product-card__price-main">
            <small className="product-card__price-prefix">Vanaf</small>
            {displayedPrice}
          </span>
          <small className="product-card__price-unit">{displayedUnit}</small>
        </span>
        <form action={quickAddToCartAction}>
          <input type="hidden" name="slug" value={product.slug} />
          <input type="hidden" name="quantity" value="1" />
          {defaultWeight && <input type="hidden" name="weightId" value={defaultWeight.id} />}
          {defaultVariant && <input type="hidden" name="variantId" value={defaultVariant.variantId} />}
          <button className="product-card__cart" type="submit" aria-label={`${product.name} toevoegen aan winkelwagen`}>
            <Icon name="shopping-basket" />
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
          <Icon name="x" />
        </button>

        <div className="product-popout__media">
          <ProductImage alt={product.name} src={image} fallbackSrc={fallbackImage} />
        </div>

        <div className="product-popout__content">
          <div className="product-popout__summary">
            <h2>{product.name}</h2>
            <p>{getSeoDescription(product)}</p>
          </div>

          <dl className="product-popout__facts">
            <div>
              <dt>
                <Icon name="Submit_cart" />
                Voorraad
              </dt>
              <dd>{stockLabel}</dd>
            </div>
            <div>
              <dt>
                <Icon name="discount" />
                Vanaf
              </dt>
              <dd>
                {displayedPrice}
                <small>{displayedUnit}</small>
              </dd>
            </div>
            <div>
              <dt>
                <Icon name="Small_bowl" />
                Besteleenheden
              </dt>
              <dd>
                {product.weights.length > 0
                  ? product.weights.map((weight) => weight.label).join(", ")
                  : product.unit ?? "Per stuk"}
              </dd>
            </div>
          </dl>

          <form className="product-popout__order-form" action={addToCartAction}>
            <input type="hidden" name="slug" value={product.slug} />
            {defaultVariant && <input type="hidden" name="variantId" value={defaultVariant.variantId} />}

            {product.weights.length > 0 && (
              <fieldset className="product-unit-tiles product-unit-tiles--compact">
                <legend>Besteleenheid</legend>
                {product.weights.map((weight, index) => (
                  <label key={weight.id} className="product-unit-tile">
                    <input
                      type="radio"
                      name="weightId"
                      value={weight.id}
                      defaultChecked={weight.id === defaultWeight?.id}
                    />
                    <span>
                      <Icon name={getWeightIcon(index, product.weights.length)} />
                      <strong>{weight.label}</strong>
                      <small>{formatPrice(weight.price)}</small>
                    </span>
                  </label>
                ))}
              </fieldset>
            )}

            <label className="form-field">
              <span>Aantal</span>
              <input type="number" name="quantity" defaultValue={1} min={1} />
            </label>

            <div className="product-popout__ctas">
              <button className="button button--primary" type="submit">
                <Icon name="Submit_cart" />
                In winkelwagen
              </button>
              <button className="button button--secondary" type="submit" formAction={buyNowAction}>
                <Icon name="checkout" />
                Gelijk bestellen
              </button>
            </div>
          </form>

          {relatedProducts.length > 0 && (
            <section className="product-popout__related" aria-label="Vaak samen gekocht">
              <h3>Vaak samen gekocht</h3>
              <div className="product-popout__slider">
                {relatedProducts.map((relatedProduct) => {
                  const relatedStartingWeight = getStartingWeight(relatedProduct);

                  return (
                    <article key={relatedProduct.slug} className="product-popout__related-card">
                      <span className="product-popout__related-image">
                        <ProductImage alt="" src={getUsableImage(relatedProduct.image) ?? fallbackImage} />
                      </span>
                      <strong>{relatedProduct.name}</strong>
                      <span>{formatPrice(getStartingPrice(relatedProduct))}</span>
                      <form action={quickAddToCartAction}>
                        <input type="hidden" name="slug" value={relatedProduct.slug} />
                        <input type="hidden" name="quantity" value="1" />
                        {relatedStartingWeight && (
                          <input type="hidden" name="weightId" value={relatedStartingWeight.id} />
                        )}
                        {relatedProduct.variants[0] && (
                          <input
                            type="hidden"
                            name="variantId"
                            value={relatedProduct.variants[0].variantId}
                          />
                        )}
                        <button type="submit">
                          <Icon name="plus_icon" />
                          Snel toevoegen
                        </button>
                      </form>
                    </article>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    </article>
  );
}
