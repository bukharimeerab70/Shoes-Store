-- Basic ecommerce schema (simplified)

create table if not exists public.brands (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamp with time zone default now()
);

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  created_at timestamp with time zone default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  brand_id uuid references public.brands(id),
  category_id uuid references public.categories(id),
  name text not null,
  slug text not null unique,
  description text,
  created_at timestamp with time zone default now()
);

create table if not exists public.variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references public.products(id) on delete cascade,
  sku text unique,
  price_cents integer not null,
  currency text not null default 'usd',
  stock integer not null default 0,
  created_at timestamp with time zone default now()
);

create table if not exists public.profiles (
  id uuid primary key,
  email text unique,
  full_name text,
  created_at timestamp with time zone default now()
);

create table if not exists public.carts (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  created_at timestamp with time zone default now()
);

create table if not exists public.cart_items (
  id uuid primary key default gen_random_uuid(),
  cart_id uuid references public.carts(id) on delete cascade,
  variant_id uuid references public.variants(id),
  quantity integer not null check (quantity > 0)
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  total_cents integer not null,
  currency text not null default 'usd',
  status text not null default 'pending',
  created_at timestamp with time zone default now()
);

create table if not exists public.order_items (
  id uuid primary key default gen_random_uuid(),
  order_id uuid references public.orders(id) on delete cascade,
  variant_id uuid references public.variants(id),
  quantity integer not null,
  unit_price_cents integer not null
);

-- RLS example policies (adjust as needed)
alter table public.products enable row level security;
alter table public.variants enable row level security;
alter table public.carts enable row level security;
alter table public.cart_items enable row level security;
alter table public.orders enable row level security;
alter table public.order_items enable row level security;

-- Public can read products/variants
create policy if not exists products_read on public.products for select using (true);
create policy if not exists variants_read on public.variants for select using (true);

-- Example cart policies (tie to auth.uid())
create policy if not exists carts_own_select on public.carts for select using (profile_id = auth.uid());
create policy if not exists carts_own_insert on public.carts for insert with check (profile_id = auth.uid());
create policy if not exists cart_items_own_all on public.cart_items for all using (
  cart_id in (select id from public.carts where profile_id = auth.uid())
) with check (
  cart_id in (select id from public.carts where profile_id = auth.uid())
);

