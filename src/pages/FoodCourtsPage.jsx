import { useFoodCourts } from '../hooks/useFoodCourts'
import FoodCourtCard from '../components/FoodCourtCard'
import { FOOD_COURT as PLAZA_VERDE } from '../demo/plaza-verde/data'

const IS_DEMO = import.meta.env.VITE_APP_DEMO === 'true'

export default function FoodCourtsPage() {
  const { data, loading, error, refetch } = useFoodCourts()

  if (loading) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-orange-200 border-t-orange-500" />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">Patios de comida</h1>
      <p className="mb-6 text-sm text-gray-500">Elige un patio para ver sus restaurantes</p>

      {!IS_DEMO && (error ? (
        <div className="flex flex-col items-center gap-3 py-10 text-center">
          <p className="text-sm text-gray-400">{error}</p>
          <button
            onClick={refetch}
            className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
          >
            Reintentar
          </button>
        </div>
      ) : data.length === 0 ? (
        <p className="py-10 text-center text-gray-400">No hay patios de comida disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((fc) => (
            <FoodCourtCard key={fc.id} foodCourt={fc} />
          ))}
        </div>
      ))}

      {/* ── Demos ── */}
      <div className="mt-12">
        <h2 className="mb-1 text-lg font-semibold text-gray-700">Demos</h2>
        <p className="mb-4 text-sm text-gray-400">Patios de comida de ejemplo para explorar la app</p>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <FoodCourtCard foodCourt={PLAZA_VERDE} to="/demo/plaza-verde" />
        </div>
      </div>
    </div>
  )
}
