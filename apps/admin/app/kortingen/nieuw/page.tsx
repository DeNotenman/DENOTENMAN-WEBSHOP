import { AdminModuleStatus } from "../../../components/layout/AdminModuleStatus";

export default function NewDiscountPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Nieuwe korting</h1>
        <span>Maak een kortingscode of actie aan.</span>
      </section>

      <AdminModuleStatus
        title="Korting aanmaken is nog geblokkeerd"
        description="Deze route wacht op een kortingsschema en checkout-koppeling, zodat een code pas beheerbaar wordt wanneer hij ook echt werkt."
        items={[
          "Definieer kortingsvelden en validatieregels.",
          "Voeg een beveiligde saveDiscountAction toe.",
          "Koppel de code aan cart- en checkoutberekening.",
        ]}
      />
    </main>
  );
}
