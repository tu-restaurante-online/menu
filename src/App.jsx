import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { MenuProvider } from './context/MenuContext'
import { TableProvider } from './context/TableContext'
import { ThemeProvider } from './context/ThemeContext'
import FoodCourtsPage from './pages/FoodCourtsPage'
import FoodCourtPage from './pages/FoodCourtPage'
import RestaurantMenuPage from './pages/RestaurantMenuPage'
import DemoFoodCourtPage from './demo/plaza-verde/DemoFoodCourtPage'
import DemoRestaurantPage from './demo/plaza-verde/DemoRestaurantPage'

/**
 * TableProvider needs useSearchParams which requires being inside BrowserRouter,
 * so it lives inside the router tree via a wrapper component.
 */
function AppRoutes() {
  return (
    <TableProvider>
      <MenuProvider>
        <Routes>
          <Route path="/menus" element={<FoodCourtsPage />} />
          <Route path="/menus/:slug" element={<FoodCourtPage />} />
          <Route path="/menus/:slug/:restaurant" element={<RestaurantMenuPage />} />

          {/* ── Demo: Plaza Verde ───────────────────────────────────── */}
          <Route path="/demo/plaza-verde" element={<DemoFoodCourtPage />} />
          <Route path="/demo/plaza-verde/:restaurant" element={<DemoRestaurantPage />} />

          <Route path="*" element={<Navigate to="/menus" replace />} />
        </Routes>
      </MenuProvider>
    </TableProvider>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <CartProvider>
          <AppRoutes />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
