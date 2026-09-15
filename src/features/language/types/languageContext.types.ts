
import type { Language } from './languageCode.types'
import type { TranslationKey } from './translation.types'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}
