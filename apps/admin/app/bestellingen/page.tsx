const settings = [
  { title: "Algemeen", text: "Webshopgegevens, naam en basisinstellingen.", href: "/instellingen/algemeen" },
  { title: "BTW", text: "Belastingtarieven en factuurregels.", href: "/instellingen/btw" },
  { title: "Verzending", text: "Verzendmethodes en tarieven.", href: "/instellingen/verzending" },
  { title: "Betalingen", text: "Betaalmethodes en koppelingen.", href: "/instellingen/betalingen" },
];

export default function SettingsPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Instellingen</p>
        <h1>Webshopinstellingen</h1>
        <span>Beheer algemene instellingen, btw, verzending, betalingen en gebruikers.</span>
      </section>

      <section className="admin-grid">
        {settings.map((setting) => (
          <a key={setting.href} href={setting.href} className="admin-card admin-link-card">
            <h2>{setting.title}</h2>
            <p>{setting.text}</p>
          </a>
        ))}
      </section>
    </main>
  );
}