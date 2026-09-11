import type { Language } from '../types/language.types'

export const LANGUAGE_STORAGE_KEY = 'aurelle-language'

export function getStoredLanguage(): Language {
  const storedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)

  return storedLanguage === 'es' ? 'es' : 'en'
}
