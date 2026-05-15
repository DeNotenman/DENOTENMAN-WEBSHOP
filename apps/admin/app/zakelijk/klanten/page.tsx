import { getBusinessModuleStatus } from "../../../lib/business";

export default async function AdminBusinessCustomersPage() {
  const status = await getBusinessModuleStatus();

  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Zakelijk</p>
        <h1>Zakelijke klanten</h1>
        <span>Beheer bedrijven, contactpersonen, factuurgegevens en toegang.</span>
      </section>

      <section className="admin-card">
        <h2>{status.configured ? "Actief" : "Nog niet ingericht"}</h2>
        <p>{status.reason}</p>
      </section>
    </main>
  );
}
