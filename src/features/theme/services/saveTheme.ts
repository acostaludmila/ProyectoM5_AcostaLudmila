import { THEME_STORAGE_KEY } from './getStoredTheme'
import type { Theme } from '../types/theme.types'

export function saveTheme(theme: Theme) {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}
