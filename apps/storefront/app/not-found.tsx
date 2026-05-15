export default function NotFoundPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">404</p>
        <h1>Pagina niet gevonden</h1>
        <p>De pagina die je zoekt bestaat niet of is verplaatst.</p>

        <a href="/" className="button button--primary">
          Terug naar home
        </a>
      </section>
    </main>
  );
}