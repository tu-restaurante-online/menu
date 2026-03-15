import { useState, useEffect, useCallback } from 'react'
import { foodCourtsService } from '../services/foodCourts.service'

export function useFoodCourts() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await foodCourtsService.getAll()
      setData(Array.isArray(res.data) ? res.data : [])
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Error al cargar patios de comida')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}
