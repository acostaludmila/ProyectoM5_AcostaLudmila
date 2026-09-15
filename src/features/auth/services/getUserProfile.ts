import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import type { UserProfile } from '../types/auth.types'

export async function getUserProfile(
  userId: string,
): Promise<UserProfile | null> {
  const snapshot = await getDoc(doc(db, 'users', userId))

  if (!snapshot.exists()) {
    return null
  }

  return snapshot.data() as UserProfile
}
