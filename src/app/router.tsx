import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../features/auth/pages/LoginPage/LoginPage'
import RegisterPage from '../features/auth/pages/RegisterPage/RegisterPage'
import CartPage from '../features/cart/pages/CartPage/CartPage'
import CheckoutPage from '../features/cart/pages/CheckoutPage/CheckoutPage'
import ProductDetailPage from '../features/products/pages/ProductDetailPage/ProductDetailPage'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import AboutPage from '../pages/AboutPage/AboutPage'
import CollectionsPage from '../pages/CollectionsPage/CollectionsPage'
import HomePage from '../pages/HomePage/HomePage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import UnauthorizedPage from '../pages/UnauthorizedPage/UnauthorizedPage'

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
      { path: 'checkout', element: <CheckoutPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'unauthorized', element: <UnauthorizedPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
