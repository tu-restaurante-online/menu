import { useState, useEffect, useCallback } from 'react'
import { restaurantsService } from '../services/restaurants.service'

export function useRestaurantsByFoodCourt(foodCourtId) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    if (!foodCourtId) return
    setLoading(true)
    setError(null)
    try {
      const res = await restaurantsService.getByFoodCourt(foodCourtId)
      setData(res.data)
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Error al cargar restaurantes')
    } finally {
      setLoading(false)
    }
  }, [foodCourtId])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}

export function useRestaurantProducts(restaurantId) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    if (!restaurantId) return
    setLoading(true)
    setError(null)
    try {
      const res = await restaurantsService.getProducts(restaurantId)
      setData(res.data)
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Error al cargar productos')
    } finally {
      setLoading(false)
    }
  }, [restaurantId])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}
