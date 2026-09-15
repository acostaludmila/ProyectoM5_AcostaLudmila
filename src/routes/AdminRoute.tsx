import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../features/auth/hooks/useAuth'

function AdminRoute({ children }: PropsWithChildren) {
  const { isAuthenticated, isAdmin, loading } = useAuth()

  if (loading) return null

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!isAdmin) {
    return <Navigate to="/unauthorized" replace />
  }

  return children
}

export default AdminRoute
