import api from './api'

export const restaurantsService = {
  getByFoodCourt(foodCourtId) {
    return api.get('/restaurants', { params: { food_court: foodCourtId } })
  },
  getProducts(restaurantId) {
    return api.get(`/restaurants/${restaurantId}/products`)
  },
}
