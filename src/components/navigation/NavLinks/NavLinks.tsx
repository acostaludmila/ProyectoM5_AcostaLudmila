import { NavLink } from 'react-router-dom'
import AuthNavAction from '../../../features/auth/components/AuthNavAction/AuthNavAction'
import { useAuth } from '../../../features/auth/hooks/useAuth'
import { useLanguage } from '../../../features/language/hooks/useLanguage'
import { navItems } from '../navItems'
import styles from './NavLinks.module.css'

interface NavLinksProps {
  onNavigate?: () => void
}

function NavLinks({ onNavigate }: NavLinksProps) {
  const { isAuthenticated } = useAuth()
  const { t } = useLanguage()

  return (
    <>
      {navItems.map(({ labelKey, to }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
          onClick={onNavigate}
        >
          {t(labelKey)}
        </NavLink>
      ))}

      {isAuthenticated && (
        <NavLink
          to="/orders"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
          onClick={onNavigate}
        >
          {t('orders.nav')}
        </NavLink>
      )}

      <AuthNavAction onNavigate={onNavigate} />
    </>
  )
}

export default NavLinks
