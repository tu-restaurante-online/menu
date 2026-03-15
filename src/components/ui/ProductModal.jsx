import { useEffect, useCallback } from 'react'
import { formatPrice } from '../../utils/formatPrice'

const FALLBACK_IMG = 'https://placehold.co/600x400?text=Sin+imagen'

export default function ProductModal({ product, onClose }) {
  const handleBackdrop = useCallback(
    (e) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Prevent body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-0 sm:p-4"
      onClick={handleBackdrop}
    >
      <div className="relative w-full max-w-lg rounded-t-2xl sm:rounded-2xl bg-white dark:bg-gray-800 shadow-2xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-10 rounded-full bg-white/80 dark:bg-gray-700/80 p-1.5 text-gray-600 dark:text-gray-300 backdrop-blur hover:bg-white dark:hover:bg-gray-700"
          aria-label="Cerrar"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-700">
          <img
            src={product.image || FALLBACK_IMG}
            alt={product.name}
            className="h-full w-full object-cover"
            onError={(e) => { e.currentTarget.src = FALLBACK_IMG }}
          />
          {!product.available && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <span className="rounded-full bg-red-500 px-4 py-1.5 text-sm font-semibold text-white">
                Agotado
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {product.category && (
            <span className="mb-2 inline-block rounded-full bg-orange-100 dark:bg-orange-950 px-3 py-0.5 text-xs font-medium text-orange-700 dark:text-orange-300">
              {product.category.name}
            </span>
          )}
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">{product.name}</h2>
          {product.description && (
            <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{product.description}</p>
          )}
          <div className="mt-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-orange-500">{formatPrice(product.price)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
