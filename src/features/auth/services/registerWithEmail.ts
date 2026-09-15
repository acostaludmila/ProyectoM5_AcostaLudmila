import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { auth } from '../../../config/firebase'
import type { RegisterCredentials } from '../types/auth.types'
import { createUserProfile } from './createUserProfile'

export async function registerWithEmail({
  displayName,
  email,
  password,
}: RegisterCredentials) {
  const credential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  )

  await updateProfile(credential.user, { displayName })
  await createUserProfile(credential.user)

  return credential.user
}
