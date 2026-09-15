function requireEnv(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`)
  }

  return value
}

export const env = {
  firebaseApiKey: requireEnv(
    'VITE_FIREBASE_API_KEY',
    import.meta.env.VITE_FIREBASE_API_KEY,
  ),
  firebaseAuthDomain: requireEnv(
    'VITE_FIREBASE_AUTH_DOMAIN',
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  ),
  firebaseProjectId: requireEnv(
    'VITE_FIREBASE_PROJECT_ID',
    import.meta.env.VITE_FIREBASE_PROJECT_ID,
  ),
  firebaseStorageBucket: requireEnv(
    'VITE_FIREBASE_STORAGE_BUCKET',
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  ),
  firebaseMessagingSenderId: requireEnv(
    'VITE_FIREBASE_MESSAGING_SENDER_ID',
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  ),
  firebaseAppId: requireEnv(
    'VITE_FIREBASE_APP_ID',
    import.meta.env.VITE_FIREBASE_APP_ID,
  ),
}
