import { createContext, useContext, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

const TableContext = createContext(null)

export function TableProvider({ children }) {
  const [searchParams] = useSearchParams()

  const table = useMemo(() => searchParams.get('mesa'), [searchParams])
  const customer = useMemo(() => searchParams.get('cliente'), [searchParams])

  const value = useMemo(() => ({ table, customer }), [table, customer])

  return <TableContext.Provider value={value}>{children}</TableContext.Provider>
}

export function useTable() {
  const ctx = useContext(TableContext)
  if (!ctx) throw new Error('useTable must be used within TableProvider')
  return ctx
}
