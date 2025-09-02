export default function HomePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Welcome to Storefront</h1>
      <p className="text-gray-600">A production-ready scaffold with Next.js App Router, TypeScript, Tailwind, Supabase, and Stripe placeholders.</p>
      <ul className="list-disc list-inside text-blue-600">
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart</a></li>
        <li><a href="/checkout">Checkout</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/admin">Admin</a></li>
      </ul>
    </div>
  )
}

