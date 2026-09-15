import type { ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'
import CheckoutPage from '../../features/cart/pages/CheckoutPage/CheckoutPage'
import FavoritesPage from '../../features/favorites/pages/FavoritesPage/FavoritesPage'
import OrderDetailPage from '../../features/orders/pages/OrderDetailPage/OrderDetailPage'
import OrdersPage from '../../features/orders/pages/OrdersPage/OrdersPage'
import ProtectedRoute from '../../routes/ProtectedRoute'

const protect = (element: ReactNode) => (
  <ProtectedRoute>{element}</ProtectedRoute>
)

export const accountRoutes: RouteObject[] = [
  {
    path: 'checkout',
    element: protect(<CheckoutPage />),
  },
  {
    path: 'orders',
    element: protect(<OrdersPage />),
  },
  {
    path: 'orders/:orderId',
    element: protect(<OrderDetailPage />),
  },
  {
    path: 'favorites',
    element: protect(<FavoritesPage />),
  },
]
