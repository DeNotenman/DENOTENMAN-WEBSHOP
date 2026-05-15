create table if not exists public.product_weights (
  id uuid primary key default extensions.uuid_generate_v4(),
  product_id bigint not null references public.products(id) on delete cascade,
  label text not null,
  grams integer not null,
  price numeric not null,
  unique (product_id, grams)
);

alter table public.product_weights enable row level security;

-- Remote inventory status currently lives on product_variants.stock_status and
-- product_variants.stock_label. A separate inventory ledger can be added later
-- when admin stock mutations are implemented.
