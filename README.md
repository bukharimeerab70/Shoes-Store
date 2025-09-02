# Storefront Scaffold

Production‑oriented Next.js (App Router) + TypeScript + Tailwind store scaffold with Supabase backend and Stripe placeholders.

## What’s included
- Next.js 14 App Router (TypeScript)
- Tailwind CSS configured
- Supabase client (server + browser)
- SQL schema with RLS for products/variants/carts/orders
- Routes: `/products`, `/products/[slug]`, `/cart`, `/checkout`, `/account`, `/admin`
- API placeholders: `/api/checkout`, `/api/stripe/webhook`

## Getting started

1) Install dependencies:

   npm install

2) Copy envs:

   cp .env.example .env.local

   Fill your Supabase and Stripe keys.

3) Run the dev server:

   npm run dev

   Open http://localhost:3000

## Supabase
- See `supabase/README.md` for CLI steps (local vs remote).
- Apply `supabase/schema.sql` to provision tables and basic RLS policies.

## Stripe
- Provide `STRIPE_SECRET_KEY` and (optionally) `STRIPE_WEBHOOK_SECRET` in `.env.local`.
- Implement Checkout Session creation in `app/api/checkout/route.ts`.
- Verify webhooks in `app/api/stripe/webhook/route.ts` using the webhook secret.

## Next steps
- Wire Supabase Auth for `Account` and user profiles.
- Implement cart persistence + server actions.
- Build product detail page to query by slug from Supabase.
- Flesh out Admin CRUD.
