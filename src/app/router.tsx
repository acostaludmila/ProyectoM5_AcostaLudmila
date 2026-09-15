import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../features/auth/pages/LoginPage/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage/RegisterPage'
import CartPage from '../features/cart/pages/CartPage/CartPage'
import CheckoutPage from '../features/cart/pages/CheckoutPage/CheckoutPage'
import OrderDetailPage from '../features/orders/pages/OrderDetailPage/OrderDetailPage'
import OrdersPage from '../features/orders/pages/OrdersPage/OrdersPage'
import ProductDetailPage from '../features/products/pages/ProductDetailPage/ProductDetailPage'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import AboutPage from '../pages/AboutPage/AboutPage'
import CollectionsPage from '../pages/CollectionsPage/CollectionsPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import UnauthorizedPage from '../pages/UnauthorizedPage/UnauthorizedPage'
import ProtectedRoute from '../routes/ProtectedRoute'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <LoginPage /> },
      { path: '/register', element: <RegisterPage /> },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'collections', element: <CollectionsPage /> },
      { path: 'products/:productId', element: <ProductDetailPage /> },
      { path: 'cart', element: <CartPage /> },
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
      { path: 'about', element: <AboutPage /> },
      { path: 'unauthorized', element: <UnauthorizedPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
