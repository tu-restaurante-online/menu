import api from './api'

export const foodCourtsService = {
  getAll() {
    return api.get('/food-courts')
  },
  getBySlug(slug) {
    return api.get(`/food-courts/${slug}`)
  },
}
