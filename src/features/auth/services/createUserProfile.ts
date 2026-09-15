import type { User } from 'firebase/auth'
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'

export async function createUserProfile(user: User) {
  const userRef = doc(db, 'users', user.uid)
  const snapshot = await getDoc(userRef)

  if (snapshot.exists()) {
    return
  }

  await setDoc(userRef, {
    uid: user.uid,
    email: user.email ?? '',
    displayName: user.displayName ?? '',
    photoURL: user.photoURL ?? '',
    role: 'customer',
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}
