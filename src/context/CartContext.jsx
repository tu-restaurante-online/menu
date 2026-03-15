import { createContext, useContext, useState, useCallback, useMemo } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = useCallback((product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }, [])

  const clearCart = useCallback(() => setCart([]), [])

  const value = useMemo(
    () => ({ cart, addItem, removeItem, clearCart }),
    [cart, addItem, removeItem, clearCart]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
