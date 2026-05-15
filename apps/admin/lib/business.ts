import "server-only";
import { listAdminOrders } from "./orders";

export type BusinessModuleStatus = {
  configured: boolean;
  reason: string;
};

export async function getBusinessModuleStatus(): Promise<BusinessModuleStatus> {
  return {
    configured: false,
    reason:
      "Er zijn nog geen zakelijke B2B-tabellen gekoppeld. Maak eerst business_customers, business_accounts, business_order_lists en business_prices aan voordat deze module live kan.",
  };
}

export async function listBusinessInvoiceCandidates() {
  const orders = await listAdminOrders(200);
  return orders.filter((order) => order.customerEmail);
}
