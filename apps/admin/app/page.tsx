import Link from "next/link";

export default function AdminHomePage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Admin</p>
        <h1>Beheeromgeving</h1>
        <span>
          Beheer producten, bestellingen, klanten, voorraad, zakelijke accounts,
          bestellijsten, facturen, marketing en instellingen.
        </span>
      </section>

      <section className="admin-grid">
        <Link href="/dashboard" className="admin-card admin-link-card">
          <h2>Dashboard</h2>
          <p>Bekijk de belangrijkste webshopactiviteiten.</p>
        </Link>

        <Link href="/producten" className="admin-card admin-link-card">
          <h2>Producten</h2>
          <p>Beheer catalogus, voorraad, media en SEO.</p>
        </Link>

        <Link href="/bestellingen" className="admin-card admin-link-card">
          <h2>Bestellingen</h2>
          <p>Bekijk orders, betalingen, verzendingen en facturen.</p>
        </Link>

        <Link href="/zakelijk" className="admin-card admin-link-card">
          <h2>Zakelijk</h2>
          <p>Beheer zakelijke klanten, bestellijsten en facturen.</p>
        </Link>
      </section>
    </main>
  );
}
