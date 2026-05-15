import { createClient } from "@supabase/supabase-js";

export type StorefrontProduct = {
  id: number;
  name: string;
  slug: string;
  category: string;
  categoryLabel: string;
  image: string | null;
  description: string | null;
  basePrice: number;
  unit: string | null;
  badge: string | null;
  origin: string | null;
};

export type StorefrontProductVariant = {
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

export type StorefrontProductWeight = {
  id: string;
  productId: number;
  label: string;
  grams: number;
  price: number;
};

export type StorefrontProductDetail = StorefrontProduct & {
  variants: StorefrontProductVariant[];
  weights: StorefrontProductWeight[];
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

type WeightRow = {
  id: string;
  product_id: number;
  label: string;
  grams: number;
  price: number | string;
};

const productColumns =
  "id,name,slug,category,category_label,image,description,base_price,unit,badge,origin,is_active";

function getSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error("Supabase storefront environment variables are missing.");
  }

  return createClient(url, key, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

function toMoney(value: number | string) {
  return Number(value);
}

function mapProduct(row: ProductRow): StorefrontProduct {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    categoryLabel: row.category_label ?? row.category,
    image: row.image,
    description: row.description,
    basePrice: toMoney(row.base_price),
    unit: row.unit,
    badge: row.badge,
    origin: row.origin,
  };
}

function mapVariant(row: VariantRow): StorefrontProductVariant {
  return {
    id: row.id,
    productId: row.product_id,
    variantId: row.variant_id,
    name: row.name,
    price: toMoney(row.price),
    image: row.image,
    sku: row.sku,
    stockStatus: row.stock_status ?? "in_stock",
    stockLabel: row.stock_label ?? "Op voorraad",
  };
}

function mapWeight(row: WeightRow): StorefrontProductWeight {
  return {
    id: row.id,
    productId: row.product_id,
    label: row.label,
    grams: row.grams,
    price: toMoney(row.price),
  };
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export async function listProducts() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select(productColumns)
    .eq("is_active", true)
    .order("category", { ascending: true })
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data as ProductRow[]).map(mapProduct);
}

export async function listProductsByCategory(category: string) {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("products")
    .select(productColumns)
    .eq("is_active", true)
    .eq("category", category)
    .order("name", { ascending: true });

  if (error) {
    throw new Error(error.message);
  }

  return (data as ProductRow[]).map(mapProduct);
}

export async function getProductBySlug(slug: string): Promise<StorefrontProductDetail | null> {
  const supabase = getSupabaseClient();
  const { data: product, error: productError } = await supabase
    .from("products")
    .select(productColumns)
    .eq("slug", slug)
    .eq("is_active", true)
    .maybeSingle();

  if (productError) {
    throw new Error(productError.message);
  }

  if (!product) {
    return null;
  }

  const mappedProduct = mapProduct(product as ProductRow);
  const [variantsResult, weightsResult] = await Promise.all([
    supabase
      .from("product_variants")
      .select("id,product_id,variant_id,name,price,image,sku,stock_status,stock_label")
      .eq("product_id", mappedProduct.id)
      .order("name", { ascending: true }),
    supabase
      .from("product_weights")
      .select("id,product_id,label,grams,price")
      .eq("product_id", mappedProduct.id)
      .order("grams", { ascending: true }),
  ]);

  if (variantsResult.error) {
    throw new Error(variantsResult.error.message);
  }

  if (weightsResult.error) {
    throw new Error(weightsResult.error.message);
  }

  return {
    ...mappedProduct,
    variants: (variantsResult.data as VariantRow[]).map(mapVariant),
    weights: (weightsResult.data as WeightRow[]).map(mapWeight),
  };
}

export function getCategoryLinks(products: StorefrontProduct[]) {
  const categories = new Map<string, string>();

  for (const product of products) {
    categories.set(product.category, product.categoryLabel);
  }

  return [...categories.entries()]
    .sort(([, labelA], [, labelB]) => labelA.localeCompare(labelB, "nl"))
    .map(([slug, label]) => ({
      href: `/categorie/${slug}`,
      label,
      slug,
    }));
}
