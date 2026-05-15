export default function AdminCustomerDetailPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Klant</p>
        <h1>Jan Jansen</h1>
        <span>Bekijk klantgegevens, adressen, bestellingen en accountstatus.</span>
      </section>

      <section className="admin-grid">
        <article className="admin-card">
          <h2>Contact</h2>
          <p>jan@example.com</p>
          <p>06 12345678</p>
        </article>

        <article className="admin-card">
          <h2>Adres</h2>
          <p>Voorbeeldstraat 12</p>
          <p>1234 AB Amsterdam</p>
        </article>

        <article className="admin-card">
          <h2>Bestellingen</h2>
          <p>2 bestellingen geplaatst.</p>
        </article>
      </section>
    </main>
  );
}