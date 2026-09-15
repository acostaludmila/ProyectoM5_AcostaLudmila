import { useCallback, useState } from 'react'
import {
  getAuthErrorKey,
  type AuthErrorKey,
} from '../utils/authErrors'

export function useAuthAction() {
  const [loading, setLoading] = useState(false)
  const [errorKey, setErrorKey] = useState<AuthErrorKey | null>(null)

  const run = useCallback(async (action: () => Promise<unknown>) => {
    setLoading(true)
    setErrorKey(null)

    try {
      await action()
      return true
    } catch (error) {
      setErrorKey(getAuthErrorKey(error))
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  const clearError = useCallback(() => {
    setErrorKey(null)
  }, [])

  return {
    loading,
    errorKey,
    run,
    clearError,
  }
}
