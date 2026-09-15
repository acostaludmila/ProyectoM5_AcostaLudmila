import { FirebaseError } from 'firebase/app'

export type AuthErrorKey =
  | 'invalidCredentials'
  | 'emailInUse'
  | 'popupClosed'
  | 'tooManyRequests'
  | 'unknown'

const authErrorMap: Record<string, AuthErrorKey> = {
  'auth/invalid-credential': 'invalidCredentials',
  'auth/user-not-found': 'invalidCredentials',
  'auth/wrong-password': 'invalidCredentials',
  'auth/email-already-in-use': 'emailInUse',
  'auth/popup-closed-by-user': 'popupClosed',
  'auth/cancelled-popup-request': 'popupClosed',
  'auth/too-many-requests': 'tooManyRequests',
}

export function getAuthErrorKey(error: unknown): AuthErrorKey {
  if (!(error instanceof FirebaseError)) {
    return 'unknown'
  }

  return authErrorMap[error.code] ?? 'unknown'
}
