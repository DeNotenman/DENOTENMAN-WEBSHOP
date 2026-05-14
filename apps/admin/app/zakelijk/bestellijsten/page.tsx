const orderLists = [
  {
    title: "Vaste bestellijst",
    customer: "Voorbeeldbedrijf B.V.",
    products: "12 producten",
    status: "Actief",
  },
  {
    title: "Weekaanvulling",
    customer: "Catering Van Dijk",
    products: "8 producten",
    status: "Actief",
  },
];

export default function AdminBusinessOrderListsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Bestellijsten</h1>
        <span>
          Zet producten klaar per zakelijke klant, zodat deze direct kan
          bestellen en betalen.
        </span>
      </section>

      <section className="admin-list">
        {orderLists.map((list) => (
          <a
            key={list.title}
            href="/zakelijk/bestellijsten/vaste-bestellijst"
            className="admin-list-row"
          >
            <div>
              <h2>{list.title}</h2>
              <p>{list.customer}</p>
            </div>

            <span>{list.products}</span>
            <strong>{list.status}</strong>
          </a>
        ))}
      </section>
    </main>
  );
}