import { Icon } from "../components/ui/Icon";

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
              <Icon name="shopping-bag" />
              Naar de winkel
            </a>

            <a href="/zakelijk" className="button button--secondary">
              <Icon name="briefcase" />
              Zakelijk bestellen
            </a>
          </div>

          <div className="home-hero__usp" aria-label="Voordelen">
            <span>
              <Icon name="leaf-1" />
              Dagvers assortiment
            </span>
            <span>
              <Icon name="delivery-truck" />
              Betrouwbare levering
            </span>
            <span>
              <Icon name="shield-1" />
              Veilig bestellen
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
