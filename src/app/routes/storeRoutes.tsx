
import type { RouteObject } from 'react-router-dom'
import CartPage from '../../features/cart/pages/CartPage/CartPage'
import ProductDetailPage from '../../features/products/pages/ProductDetailPage/ProductDetailPage'
import AboutPage from '../../pages/AboutPage/AboutPage'
import CollectionsPage from '../../pages/CollectionsPage/CollectionsPage'
import HomePage from '../../pages/HomePage/HomePage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import UnauthorizedPage from '../../pages/UnauthorizedPage/UnauthorizedPage'

export const storeRoutes: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'collections', element: <CollectionsPage /> },
  { path: 'products/:productId', element: <ProductDetailPage /> },
  { path: 'cart', element: <CartPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'unauthorized', element: <UnauthorizedPage /> },
  { path: '*', element: <NotFoundPage /> },
]
