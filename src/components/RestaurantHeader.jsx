const FALLBACK_BANNER = 'https://placehold.co/1200x300?text=Restaurante'
const FALLBACK_ICON = 'https://placehold.co/80x80?text=R'

export default function RestaurantHeader({ restaurant }) {
  if (!restaurant) return null

  return (
    <div className="relative w-full">
      {/* Banner */}
      <div className="h-40 sm:h-56 w-full overflow-hidden bg-gray-200">
        <img
          src={restaurant.banner || FALLBACK_BANNER}
          alt={restaurant.name}
          className="h-full w-full object-cover"
          onError={(e) => { e.currentTarget.src = FALLBACK_BANNER }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
      </div>

      {/* Info overlay */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end gap-4 p-4 sm:p-6">
        <div className="h-14 w-14 sm:h-18 sm:w-18 shrink-0 overflow-hidden rounded-xl border-2 border-white shadow-lg bg-white">
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
  )
}
