import type { Language } from '../types/language.types'
import { LANGUAGE_STORAGE_KEY } from './getStoredLanguage'

export function saveLanguage(language: Language) {
  localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
}
