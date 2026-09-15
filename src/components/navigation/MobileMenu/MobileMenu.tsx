import NavLinks from '../NavLinks/NavLinks'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  if (!isOpen) return null

  return (
    <div className={styles.overlay}>
      <nav
        className={styles.menu}
        aria-label="Mobile navigation"
      >
        <div className={styles.links}>
          <NavLinks onNavigate={onClose} />
        </div>
      </nav>
    </div>
  )
}

export default MobileMenu
