import { useNavigate } from 'react-router-dom'

const FALLBACK_IMG = 'https://placehold.co/600x300?text=Patio+de+Comida'

export default function FoodCourtCard({ foodCourt, to }) {
  const navigate = useNavigate()

  return (
    <button
      onClick={() => navigate(to ?? `/menus/${foodCourt.slug}`)}
      className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-md transition-shadow text-left w-full"
    >
      <div className="aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={foodCourt.banner || FALLBACK_IMG}
          alt={foodCourt.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
        />
      </div>
      <div className="p-4">
        <h2 className="text-base font-semibold text-gray-900 group-hover:text-orange-500 transition-colors">
          {foodCourt.name}
        </h2>
        {foodCourt.description && (
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{foodCourt.description}</p>
        )}
      </div>
    </button>
  )
}
