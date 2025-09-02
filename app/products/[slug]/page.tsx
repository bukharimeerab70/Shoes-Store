interface Props {
  params: { slug: string }
}

export default function ProductDetailPage({ params }: Props) {
  const { slug } = params
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Product: {slug}</h1>
      <p className="text-gray-600">This is a placeholder product page. Wire up Supabase to fetch product data by slug.</p>
    </div>
  )
}

