import {
  doc,
  onSnapshot,
  type FirestoreError,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'
import type { UserProfile } from '../types/auth.types'

type ProfileListener = (profile: UserProfile | null) => void
type ErrorListener = (error: FirestoreError) => void

export function subscribeToUserProfile(
  userId: string,
  onChange: ProfileListener,
  onError: ErrorListener,
) {
  const userRef = doc(db, 'users', userId)

  return onSnapshot(
    userRef,
    (snapshot) => {
      const profile = snapshot.exists()
        ? (snapshot.data() as UserProfile)
        : null

      onChange(profile)
    },
    onError,
  )
}
