
import type { RouteObject } from 'react-router-dom'
import AdminDashboardPage from '../../features/admin/orders/pages/AdminDashboardPage/AdminDashboardPage'
import AdminOrderDetailPage from '../../features/admin/orders/pages/AdminOrderDetailPage/AdminOrderDetailPage'
import AdminOrdersPage from '../../features/admin/orders/pages/AdminOrdersPage/AdminOrdersPage'
import AdminProductFormPage from '../../features/admin/products/pages/AdminProductFormPage/AdminProductFormPage'
import AdminProductsPage from '../../features/admin/products/pages/AdminProductsPage/AdminProductsPage'
import AdminRoute from '../../routes/AdminRoute'

const protect = (element: React.ReactNode) => (
  <AdminRoute>{element}</AdminRoute>
)

export const adminRoutes: RouteObject[] = [
  { path: 'admin', element: protect(<AdminDashboardPage />) },
  { path: 'admin/orders', element: protect(<AdminOrdersPage />) },
  {
    path: 'admin/orders/:orderId',
    element: protect(<AdminOrderDetailPage />),
  },
  {
    path: 'admin/products',
    element: protect(<AdminProductsPage />),
  },
  {
    path: 'admin/products/new',
    element: protect(<AdminProductFormPage />),
  },
  {
    path: 'admin/products/:productId/edit',
    element: protect(<AdminProductFormPage />),
  },
]
