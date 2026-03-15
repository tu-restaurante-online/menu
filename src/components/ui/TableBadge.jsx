import { useTable } from '../../context/TableContext'

export default function TableBadge() {
  const { table, customer } = useTable()

  if (!table && !customer) return null

  return (
    <div className="flex items-center gap-2 rounded-xl bg-orange-50 dark:bg-orange-950 border border-orange-200 dark:border-orange-800 px-4 py-2 text-sm text-orange-800 dark:text-orange-200 shadow-sm">
      <span className="text-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 6h18M3 14h18M3 18h18" />
        </svg>
      </span>
      {table && <span>Mesa <strong>{table}</strong></span>}
      {table && customer && <span className="text-orange-300 dark:text-orange-700">·</span>}
      {customer && <span>Cliente: <strong>{customer}</strong></span>}
    </div>
  )
}
