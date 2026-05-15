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
alter table public.image_backup_products enable row level security;
alter table public.image_backup_product_variants enable row level security;

revoke all on table public.backup_products_image from anon, authenticated;
revoke all on table public.image_backup_products from anon, authenticated;
revoke all on table public.image_backup_product_variants from anon, authenticated;

grant all on table public.backup_products_image to service_role;
grant all on table public.image_backup_products to service_role;
grant all on table public.image_backup_product_variants to service_role;
