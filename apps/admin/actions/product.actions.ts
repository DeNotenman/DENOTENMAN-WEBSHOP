"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "../lib/admin-auth";
import {
  deleteProductVariant,
  deleteProductWeight,
  getAdminProduct,
  getNextProductId,
  slugifyProductName,
  uploadProductImage,
  upsertAdminProduct,
  upsertProductVariant,
  upsertProductWeight,
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
  await requireAdmin();

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

export async function saveProductWeightAction(formData: FormData) {
  await requireAdmin();

  const productId = getNumber(formData, "productId");
  const label = getString(formData, "label");
  const grams = getNumber(formData, "grams");
  const price = getNumber(formData, "price");

  if (!label) {
    throw new Error("Gewichtlabel is verplicht.");
  }

  await upsertProductWeight({
    productId,
    label,
    grams,
    price,
  });

  revalidatePath(`/producten/${productId}`);
  revalidatePath(`/producten/${productId}/varianten`);
  revalidatePath("/winkel");
}

export async function deleteProductWeightAction(formData: FormData) {
  await requireAdmin();

  const productId = getNumber(formData, "productId");
  const id = getString(formData, "id");

  if (!id) {
    throw new Error("Gewicht-id ontbreekt.");
  }

  await deleteProductWeight(id);
  revalidatePath(`/producten/${productId}`);
  revalidatePath(`/producten/${productId}/varianten`);
  revalidatePath("/winkel");
}

export async function saveProductVariantAction(formData: FormData) {
  await requireAdmin();

  const productId = getNumber(formData, "productId");
  const name = getString(formData, "name");
  const variantId = getString(formData, "variantId") || slugifyProductName(name);

  if (!name || !variantId) {
    throw new Error("Variantnaam is verplicht.");
  }

  await upsertProductVariant({
    productId,
    variantId,
    name,
    price: getNumber(formData, "price"),
    image: getNullableString(formData, "image"),
    sku: getNullableString(formData, "sku"),
    stockStatus: getString(formData, "stockStatus") || "in_stock",
    stockLabel: getString(formData, "stockLabel") || "Op voorraad",
  });

  revalidatePath(`/producten/${productId}`);
  revalidatePath(`/producten/${productId}/varianten`);
  revalidatePath("/winkel");
}

export async function deleteProductVariantAction(formData: FormData) {
  await requireAdmin();

  const productId = getNumber(formData, "productId");
  const id = getString(formData, "id");

  if (!id) {
    throw new Error("Variant-id ontbreekt.");
  }

  await deleteProductVariant(id);
  revalidatePath(`/producten/${productId}`);
  revalidatePath(`/producten/${productId}/varianten`);
  revalidatePath("/winkel");
}

export async function hideProductAction(formData: FormData) {
  await requireAdmin();

  const productId = getNumber(formData, "productId");
  const product = await getAdminProduct(productId);

  if (!product) {
    throw new Error("Product niet gevonden.");
  }

  await upsertAdminProduct({
    ...product,
    isActive: false,
  });

  revalidatePath("/producten");
  revalidatePath(`/producten/${productId}`);
  revalidatePath("/winkel");
}

export async function showProductAction(formData: FormData) {
  await requireAdmin();

  const productId = getNumber(formData, "productId");
  const product = await getAdminProduct(productId);

  if (!product) {
    throw new Error("Product niet gevonden.");
  }

  await upsertAdminProduct({
    ...product,
    isActive: true,
  });

  revalidatePath("/producten");
  revalidatePath(`/producten/${productId}`);
  revalidatePath("/winkel");
}
