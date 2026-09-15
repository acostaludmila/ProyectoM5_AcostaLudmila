
import { createBrowserRouter } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import MainLayout from '../layouts/MainLayout/MainLayout'
import { accountRoutes } from './routes/accountRoutes'
import { adminRoutes } from './routes/adminRoutes'
import { authRoutes } from './routes/authRoutes'
import { storeRoutes } from './routes/storeRoutes'

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: authRoutes,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      ...storeRoutes,
      ...accountRoutes,
      ...adminRoutes,
    ],
  },
])
