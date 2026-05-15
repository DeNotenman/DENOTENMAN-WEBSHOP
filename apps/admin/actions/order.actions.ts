"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "../lib/admin-auth";
import {
  type AdminOrderStatus,
  type AdminPaymentStatus,
  updateAdminOrderStatus,
} from "../lib/orders";

const orderStatuses = ["pending", "paid", "processing", "shipped", "cancelled"] as const;
const paymentStatuses = [
  "draft",
  "open",
  "pending",
  "authorized",
  "paid",
  "failed",
  "cancelled",
  "expired",
] as const;

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function updateOrderStatusAction(formData: FormData) {
  await requireAdmin();

  const orderId = getString(formData, "orderId");
  const status = getString(formData, "status") as AdminOrderStatus;
  const paymentStatus = getString(formData, "paymentStatus") as AdminPaymentStatus;

  if (!orderId) {
    throw new Error("Order-id ontbreekt.");
  }

  if (!orderStatuses.includes(status)) {
    throw new Error("Ongeldige orderstatus.");
  }

  await updateAdminOrderStatus({
    orderId,
    status,
    paymentStatus: paymentStatuses.includes(paymentStatus) ? paymentStatus : undefined,
  });

  revalidatePath("/dashboard");
  revalidatePath("/bestellingen");
  revalidatePath(`/bestellingen/${orderId}`);
  revalidatePath("/betalingen");

  redirect(`/bestellingen/${orderId}`);
}
