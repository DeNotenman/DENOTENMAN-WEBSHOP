"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  getAdminProduct,
  getNextProductId,
  slugifyProductName,
  uploadProductImage,
  upsertAdminProduct,
} from "../lib/products";

function getString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function getNullableString(formData: FormData, key: string) {
  const value = getString(formData, key);
  return value.length > 0 ? value : null;
}

function getNumber(formData: FormData, key: string) {
  const value = Number(getString(formData, key).replace(",", "."));

  if (!Number.isFinite(value)) {
    throw new Error(`Ongeldige waarde voor ${key}.`);
  }

  return value;
}

export async function saveProductAction(formData: FormData) {
  const rawId = getString(formData, "id");
  const id = rawId ? Number(rawId) : await getNextProductId();
  const name = getString(formData, "name");
  const slug = getString(formData, "slug") || slugifyProductName(name);
  const existingProduct = rawId ? await getAdminProduct(id) : null;

  if (!name || !slug) {
    throw new Error("Productnaam en slug zijn verplicht.");
  }

  const file = formData.get("imageFile");
  const uploadedImage =
    file instanceof File && file.size > 0 ? await uploadProductImage(file, slug) : null;

  await upsertAdminProduct({
    id,
    name,
    slug,
    category: getString(formData, "category") || "overig",
    categoryLabel: getNullableString(formData, "categoryLabel"),
    image: uploadedImage ?? getNullableString(formData, "image") ?? existingProduct?.image ?? null,
    description: getNullableString(formData, "description"),
    basePrice: getNumber(formData, "basePrice"),
    unit: getNullableString(formData, "unit"),
    badge: getNullableString(formData, "badge"),
    origin: getNullableString(formData, "origin"),
    isActive: formData.get("isActive") === "on",
  });

  revalidatePath("/producten");
  revalidatePath(`/producten/${id}`);
  revalidatePath("/winkel");
  revalidatePath(`/winkel/${slug}`);

  redirect(`/producten/${id}`);
}
