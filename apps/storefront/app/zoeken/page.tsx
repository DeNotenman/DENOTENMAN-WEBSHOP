import { Icon } from "../../components/ui/Icon";

const results = [
  { name: "Amandelen ongezouten", price: "EUR 14,95", href: "/winkel/amandelen-ongezouten" },
  { name: "Cashewnoten gebrand", price: "EUR 16,95", href: "/winkel/cashewnoten-gebrand" },
];

export default function SearchPage() {
  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <h1>Zoeken</h1>
          <p>Zoek producten in de webshop.</p>
        </div>

        <form className="auth-form">
          <label>
            Zoekterm
            <input type="search" name="query" placeholder="Zoek naar noten, zaden of fruit" />
          </label>

          <button className="button button--primary" type="submit">
            <Icon name="search_loop" />
            Zoeken
          </button>
        </form>

        <div className="list-grid">
          {results.map((product) => (
            <a key={product.name} href={product.href} className="dashboard-card">
              <h2>{product.name}</h2>
              <p className="product-card__price">
                <Icon name="medium_bag" />
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
