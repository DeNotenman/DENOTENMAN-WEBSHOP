import "server-only";
import { getAdminSession } from "./admin-auth";

export async function getAdminSettingsStatus() {
  const session = await getAdminSession();

  return {
    general: {
      shopName: "De Notenman",
      siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? null,
      adminUrl: process.env.ADMIN_URL ?? null,
      mailFromName: process.env.MAIL_FROM_NAME ?? null,
      mailFromEmail: process.env.MAIL_FROM_EMAIL ?? null,
    },
    payments: {
      mollieConfigured: Boolean(process.env.MOLLIE_API_KEY),
      mollieTestPaymentsEnabled:
        process.env.MOLLIE_ENABLE_PAYMENTS === "true" &&
        process.env.MOLLIE_API_KEY?.startsWith("test_") === true,
      webhookPath: "/api/mollie/webhook",
    },
    shipping: {
      postnlConfigured: Boolean(process.env.POSTNL_API_KEY),
      postnlCustomerCodeConfigured: Boolean(process.env.POSTNL_CUSTOMER_CODE),
      postnlCustomerNumberConfigured: Boolean(process.env.POSTNL_CUSTOMER_NUMBER),
    },
    users: [
      {
        email: session?.email ?? process.env.ADMIN_EMAIL ?? "Niet ingesteld",
        role: "Eigenaar",
        status: session ? "Actieve sessie" : "Geen actieve sessie",
      },
    ],
    roles: [
      {
        name: "Eigenaar",
        permissions: "Volledige toegang tot de adminomgeving via server-side adminsessie.",
      },
    ],
  };
}
