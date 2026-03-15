import { useParams, useNavigate } from 'react-router-dom'
import { useFoodCourt } from '../hooks/useFoodCourt'
import { useRestaurantsByFoodCourt } from '../hooks/useRestaurant'
import RestaurantCard from '../components/RestaurantCard'

const FALLBACK_BANNER = 'https://placehold.co/1200x300?text=Patio+de+Comida'

export default function FoodCourtPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { data: foodCourt, loading: fcLoading, error: fcError } = useFoodCourt(slug)
  const { data: restaurants, loading: rLoading, error: rError } = useRestaurantsByFoodCourt(
    foodCourt?.id
  )

  const loading = fcLoading || rLoading
  const error = fcError || rError

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
          onClick={() => navigate('/menus')}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          Volver
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Banner header */}
      {foodCourt && (
        <div className="relative h-40 sm:h-56 w-full overflow-hidden bg-gray-200">
          <img
            src={foodCourt.banner || FALLBACK_BANNER}
            alt={foodCourt.name}
            className="h-full w-full object-cover"
            onError={(e) => { e.currentTarget.src = FALLBACK_BANNER }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <button
              onClick={() => navigate('/menus')}
              className="mb-2 flex items-center gap-1 text-sm text-white/80 hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Patios de comida
            </button>
            <h1 className="text-xl font-bold text-white sm:text-2xl drop-shadow">{foodCourt.name}</h1>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="mb-5 text-sm text-gray-500">Selecciona un restaurante para ver su menú</p>

        {restaurants.length === 0 ? (
          <p className="py-16 text-center text-gray-400">No hay restaurantes disponibles.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {restaurants.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
