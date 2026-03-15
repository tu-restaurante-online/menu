import { useNavigate, useParams } from 'react-router-dom'

const FALLBACK_ICON = 'https://placehold.co/80x80?text=R'

export default function RestaurantCard({ restaurant }) {
  const navigate = useNavigate()
  const { slug } = useParams()

  return (
    <button
      onClick={() => navigate(`/menus/${slug}/${restaurant.slug}`)}
      className="group flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow hover:shadow-md transition-shadow text-center w-full"
    >
      <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-gray-100 bg-gray-50 shadow-sm">
        <img
          src={restaurant.icon || FALLBACK_ICON}
          alt={restaurant.name}
          className="h-full w-full object-cover"
          onError={(e) => { e.currentTarget.src = FALLBACK_ICON }}
        />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
          {restaurant.name}
        </h3>
        {restaurant.type && (
          <span className="text-xs text-gray-400">{restaurant.type}</span>
        )}
      </div>
    </button>
  )
}
