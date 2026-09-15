import type { User } from 'firebase/auth'
import { createContext } from 'react'
import type { UserProfile } from '../types/auth.types'

export interface AuthContextValue {
  user: User | null
  profile: UserProfile | null
  loading: boolean
  isAuthenticated: boolean
  isAdmin: boolean
}

export const AuthContext =
  createContext<AuthContextValue | undefined>(undefined)
