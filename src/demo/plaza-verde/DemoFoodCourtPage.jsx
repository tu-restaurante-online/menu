import { useNavigate } from 'react-router-dom'
import { FOOD_COURT, RESTAURANTS } from './data'
import ThemeToggle from '../../components/ui/ThemeToggle'

const BASE = '/demo/plaza-verde'
const FALLBACK_BANNER = 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&h=500&fit=crop&auto=format&q=80'
const FALLBACK_ICON = 'https://placehold.co/200x200/15803d/ffffff?text=R'

function RestaurantCard({ restaurant }) {
  const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(`${BASE}/${restaurant.slug}`)}
      className="group flex flex-col items-center gap-3 rounded-2xl bg-white dark:bg-gray-800 p-5 shadow hover:shadow-md transition-all text-center w-full border border-transparent hover:border-green-100 dark:hover:border-green-900"
    >
      <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-green-100 dark:border-green-900 bg-gray-50 dark:bg-gray-700 shadow-sm">
        <img
          src={restaurant.icon || FALLBACK_ICON}
          alt={restaurant.name}
          className="h-full w-full object-cover"
          onError={(e) => { e.currentTarget.src = FALLBACK_ICON }}
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors">
          {restaurant.name}
        </h3>
        {restaurant.type && (
          <span className="text-xs text-gray-400 dark:text-gray-500">{restaurant.type}</span>
        )}
      </div>
    </button>
  )
}

export default function DemoFoodCourtPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* ── Banner ───────────────────────────────────────────────────── */}
      <div className="relative h-52 sm:h-72 w-full overflow-hidden bg-gray-900">
        <img
          src={FOOD_COURT.banner}
          alt={FOOD_COURT.name}
          className="h-full w-full object-cover opacity-80"
          onError={(e) => { e.currentTarget.src = FALLBACK_BANNER }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70" />

        {/* Theme toggle */}
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>

        {/* Logo + name */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-2 pb-6 px-4 text-center">
          <img
            src={FOOD_COURT.logo}
            alt="Plaza Verde"
            className="h-14 w-auto drop-shadow-lg"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
          <p className="text-sm text-white/80 drop-shadow max-w-sm">
            {FOOD_COURT.description}
          </p>
        </div>
      </div>

      {/* ── Restaurantes ────────────────────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 py-8">
        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-5 w-1 rounded-full bg-green-600" />
          <h2 className="text-base font-semibold text-gray-700 dark:text-gray-200">
            Selecciona un restaurante para ver su menú
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {RESTAURANTS.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>

        {/* Footer branding */}
        <p className="mt-12 text-center text-xs text-gray-300 dark:text-gray-600">
          Menú digital Plaza Verde · Demo creada por <a href="https://desarrollocreativo.dev" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Desarrollo Creativo</a>
        </p>
      </div>
    </div>
  )
}
