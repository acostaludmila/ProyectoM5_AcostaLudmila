import NavLinks from '../NavLinks/NavLinks'
import styles from './MobileMenu.module.css'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) {
    return null
  }

  return (
    <nav aria-label="Mobile navigation" className={styles.menu}>
      <div className={styles.links}>
        <NavLinks onNavigate={onClose} />
      </div>
    </nav>
  )
}

export default MobileMenu
