import { AdminModuleStatus } from "../../../components/layout/AdminModuleStatus";

export default function MarketingBannersPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Marketing</p>
        <h1>Banners</h1>
        <span>Beheer commerciele banners, posities en zichtbaarheid.</span>
      </section>

      <AdminModuleStatus
        title="Bannerbeheer ontbreekt nog"
        description="Er worden geen voorbeeldbanners meer getoond. Bannerposities moeten eerst gekoppeld worden aan echte media en storefront-slots."
        items={[
          "Maak banner records met positie, afbeelding, link en publicatiestatus.",
          "Hergebruik de bestaande media-upload flow voor bannerafbeeldingen.",
          "Laat de storefront alleen actieve banners per positie ophalen.",
        ]}
      />
    </main>
  );
}
