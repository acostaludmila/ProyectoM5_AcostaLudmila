import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../../features/language/hooks/useLanguage'
import { navItems } from '../navItems'
import styles from './NavLinks.module.css'

interface NavLinksProps {
  onNavigate?: () => void
}

function NavLinks({ onNavigate }: NavLinksProps) {
  const { t } = useLanguage()

  return (
    <>
      {navItems.map(({ labelKey, to }) => (
        <NavLink
          key={to}
          to={to}
          onClick={onNavigate}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          {t(labelKey)}
        </NavLink>
      ))}
    </>
  )
}

export default NavLinks
