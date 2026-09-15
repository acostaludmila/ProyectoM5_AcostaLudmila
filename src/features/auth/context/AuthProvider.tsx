import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useMemo, useState, type PropsWithChildren } from 'react'
import { auth } from '../../../config/firebase'
import { configureAuthPersistence } from '../services/configureAuthPersistence'
import { subscribeToUserProfile } from '../services/subscribeToUserProfile'
import type { UserProfile } from '../types/auth.types'
import { AuthContext } from './AuthContext'

function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState(auth.currentUser)
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let stopAuth: (() => void) | undefined
    let stopProfile: (() => void) | undefined
    let disposed = false

    void configureAuthPersistence()
      .then(() => {
        if (disposed) return

        stopAuth = onAuthStateChanged(auth, (currentUser) => {
          stopProfile?.()
          setUser(currentUser)
          setProfile(null)

          if (!currentUser) {
            setLoading(false)
            return
          }

          setLoading(true)
          stopProfile = subscribeToUserProfile(
            currentUser.uid,
            (nextProfile) => {
              setProfile(nextProfile)
              setLoading(false)
            },
            () => setLoading(false),
          )
        })
      })
      .catch(() => {
        if (!disposed) setLoading(false)
      })

    return () => {
      disposed = true
      stopProfile?.()
      stopAuth?.()
    }
  }, [])

  const value = useMemo(() => ({
    user,
    profile,
    loading,
    isAuthenticated: Boolean(user),
    isAdmin: profile?.role === 'admin',
  }), [user, profile, loading])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
