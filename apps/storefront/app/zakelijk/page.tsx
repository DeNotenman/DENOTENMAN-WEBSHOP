export default function BusinessPage() {
  return (
    <main className="business-page">
      <section className="container business-hero">
        <p className="business-hero__label">Zakelijk bestellen</p>

        <h1>Een eigen bestelomgeving voor zakelijke klanten.</h1>

        <p className="business-hero__text">
          Bestel eenvoudig uit klaargezette bestellijsten, betaal direct en
          bekijk facturen op elk moment terug.
        </p>

        <a href="/zakelijk/inloggen" className="button button--primary">
          Zakelijk inloggen
        </a>
      </section>
    </main>
  );
}