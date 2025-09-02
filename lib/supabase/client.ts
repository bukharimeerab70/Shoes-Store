import { createClient } from '@supabase/supabase-js'

export function supabaseBrowser() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) throw new Error('Missing Supabase env: NEXT_PUBLIC_SUPABASE_URL/ANON_KEY')
  return createClient(url, anonKey)
}

