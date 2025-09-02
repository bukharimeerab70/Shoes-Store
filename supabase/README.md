# Supabase Setup

Local (recommended for development):

1. Install Supabase CLI: https://supabase.com/docs/guides/cli
2. Login and start local services:
   supabase login
   supabase start
3. Apply schema:
   supabase db reset

Remote project:

1. Link to your project:
   supabase link --project-ref <YOUR_REF>
2. Push schema:
   supabase db push

Environment variables (copy `.env.example` → `.env.local`):
- NEXT_PUBLIC_SUPABASE_URL
- NEXT_PUBLIC_SUPABASE_ANON_KEY
- SUPABASE_URL (optional, server)
- SUPABASE_SERVICE_ROLE_KEY (server-only)

Security note: never expose `SUPABASE_SERVICE_ROLE_KEY` to the browser.
