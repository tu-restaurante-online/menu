import { formatPrice } from '../utils/formatPrice'

const FALLBACK_IMG = 'https://placehold.co/400x300?text=Producto'

export default function ProductCard({ product, onClick }) {
  return (
    <button
      onClick={() => onClick(product)}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow hover:shadow-md transition-shadow text-left w-full ${
        !product.available ? 'opacity-60' : ''
      }`}
    >
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img
          src={product.image || FALLBACK_IMG}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
        />
        {!product.available && (
          <span className="absolute right-2 top-2 rounded-full bg-red-500 px-2.5 py-0.5 text-xs font-semibold text-white">
            Agotado
          </span>
        )}
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col p-3">
        {product.category && (
          <span className="mb-1 text-xs font-medium text-orange-500">{product.category.name}</span>
        )}
        <h3 className="flex-1 text-sm font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2">
          {product.name}
        </h3>
        <span className="mt-2 text-base font-bold text-gray-800 dark:text-gray-100">
          {formatPrice(product.price)}
        </span>
      </div>
    </button>
  )
}
