import Link from 'next/link'

const demoProducts = [
  { id: '1', name: 'Demo Product A', slug: 'demo-product-a', price: 1999 },
  { id: '2', name: 'Demo Product B', slug: 'demo-product-b', price: 2999 },
]

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoProducts.map((p) => (
          <div key={p.id} className="rounded border p-4">
            <h2 className="font-medium mb-1">{p.name}</h2>
            <p className="text-gray-600 mb-3">${(p.price / 100).toFixed(2)}</p>
            <Link className="text-blue-600" href={`/products/${p.slug}`}>View</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

