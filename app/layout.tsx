import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Storefront',
  description: 'Next.js + Supabase + Tailwind scaffold',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container py-6">{children}</main>
      </body>
    </html>
  )
}

