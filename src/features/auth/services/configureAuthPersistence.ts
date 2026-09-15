import {
  browserLocalPersistence,
  setPersistence,
} from 'firebase/auth'
import { auth } from '../../../config/firebase'

export function configureAuthPersistence() {
  return setPersistence(auth, browserLocalPersistence)
}
