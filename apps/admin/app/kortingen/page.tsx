import { AdminModuleStatus } from "../../components/layout/AdminModuleStatus";

export default function DiscountsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Kortingen</h1>
        <span>Beheer kortingscodes, acties en voorwaarden.</span>
      </section>

      <AdminModuleStatus
        title="Kortingsbeheer ontbreekt nog"
        description="Er worden geen voorbeeldkortingen meer getoond. Kortingscodes moeten eerst gekoppeld worden aan echte opslag en checkout-validatie."
        items={[
          "Maak een discounts tabel met code, type, waarde, looptijd en gebruikslimieten.",
          "Valideer kortingsregels in de checkout totals.",
          "Registreer gebruik per order om misbruik en dubbele toepassing te voorkomen.",
        ]}
      />
    </main>
  );
}
