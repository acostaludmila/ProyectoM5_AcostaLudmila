export type Language = 'en' | 'es'

export type TranslationKey =
  | 'nav.home'
  | 'nav.collections'
  | 'nav.about'
  | 'navigation.menu'
  | 'navigation.close'
  | 'language.label'
  | 'theme.light'
  | 'theme.dark'
  | 'theme.switchTo'
  | 'footer.tagline'
  | 'home.tagline'
  | 'home.description'
  | 'home.cta'
  | 'collections.eyebrow'
  | 'collections.title'
  | 'collections.clothing.name'
  | 'collections.clothing.description'
  | 'collections.jewelry.name'
  | 'collections.jewelry.description'
  | 'collections.essentials.name'
  | 'collections.essentials.description'
  | 'about.eyebrow'
  | 'about.title'
  | 'about.paragraphOne'
  | 'about.paragraphTwo'
  | 'notFound.title'
  | 'notFound.description'
  | 'notFound.returnHome'

export interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: TranslationKey) => string
}
