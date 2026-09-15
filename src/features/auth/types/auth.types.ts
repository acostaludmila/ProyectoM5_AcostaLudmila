import type { Timestamp } from 'firebase/firestore'

export type UserRole = 'customer' | 'admin'

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL: string
  role: UserRole
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials extends LoginCredentials {
  displayName: string
}
