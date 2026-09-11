import type { ReactNode } from 'react'
import { LanguageProvider } from '../features/language/context/LanguageProvider'
import { ThemeProvider } from '../features/theme/context/ThemeProvider'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
