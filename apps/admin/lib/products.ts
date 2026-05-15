import "server-only";
import { createAdminSupabaseClient } from "./supabase/server";

export type AdminProduct = {
  id: number;
  name: string;
  slug: string;
  category: string;
  categoryLabel: string | null;
  image: string | null;
  description: string | null;
  basePrice: number;
  unit: string | null;
  badge: string | null;
  origin: string | null;
  isActive: boolean;
};

export type AdminProductWeight = {
  id: string;
  productId: number;
  label: string;
  grams: number;
  price: number;
};

export type AdminProductVariant = {
  id: string;
  productId: number;
  variantId: string;
  name: string;
  price: number;
  image: string | null;
  sku: string | null;
  stockStatus: string;
  stockLabel: string;
};

type ProductRow = {
  id: number;
  name: string;
  slug: string;
  category: string;
  category_label: string | null;
  image: string | null;
  description: string | null;
  base_price: number | string;
  unit: string | null;
  badge: string | null;
  origin: string | null;
  is_active: boolean | null;
};

type WeightRow = {
  id: string;
  product_id: number;
  label: string;
  grams: number;
  price: number | string;
};

type VariantRow = {
  id: string;
  product_id: number;
  variant_id: string;
  name: string;
  price: number | string;
  image: string | null;
  sku: string | null;
  stock_status: string | null;
  stock_label: string | null;
};

const productColumns =
  "id,name,slug,category,category_label,image,description,base_price,unit,badge,origin,is_active";

function mapProduct(row: ProductRow): AdminProduct {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    categoryLabel: row.category_label,
    image: row.image,
    description: row.description,
    basePrice: Number(row.base_price),
    unit: row.unit,
    badge: row.badge,
    origin: row.origin,
    isActive: row.is_active !== false,
  };
}

function mapWeight(row: WeightRow): AdminProductWeight {
  return {
    id: row.id,
    productId: row.product_id,
    label: row.label,
    grams: row.grams,
    price: Number(row.price),
  };
}

function mapVariant(row: VariantRow): AdminProductVariant {
  return {
    id: row.id,
    productId: row.product_id,
    variantId: row.variant_id,
    name: row.name,
    price: Number(row.price),
    image: row.image,
    sku: row.sku,
    stockStatus: row.stock_status ?? "in_stock",
    stockLabel: row.stock_label ?? "Op voorraad",
  };
}

export function formatAdminPrice(value: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function slugifyProductName(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function listAdminProducts() {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select(productColumns)
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data as ProductRow[]).map(mapProduct);
}

export async function getAdminProduct(id: number) {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select(productColumns)
    .eq("id", id)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return data ? mapProduct(data as ProductRow) : null;
}

export async function listProductWeights(productId: number) {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("product_weights")
    .select("id,product_id,label,grams,price")
    .eq("product_id", productId)
    .order("grams", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data as WeightRow[]).map(mapWeight);
}

export async function listProductVariants(productId: number) {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("product_variants")
    .select("id,product_id,variant_id,name,price,image,sku,stock_status,stock_label")
    .eq("product_id", productId)
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data as VariantRow[]).map(mapVariant);
}

export async function getNextProductId() {
  const supabase = createAdminSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select("id")
    .order("id", { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }

  return Number(data?.id ?? 1000) + 1;
}

export async function uploadProductImage(file: File, productSlug: string) {
  if (file.size === 0) {
    return null;
  }

  const supabase = createAdminSupabaseClient();
  const extension = file.name.split(".").pop()?.toLowerCase() || "jpg";
  const safeSlug = slugifyProductName(productSlug) || "product";
  const path = `${safeSlug}/${Date.now()}.${extension}`;
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from("product-images").upload(path, buffer, {
    cacheControl: "31536000",
    contentType: file.type || "image/jpeg",
    upsert: true,
  });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabase.storage.from("product-images").getPublicUrl(path);
  return data.publicUrl;
}

export async function upsertAdminProduct(input: AdminProduct) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("products").upsert(
    {
      id: input.id,
      name: input.name,
      slug: input.slug,
      category: input.category,
      category_label: input.categoryLabel,
      image: input.image,
      description: input.description,
      base_price: input.basePrice,
      unit: input.unit,
      badge: input.badge,
      origin: input.origin,
      is_active: input.isActive,
    },
    { onConflict: "id" },
  );

  if (error) {
    throw new Error(error.message);
  }
}

export async function upsertProductWeight(input: {
  productId: number;
  label: string;
  grams: number;
  price: number;
}) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("product_weights").upsert(
    {
      product_id: input.productId,
      label: input.label,
      grams: input.grams,
      price: input.price,
    },
    { onConflict: "product_id,grams" },
  );

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteProductWeight(id: string) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("product_weights").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}

export async function upsertProductVariant(input: {
  productId: number;
  variantId: string;
  name: string;
  price: number;
  image: string | null;
  sku: string | null;
  stockStatus: string;
  stockLabel: string;
}) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("product_variants").upsert(
    {
      product_id: input.productId,
      variant_id: input.variantId,
      name: input.name,
      price: input.price,
      image: input.image,
      sku: input.sku,
      stock_status: input.stockStatus,
      stock_label: input.stockLabel,
    },
    { onConflict: "product_id,variant_id" },
  );

  if (error) {
    throw new Error(error.message);
  }
}

export async function deleteProductVariant(id: string) {
  const supabase = createAdminSupabaseClient();
  const { error } = await supabase.from("product_variants").delete().eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
}
