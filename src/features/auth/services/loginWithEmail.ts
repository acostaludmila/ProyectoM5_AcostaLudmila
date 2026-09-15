import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../config/firebase'
import type { LoginCredentials } from '../types/auth.types'
import { createUserProfile } from './createUserProfile'

export async function loginWithEmail({
  email,
  password,
}: LoginCredentials) {
  const credential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  )

  await createUserProfile(credential.user)

  return credential.user
}
