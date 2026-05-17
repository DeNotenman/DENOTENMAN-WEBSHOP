export default function NotFoundPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <h1>Pagina niet gevonden</h1>
        <p>De pagina die je zoekt bestaat niet of is verplaatst.</p>

        <a href="/" className="button button--primary">
          Terug naar home
        </a>
      </section>
    </main>
  );
}