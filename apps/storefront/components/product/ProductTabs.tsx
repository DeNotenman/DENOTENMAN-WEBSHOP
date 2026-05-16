type ProductTabsProps = {
  category: string;
  description?: string | null;
  name: string;
};

function getDescription({ category, description, name }: ProductTabsProps) {
  return (
    description ??
    `${name} van De Notenman hoort bij ${category.toLowerCase()} en is geselecteerd op smaak, versheid en kwaliteit. Bestel ${name.toLowerCase()} online in handige porties voor dagelijks gebruik, recepten, ontbijt, borrel of zakelijke voorraad.`
  );
}

function getIngredients(name: string) {
  return `${name}. Kan sporen bevatten van pinda, noten, gluten, sesam en andere allergenen. Controleer altijd het etiket op de verpakking voor de meest actuele ingredienten en allergeneninformatie.`;
}

export function ProductTabs({ category, description, name }: ProductTabsProps) {
  const tabs = [
    {
      title: "Omschrijving",
      text: getDescription({ category, description, name }),
    },
    {
      title: "Ingredienten",
      text: getIngredients(name),
    },
  ];

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
