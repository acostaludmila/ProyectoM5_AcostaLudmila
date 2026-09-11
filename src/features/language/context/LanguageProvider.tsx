import { useEffect, useState, type ReactNode } from 'react'
import { getStoredLanguage } from '../services/getStoredLanguage'
import { saveLanguage } from '../services/saveLanguage'
import { en } from '../translations/en'
import { es } from '../translations/es'
import type {
  Language,
  TranslationKey,
} from '../types/language.types'
import { LanguageContext } from './LanguageContext'

interface LanguageProviderProps {
  children: ReactNode
}

const translations = { en, es }

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>(getStoredLanguage)

  // Persistencia y sincronización del idioma
  useEffect(() => {
    document.documentElement.lang = language
    saveLanguage(language)
  }, [language])

  const t = (key: TranslationKey) => translations[language][key]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
