create table if not exists public.qr_code_designs (
  id uuid primary key default extensions.uuid_generate_v4(),
  name text not null,
  target_type text not null check (
    target_type in (
      'product',
      'category',
      'discount',
      'whatsapp',
      'email',
      'wifi',
      'url',
      'text'
    )
  ),
  target_config jsonb not null default '{}'::jsonb,
  design_config jsonb not null default '{}'::jsonb,
  label_config jsonb not null default '{}'::jsonb,
  status text not null default 'active' check (status in ('active', 'archived')),
  created_by text,
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now())
);

create index if not exists qr_code_designs_status_updated_at_idx
  on public.qr_code_designs (status, updated_at desc);

alter table public.qr_code_designs enable row level security;

revoke all on table public.qr_code_designs from anon, authenticated;
grant all on table public.qr_code_designs to service_role;

drop policy if exists "Service role can manage qr code designs." on public.qr_code_designs;
create policy "Service role can manage qr code designs."
  on public.qr_code_designs
  for all
  to service_role
  using (true)
  with check (true);

comment on table public.qr_code_designs is
  'Private admin QR-code design records. Generated files are rendered on demand and WiFi passwords are intentionally not stored.';
