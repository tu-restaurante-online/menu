import { useFoodCourts } from '../hooks/useFoodCourts'
import FoodCourtCard from '../components/FoodCourtCard'

export default function FoodCourtsPage() {
  const { data, loading, error, refetch } = useFoodCourts()

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
          onClick={refetch}
          className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white hover:bg-orange-600"
        >
          Reintentar
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold text-gray-900">Patios de comida</h1>
      <p className="mb-6 text-sm text-gray-500">Elige un patio para ver sus restaurantes</p>

      {data.length === 0 ? (
        <p className="py-16 text-center text-gray-400">No hay patios de comida disponibles.</p>
      ) : (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((fc) => (
            <FoodCourtCard key={fc.id} foodCourt={fc} />
          ))}
        </div>
      )}
    </div>
  )
}
