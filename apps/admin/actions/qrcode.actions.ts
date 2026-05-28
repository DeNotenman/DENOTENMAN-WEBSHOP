"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "../lib/admin-auth";
import {
  deleteQrCodeDesign,
  type QrCodeStatus,
  type QrCodeTargetType,
  updateQrCodeDesignStatus,
  upsertQrCodeDesign,
} from "../lib/qrcodes";

const targetTypes = new Set<QrCodeTargetType>([
  "product",
  "category",
  "discount",
  "whatsapp",
  "email",
  "wifi",
  "url",
  "text",
]);

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function parseJsonObject(value: string, label: string) {
  try {
    const parsed = JSON.parse(value || "{}");
    if (!parsed || Array.isArray(parsed) || typeof parsed !== "object") {
      throw new Error();
    }
    return parsed as Record<string, unknown>;
  } catch {
    throw new Error(`${label} is ongeldig.`);
  }
}

function sanitizeTargetConfig(targetType: QrCodeTargetType, config: Record<string, unknown>) {
  if (targetType !== "wifi") {
    return config;
  }

  const { password: _password, ...safeConfig } = config;
  return safeConfig;
}

export async function saveQrCodeAction(formData: FormData) {
  const session = await requireAdmin();
  const id = getString(formData, "id") || null;
  const name = getString(formData, "name");
  const targetType = getString(formData, "targetType") as QrCodeTargetType;
  const status = (getString(formData, "status") || "active") as QrCodeStatus;

  if (!name) {
    throw new Error("Naam is verplicht.");
  }

  if (!targetTypes.has(targetType)) {
    throw new Error("QR-doel is ongeldig.");
  }

  if (status !== "active" && status !== "archived") {
    throw new Error("Status is ongeldig.");
  }

  const savedId = await upsertQrCodeDesign({
    id,
    name,
    targetType,
    status,
    createdBy: session.email,
    targetConfig: sanitizeTargetConfig(
      targetType,
      parseJsonObject(getString(formData, "targetConfig"), "Doelconfiguratie"),
    ),
    designConfig: parseJsonObject(getString(formData, "designConfig"), "Ontwerpconfiguratie"),
    labelConfig: parseJsonObject(getString(formData, "labelConfig"), "Labelconfiguratie"),
  });

  revalidatePath("/marketing/qr-codes");
  revalidatePath(`/marketing/qr-codes/${savedId}`);
  redirect(`/marketing/qr-codes/${savedId}`);
}

export async function archiveQrCodeAction(formData: FormData) {
  await requireAdmin();
  const id = getString(formData, "id");

  if (!id) {
    throw new Error("QR-code id ontbreekt.");
  }

  await updateQrCodeDesignStatus(id, "archived");
  revalidatePath("/marketing/qr-codes");
  revalidatePath(`/marketing/qr-codes/${id}`);
}

export async function restoreQrCodeAction(formData: FormData) {
  await requireAdmin();
  const id = getString(formData, "id");

  if (!id) {
    throw new Error("QR-code id ontbreekt.");
  }

  await updateQrCodeDesignStatus(id, "active");
  revalidatePath("/marketing/qr-codes");
  revalidatePath(`/marketing/qr-codes/${id}`);
}

export async function deleteQrCodeAction(formData: FormData) {
  await requireAdmin();
  const id = getString(formData, "id");

  if (!id) {
    throw new Error("QR-code id ontbreekt.");
  }

  await deleteQrCodeDesign(id);
  revalidatePath("/marketing/qr-codes");
  redirect("/marketing/qr-codes");
}
