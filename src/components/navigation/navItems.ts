import type { TranslationKey } from '../../features/language/types/language.types'

export const navItems = [
  { labelKey: 'nav.home', to: '/' },
  { labelKey: 'nav.collections', to: '/collections' },
  { labelKey: 'nav.about', to: '/about' },
] as const satisfies readonly {
  labelKey: TranslationKey
  to: string
}[]
