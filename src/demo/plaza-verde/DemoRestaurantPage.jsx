import { useState, useMemo, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useMenu } from '../../context/MenuContext'
import ProductCard from '../../components/ProductCard'
import SearchBar from '../../components/ui/SearchBar'
import CategoryFilter from '../../components/ui/CategoryFilter'
import TableBadge from '../../components/ui/TableBadge'
import ProductModal from '../../components/ui/ProductModal'
import ThemeToggle from '../../components/ui/ThemeToggle'
import { RESTAURANTS, PRODUCTS } from './data'

const BASE = '/demo/plaza-verde'
const FALLBACK_BANNER = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=400&fit=crop&auto=format&q=80'
const FALLBACK_ICON = 'https://placehold.co/200x200/15803d/ffffff?text=R'

export default function DemoRestaurantPage() {
  const { restaurant: restaurantSlug } = useParams()
  const navigate = useNavigate()
  const { search, activeCategory } = useMenu()
  const [selectedProduct, setSelectedProduct] = useState(null)

  const restaurant = useMemo(
    () => RESTAURANTS.find((r) => r.slug === restaurantSlug) || null,
    [restaurantSlug]
  )

  const products = useMemo(
    () => PRODUCTS[restaurantSlug] || [],
    [restaurantSlug]
  )

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

  if (!restaurant) {
    return (
      <div className="flex flex-col items-center gap-4 py-16 text-center">
        <p className="text-gray-500 dark:text-gray-400">Restaurante no encontrado.</p>
        <button
          onClick={() => navigate(BASE)}
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          Volver a Plaza Verde
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-10">
      {/* ── Header del restaurante ───────────────────────────────────── */}
      <div className="relative w-full">
        {/* Banner */}
        <div className="h-40 sm:h-56 w-full overflow-hidden bg-gray-800">
          <img
            src={restaurant.banner || FALLBACK_BANNER}
            alt={restaurant.name}
            className="h-full w-full object-cover"
            onError={(e) => { e.currentTarget.src = FALLBACK_BANNER }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
        </div>

        {/* Back button */}
        <button
          onClick={() => navigate(BASE)}
          className="absolute left-4 top-4 flex items-center gap-1 rounded-full bg-black/30 px-3 py-1.5 text-xs text-white backdrop-blur hover:bg-black/50 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Plaza Verde
        </button>

        {/* Theme toggle */}
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>

        {/* Restaurant info overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-4 sm:p-6">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border-2 border-white shadow-lg bg-white">
            <img
              src={restaurant.icon || FALLBACK_ICON}
              alt={restaurant.name}
              className="h-full w-full object-cover"
              onError={(e) => { e.currentTarget.src = FALLBACK_ICON }}
            />
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-xl font-bold text-white sm:text-2xl drop-shadow">
              {restaurant.name}
            </h1>
            {restaurant.slogan && (
              <p className="truncate text-sm text-white/80 drop-shadow">{restaurant.slogan}</p>
            )}
          </div>
        </div>
      </div>

      {/* ── Contenido del menú ───────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-4 py-5 space-y-4">
        <TableBadge />
        <SearchBar />
        <CategoryFilter products={products} />

        {filtered.length === 0 ? (
          <p className="py-16 text-center text-gray-400 dark:text-gray-500">
            {search || activeCategory !== 'all'
              ? 'Sin resultados para tu búsqueda.'
              : 'No hay productos disponibles.'}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onClick={handleOpen} />
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleClose} />
      )}
    </div>
  )
}
