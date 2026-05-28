import { AdminModuleStatus } from "../../../components/layout/AdminModuleStatus";

export default function NewslettersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Nieuwsbrieven</h1>
        <span>Beheer nieuwsbrieven, doelgroepen en verzendstatussen.</span>
      </section>

      <AdminModuleStatus
        title="Nieuwsbriefbeheer ontbreekt nog"
        description="Er worden geen voorbeeldnieuwsbrieven meer getoond. Verzenden moet pas beschikbaar worden na doelgroep-, consent- en e-mailintegratie."
        items={[
          "Koppel inschrijvingen en toestemming aan echte klantdata.",
          "Maak concepten, segmenten en geplande verzendingen persistent.",
          "Gebruik de worker voor gecontroleerde e-mailverzending.",
        ]}
      />
    </main>
  );
}
