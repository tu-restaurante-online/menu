import { useState, useEffect, useCallback } from 'react'
import { foodCourtsService } from '../services/foodCourts.service'

export function useFoodCourt(slug) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetch = useCallback(async () => {
    if (!slug) return
    setLoading(true)
    setError(null)
    try {
      const res = await foodCourtsService.getBySlug(slug)
      setData(res.data)
    } catch (err) {
      setError(err?.response?.data?.message || err.message || 'Error al cargar el patio de comida')
    } finally {
      setLoading(false)
    }
  }, [slug])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, loading, error, refetch: fetch }
}
