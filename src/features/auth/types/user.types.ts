
import type { DateValue } from '../../../types/date.types'

export type UserRole = 'customer' | 'admin'

export interface UserProfile {
  uid: string
  email: string
  displayName: string
  photoURL: string
  role: UserRole
  createdAt: DateValue
  updatedAt: DateValue
}
