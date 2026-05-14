export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="container home-hero__inner">
          <p className="home-hero__label">De Notenman</p>

          <h1>Van markt tot webshop.</h1>

          <p className="home-hero__text">
            De specialist in noten, pitten en gedroogd fruit.
          </p>

          <div className="home-hero__actions">
            <a href="/winkel" className="button button--primary">
              Naar de winkel
            </a>

            <a href="/zakelijk" className="button button--secondary">
              Zakelijk bestellen
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}