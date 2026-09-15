import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useCart } from '../../hooks/useCart'
import styles from './CartSummary.module.css'

interface CartSummaryProps {
  checkoutHref?: string
}

function CartSummary({ checkoutHref }: CartSummaryProps) {
  const { totalPrice } = useCart()
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <aside className={styles.summary}>
      <div>
        <span>{t('cart.subtotal')}</span>
        <strong>{formatCurrency(totalPrice, locale)}</strong>
      </div>

      {checkoutHref && (
        <Link to={checkoutHref}>
          {t('cart.checkout')}
        </Link>
      )}
    </aside>
  )
}

export default CartSummary
