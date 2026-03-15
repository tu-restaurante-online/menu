import { useCallback } from 'react'

export function useAuth() {
  const getToken = useCallback(() => localStorage.getItem('menu_token'), [])
  const setToken = useCallback((token) => localStorage.setItem('menu_token', token), [])
  const clearToken = useCallback(() => localStorage.removeItem('menu_token'), [])
  const isAuthenticated = useCallback(() => !!localStorage.getItem('menu_token'), [])

  return { getToken, setToken, clearToken, isAuthenticated }
}
