export function Header() {
  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4">
        <a href="/" className="font-semibold">Storefront</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="/products" className="text-gray-700 hover:text-black">Products</a>
          <a href="/cart" className="text-gray-700 hover:text-black">Cart</a>
          <a href="/checkout" className="text-gray-700 hover:text-black">Checkout</a>
          <a href="/account" className="text-gray-700 hover:text-black">Account</a>
          <a href="/admin" className="text-gray-700 hover:text-black">Admin</a>
        </nav>
      </div>
    </header>
  )
}

