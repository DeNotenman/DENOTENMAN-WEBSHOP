import { AdminModuleStatus } from "../../components/layout/AdminModuleStatus";

export default function AuditLogPage() {
  return (
    <main className="admin-main">
      <section className="admin-page-header">
        <p>Beveiliging</p>
        <h1>Audit log</h1>
        <span>Bekijk belangrijke wijzigingen en beheeracties binnen de adminomgeving.</span>
      </section>

      <AdminModuleStatus
        title="Audit logging ontbreekt nog"
        description="Er worden geen voorbeeldlogs meer getoond. Beheeracties moeten eerst centraal worden vastgelegd voordat deze pagina als controlespoor kan dienen."
        items={[
          "Maak een audit_logs tabel met actor, actie, resource, metadata en timestamp.",
          "Log wijzigingen vanuit product-, order-, settings- en content-actions.",
          "Voeg filters toe op gebruiker, module en periode.",
        ]}
      />
    </main>
  );
}
