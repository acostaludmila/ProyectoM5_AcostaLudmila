import { Link } from 'react-router-dom'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useCart } from '../../hooks/useCart'
import styles from './CartNavAction.module.css'

function CartNavAction() {
  const { totalItems } = useCart()
  const { t } = useLanguage()

  return (
    <Link
      to="/cart"
      className={styles.cart}
      aria-label={t('cart.title')}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 8h12l-1 11H7L6 8Z" />
        <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      </svg>

      {totalItems > 0 && (
        <span className={styles.badge}>{totalItems}</span>
      )}
    </Link>
  )
}

export default CartNavAction
