/**
 * Format a number as local currency.
 * Uses Intl.NumberFormat with 'es-CO' locale (COP) as default.
 */
export function formatPrice(amount, currency = 'COP', locale = 'es-CO') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}
