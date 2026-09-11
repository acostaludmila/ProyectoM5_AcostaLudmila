import { useLayoutEffect, useState, type ReactNode } from 'react'
import { getStoredTheme } from '../services/getStoredTheme'
import { saveTheme } from '../services/saveTheme'
import type { Theme } from '../types/theme.types'
import { ThemeContext } from './ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getStoredTheme)

  // Persistencia y sincronización visual
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    saveTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
