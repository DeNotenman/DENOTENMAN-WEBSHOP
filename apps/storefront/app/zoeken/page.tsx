const results = [
  { name: "Amandelen ongezouten", price: "€ 14,95", href: "/winkel/amandelen-ongezouten" },
  { name: "Cashewnoten gebrand", price: "€ 16,95", href: "/winkel/cashewnoten-gebrand" },
];

export default function SearchPage() {
  return (
    <main className="business-page">
      <section className="container list-page">
        <div>
          <p className="business-hero__label">Zoeken</p>
          <h1>Zoeken</h1>
          <p>Zoek producten in de webshop.</p>
        </div>

        <form className="auth-form">
          <label>
            Zoekterm
            <input type="search" name="query" placeholder="Zoek naar noten, zaden of fruit" />
          </label>

          <button className="button button--primary" type="submit">
            Zoeken
          </button>
        </form>

        <div className="list-grid">
          {results.map((product) => (
            <a key={product.name} href={product.href} className="dashboard-card">
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}