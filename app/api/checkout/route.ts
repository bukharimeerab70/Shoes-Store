import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // TODO: create Stripe Checkout Session using items from request
  // and return the session URL.
  return NextResponse.json({ ok: true, message: 'Checkout placeholder' })
}

