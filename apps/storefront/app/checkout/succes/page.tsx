export default function CheckoutSuccessPage() {
  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">Bestelling geplaatst</p>
        <h1>Bedankt</h1>
        <p>
          Je bestelling is ontvangen. Je ontvangt automatisch een bevestiging per
          e-mail.
        </p>

        <a href="/winkel" className="button button--primary">
          Verder winkelen
        </a>
      </section>
    </main>
  );
}