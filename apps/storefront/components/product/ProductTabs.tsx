const tabs = [
  {
    title: "Omschrijving",
    text: "Zorgvuldig geselecteerde noten van hoge kwaliteit.",
  },
  {
    title: "Ingrediënten",
    text: "Amandelen. Kan sporen bevatten van andere noten en pinda’s.",
  },
  {
    title: "Bewaren",
    text: "Koel, droog en donker bewaren.",
  },
];

export function ProductTabs() {
  return (
    <section className="product-tabs">
      {tabs.map((tab) => (
        <article key={tab.title} className="dashboard-card">
          <h2>{tab.title}</h2>
          <p>{tab.text}</p>
        </article>
      ))}
    </section>
  );
}