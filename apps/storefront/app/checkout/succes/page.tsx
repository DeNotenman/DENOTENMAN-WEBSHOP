type CheckoutSuccessPageProps = {
  searchParams?: Promise<{
    draft?: string;
  }>;
};

export default async function CheckoutSuccessPage({ searchParams }: CheckoutSuccessPageProps) {
  const params = await searchParams;
  const isDraft = params?.draft === "1";

  return (
    <main className="business-page">
      <section className="container auth-card">
        <p className="business-hero__label">{isDraft ? "Order draft" : "Bestelling geplaatst"}</p>
        <h1>{isDraft ? "Klaar voor Mollie" : "Bedankt"}</h1>
        <p>
          {isDraft
            ? "Je bestelling is gevalideerd en klaar om in de volgende stap aan Mollie gekoppeld te worden."
            : "Je bestelling is ontvangen. Je ontvangt automatisch een bevestiging per e-mail."}
        </p>

        <a href="/winkel" className="button button--primary">
          Verder winkelen
        </a>
      </section>
    </main>
  );
}
