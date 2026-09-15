import type { PropsWithChildren } from 'react'
import { AuthProvider } from '../features/auth/context/AuthProvider'
import { LanguageProvider } from '../features/language/context/LanguageProvider'
import { ThemeProvider } from '../features/theme/context/ThemeProvider'

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export { AppProviders }
