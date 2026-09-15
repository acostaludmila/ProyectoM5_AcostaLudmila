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
  const { isAuthenticated, isAdmin } = useAuth()
  const { t } = useLanguage()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles.link} ${isActive ? styles.active : ''}`

  return (
    <>
      {navItems.map(({ labelKey, to }) => (
        <NavLink key={to} to={to}
          className={linkClass} onClick={onNavigate}>
          {t(labelKey)}
        </NavLink>
      ))}

      {isAuthenticated && (
        <NavLink to="/orders"
          className={linkClass} onClick={onNavigate}>
          {t('orders.nav')}
        </NavLink>
      )}

      {isAdmin && (
        <NavLink to="/admin"
          className={linkClass} onClick={onNavigate}>
          {t('admin.products.nav')}
        </NavLink>
      )}

      <AuthNavAction onNavigate={onNavigate} />
    </>
  )
}

export default NavLinks
