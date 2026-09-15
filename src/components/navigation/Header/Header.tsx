import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../features/auth/hooks/useAuth'
import CartNavAction from '../../../features/cart/components/CartNavAction/CartNavAction'
import { useLanguage } from '../../../features/language/hooks/useLanguage'
import HeaderControlButton from '../../ui/HeaderControlButton/HeaderControlButton'
import LanguageSelector from '../../ui/LanguageSelector/LanguageSelector'
import ThemeToggle from '../../ui/ThemeToggle/ThemeToggle'
import MobileMenu from '../MobileMenu/MobileMenu'
import NavLinks from '../NavLinks/NavLinks'
import styles from './Header.module.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isAdmin } = useAuth()
  const { t } = useLanguage()

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.brandGroup}>
          {isAdmin && (
            <Link to="/admin" className={styles.admin}>
              ADMIN
            </Link>
          )}
          <Link to="/" className={styles.brand}>
            AURELLE
          </Link>
        </div>

        <nav aria-label="Primary navigation" className={styles.desktopNav}>
          <NavLinks />
        </nav>

        <div className={styles.actions}>
          <CartNavAction />
          <LanguageSelector />
          <ThemeToggle />

          <HeaderControlButton
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={styles.menuButton}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {t(isMenuOpen ? 'navigation.close' : 'navigation.menu')}
          </HeaderControlButton>
        </div>
      </div>

      <div id="mobile-menu">
        <MobileMenu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </div>
    </header>
  )
}

export default Header
