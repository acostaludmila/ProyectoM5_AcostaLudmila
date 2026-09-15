
import type { RouteObject } from 'react-router-dom'
import LoginPage from '../../features/auth/pages/LoginPage/LoginPage'
import RegisterPage from '../../features/auth/pages/RegisterPage/RegisterPage'

export const authRoutes: RouteObject[] = [
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]
