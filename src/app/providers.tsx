import type { PropsWithChildren } from 'react'
import { AuthProvider } from '../features/auth/context/AuthProvider'
import { CartProvider } from '../features/cart/context/CartProvider'
import { LanguageProvider } from '../features/language/context/LanguageProvider'
import { ThemeProvider } from '../features/theme/context/ThemeProvider'

function AppProviders({ children }: PropsWithChildren) {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export { AppProviders }
