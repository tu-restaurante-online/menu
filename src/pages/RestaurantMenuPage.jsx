import { useState, useMemo, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useFoodCourt } from '../hooks/useFoodCourt'
import { useRestaurantsByFoodCourt, useRestaurantProducts } from '../hooks/useRestaurant'
import { useMenu } from '../context/MenuContext'
import RestaurantHeader from '../components/RestaurantHeader'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/ui/SearchBar'
import CategoryFilter from '../components/ui/CategoryFilter'
import TableBadge from '../components/ui/TableBadge'
import ProductModal from '../components/ui/ProductModal'

export default function RestaurantMenuPage() {
  const { slug, restaurant: restaurantSlug } = useParams()
  const navigate = useNavigate()
  const { search, activeCategory } = useMenu()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const { data: foodCourt } = useFoodCourt(slug)
  const { data: restaurants } = useRestaurantsByFoodCourt(foodCourt?.id)

  // Find the restaurant matching the slug
  const restaurant = useMemo(
    () => restaurants.find((r) => r.slug === restaurantSlug) || null,
    [restaurants, restaurantSlug]
  )

  const { data: products, loading, error } = useRestaurantProducts(restaurant?.id)

  const filtered = useMemo(() => {
    let list = products
    if (search.trim()) {
      const term = search.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(term))
    }
    if (activeCategory !== 'all') {
      list = list.filter((p) => p.category?.id === activeCategory)
    }
    return list
  }, [products, search, activeCategory])

  const handleOpen = useCallback((product) => setSelectedProduct(product), [])
  const handleClose = useCallback(() => setSelectedProduct(null), [])

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-gray-500">{error}</p>
        <button
          onClick={() => navigate(`/menus/${slug}`)}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          Volver
        </button>
      </div>
    )
  }

  return (
    <div className="pb-10">
      {/* Restaurant header */}
      <div className="relative">
        <RestaurantHeader restaurant={restaurant} />
        <button
          onClick={() => navigate(`/menus/${slug}`)}
          className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur hover:bg-black/50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver
        </button>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-5 space-y-4">
        {/* Table badge */}
        <TableBadge />

        {/* Search */}
        <SearchBar />

        {/* Category filter */}
        <CategoryFilter products={products} />

        {/* Products grid */}
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-gray-400">
            {search || activeCategory !== 'all' ? 'Sin resultados para tu búsqueda.' : 'No hay productos disponibles.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onClick={handleOpen} />
            ))}
          </div>
        )}
      </div>

      {/* Product modal */}
      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleClose} />
      )}
    </div>
  )
}
