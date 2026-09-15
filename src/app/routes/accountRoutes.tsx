
import type { RouteObject } from 'react-router-dom'
import CheckoutPage from '../../features/cart/pages/CheckoutPage/CheckoutPage'
import OrderDetailPage from '../../features/orders/pages/OrderDetailPage/OrderDetailPage'
import OrdersPage from '../../features/orders/pages/OrdersPage/OrdersPage'
import ProtectedRoute from '../../routes/ProtectedRoute'

export const accountRoutes: RouteObject[] = [
  {
    path: 'checkout',
    element: (
      <ProtectedRoute>
        <CheckoutPage />
      </ProtectedRoute>
    ),
  },
  {
    path: 'orders',
    element: (
      <ProtectedRoute>
        <OrdersPage />
      </ProtectedRoute>
    ),
  },
  {
    path: 'orders/:orderId',
    element: (
      <ProtectedRoute>
        <OrderDetailPage />
      </ProtectedRoute>
    ),
  },
]
