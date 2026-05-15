export default function ShippingLabelsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Verzending</p>
        <h1>Labels</h1>
        <span>Labelbeheer wordt actief zodra shipment-label opslag en PostNL labelgeneratie zijn gekoppeld.</span>
      </section>

      <section className="admin-card">
        <h2>Nog niet ingericht</h2>
        <p>Er worden geen voorbeeldlabels getoond. Koppel eerst echte shipment-label records.</p>
      </section>
    </main>
  );
}
