import { AdminModuleStatus } from "../../../components/layout/AdminModuleStatus";

export default function MarketingActionsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Acties</h1>
        <span>Beheer tijdelijke acties, campagnes en commerciele blokken.</span>
      </section>

      <AdminModuleStatus
        title="Campagnebeheer ontbreekt nog"
        description="Er worden geen voorbeeldacties meer getoond. Campagnes moeten straks vanuit echte marketingrecords worden opgebouwd."
        items={[
          "Maak campaign records met looptijd, status en gekoppelde contentblokken.",
          "Koppel actieve campagnes aan storefront posities.",
          "Voeg publicatie- en revalidatie-actions toe.",
        ]}
      />
    </main>
  );
}
