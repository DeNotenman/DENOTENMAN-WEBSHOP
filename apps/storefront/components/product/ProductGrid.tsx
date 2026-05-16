"use client";

import { useMemo, useState } from "react";
import type { StorefrontProduct } from "../../lib/products";
import { formatPrice } from "../../lib/products";
import { ProductCard } from "./ProductCard";

type ProductGridProps = {
  activeCategory?: string;
  products: StorefrontProduct[];
  showFilters?: boolean;
};

function getProductPrice(product: StorefrontProduct) {
  return product.weights[0]?.price ?? product.basePrice;
}

function getStockState(product: StorefrontProduct) {
  const status = product.variants[0]?.stockStatus.toLowerCase() ?? "in_stock";
  const label = product.variants[0]?.stockLabel.toLowerCase() ?? "op voorraad";

  if (status.includes("out") || label.includes("niet")) {
    return "out";
  }

  return "in";
}

function getSearchText(product: StorefrontProduct) {
  return [
    product.name,
    product.categoryLabel,
    product.description,
    product.origin,
    product.badge,
    product.unit,
    ...product.weights.map((weight) => weight.label),
    ...product.variants.map((variant) => `${variant.name} ${variant.stockLabel}`),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

export function ProductGrid({ activeCategory = "all", products, showFilters = false }: ProductGridProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(activeCategory);
  const [stock, setStock] = useState("all");
  const [unit, setUnit] = useState("all");
  const [price, setPrice] = useState("all");
  const [sort, setSort] = useState("popular");

  const categories = useMemo(
    () =>
      [...new Map(products.map((product) => [product.category, product.categoryLabel])).entries()].sort(
        ([, left], [, right]) => left.localeCompare(right, "nl"),
      ),
    [products],
  );
  const units = useMemo(
    () =>
      [
        ...new Set(
          products.flatMap((product) =>
            product.weights.length > 0 ? product.weights.map((weight) => weight.label) : [product.unit ?? "Per stuk"],
          ),
        ),
      ].sort((left, right) => left.localeCompare(right, "nl")),
    [products],
  );

  const filteredProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => category === "all" || product.category === category)
      .filter((product) => !normalizedQuery || getSearchText(product).includes(normalizedQuery))
      .filter((product) => stock === "all" || getStockState(product) === stock)
      .filter((product) => {
        if (unit === "all") return true;
        if (product.weights.length === 0) return (product.unit ?? "Per stuk") === unit;
        return product.weights.some((weight) => weight.label === unit);
      })
      .filter((product) => {
        const productPrice = getProductPrice(product);
        if (price === "under-3") return productPrice < 3;
        if (price === "3-5") return productPrice >= 3 && productPrice <= 5;
        if (price === "over-5") return productPrice > 5;
        return true;
      })
      .sort((left, right) => {
        if (sort === "price-asc") return getProductPrice(left) - getProductPrice(right);
        if (sort === "price-desc") return getProductPrice(right) - getProductPrice(left);
        if (sort === "name") return left.name.localeCompare(right.name, "nl");
        return left.categoryLabel.localeCompare(right.categoryLabel, "nl") || left.name.localeCompare(right.name, "nl");
      });
  }, [category, price, products, query, sort, stock, unit]);

  return (
    <section className="product-browser">
      {showFilters && (
        <div className="product-browser__filters" aria-label="Producten zoeken en filteren">
          <label className="product-browser__search">
            <span>Zoeken</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Zoek op product, categorie, herkomst of besteleenheid"
            />
          </label>

          <div className="product-browser__controls">
            <label>
              <span>Categorie</span>
              <select value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="all">Alle categorieen</option>
                {categories.map(([slug, label]) => (
                  <option key={slug} value={slug}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Voorraad</span>
              <select value={stock} onChange={(event) => setStock(event.target.value)}>
                <option value="all">Alles</option>
                <option value="in">Op voorraad</option>
                <option value="out">Niet op voorraad</option>
              </select>
            </label>

            <label>
              <span>Besteleenheid</span>
              <select value={unit} onChange={(event) => setUnit(event.target.value)}>
                <option value="all">Alle eenheden</option>
                {units.map((unitLabel) => (
                  <option key={unitLabel} value={unitLabel}>
                    {unitLabel}
                  </option>
                ))}
              </select>
            </label>

            <label>
              <span>Prijs</span>
              <select value={price} onChange={(event) => setPrice(event.target.value)}>
                <option value="all">Alle prijzen</option>
                <option value="under-3">Onder EUR 3</option>
                <option value="3-5">EUR 3 tot EUR 5</option>
                <option value="over-5">Boven EUR 5</option>
              </select>
            </label>

            <label>
              <span>Sorteer</span>
              <select value={sort} onChange={(event) => setSort(event.target.value)}>
                <option value="popular">Populair</option>
                <option value="name">Naam A-Z</option>
                <option value="price-asc">Prijs laag-hoog</option>
                <option value="price-desc">Prijs hoog-laag</option>
              </select>
            </label>
          </div>

          <div className="product-browser__meta">
            <strong>{filteredProducts.length}</strong>
            <span>producten gevonden</span>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory(activeCategory);
                setStock("all");
                setUnit("all");
                setPrice("all");
                setSort("popular");
              }}
            >
              Reset filters
            </button>
          </div>
        </div>
      )}

      <div className="product-grid">
        {filteredProducts.map((product) => {
          const relatedProducts = products
            .filter((item) => item.slug !== product.slug && item.category === product.category)
            .slice(0, 8);

          return (
            <ProductCard
              key={product.slug}
              product={product}
              price={formatPrice(getProductPrice(product))}
              relatedProducts={relatedProducts}
            />
          );
        })}
      </div>

      {filteredProducts.length === 0 && (
        <p className="product-browser__empty">Geen producten gevonden. Pas je zoekterm of filters aan.</p>
      )}
    </section>
  );
}
