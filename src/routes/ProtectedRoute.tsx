import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../features/auth/hooks/useAuth'

function ProtectedRoute({ children }: PropsWithChildren) {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return null

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
