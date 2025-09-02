#!/usr/bin/env bash
set -euo pipefail

echo "Storefront bootstrap starting..."

if ! command -v node >/dev/null; then
  echo "Node.js is required. Please install Node 18+." >&2
  exit 1
fi

if ! command -v npm >/dev/null; then
  echo "npm is required. Please install Node/npm." >&2
  exit 1
fi

echo "Installing dependencies..."
npm install

echo "Copying env example → .env.local (if missing)"
[ -f .env.local ] || cp .env.example .env.local

cat <<EONEXT

Done! Next steps:

1) Fill .env.local with Supabase and Stripe keys
2) (Optional) Install Supabase CLI and apply schema:
   - supabase login
   - supabase start (local) OR supabase link --project-ref <REF>
   - supabase db reset (local) OR supabase db push (remote)
3) Run the dev server:
   npm run dev
   open http://localhost:3000

EONEXT

