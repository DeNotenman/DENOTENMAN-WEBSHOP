-- Remote currently stores product image URLs directly on products/variants.
-- These backup tables also exist remotely and are captured here for parity.

create table if not exists public.backup_products_image (
  id bigint,
  image text,
  backed_up_at timestamp with time zone
);

create table if not exists public.image_backup_products (
  id bigint,
  image text,
  backed_up_at timestamp with time zone
);

create table if not exists public.image_backup_product_variants (
  id uuid,
  image text,
  product_id bigint,
  backed_up_at timestamp with time zone
);

alter table public.backup_products_image enable row level security;

-- SECURITY NOTE:
-- Remote currently has RLS disabled on image_backup_products and
-- image_backup_product_variants. Do not expose these backup tables to the
-- storefront. Enable RLS only after an admin/service-role policy is chosen.
