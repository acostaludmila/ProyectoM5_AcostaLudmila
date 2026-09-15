import {
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { auth } from '../../../config/firebase'
import { createUserProfile } from './createUserProfile'

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account' })

  const credential = await signInWithPopup(auth, provider)
  await createUserProfile(credential.user)

  return credential.user
}
