import { createContext, useContext, useState, useMemo } from 'react'

const MenuContext = createContext(null)

export function MenuProvider({ children }) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const value = useMemo(
    () => ({ search, setSearch, activeCategory, setActiveCategory }),
    [search, activeCategory]
  )

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>
}

export function useMenu() {
  const ctx = useContext(MenuContext)
  if (!ctx) throw new Error('useMenu must be used within MenuProvider')
  return ctx
}
