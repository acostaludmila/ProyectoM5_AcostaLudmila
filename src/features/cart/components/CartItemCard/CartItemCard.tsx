import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useCart } from '../../hooks/useCart'
import type { CartItem } from '../../types/cart.types'
import styles from './CartItemCard.module.css'

interface CartItemCardProps {
  item: CartItem
  locale: string
}

function CartItemCard({ item, locale }: CartItemCardProps) {
  const { increment, decrement, removeItem } = useCart()
  const { t } = useLanguage()

  return (
    <article className={styles.item}>
      <div className={styles.image}>
        {item.image && <img src={item.image} alt={item.name} />}
      </div>

      <div className={styles.info}>
        <div>
          <h2>{item.name}</h2>
          <p>{item.color} · {item.size}</p>
        </div>

        <strong>
          {formatCurrency(item.price * item.quantity, locale)}
        </strong>

        <div className={styles.actions}>
          <button
            type="button"
            aria-label={t('cart.decrease')}
            onClick={() => decrement(item.key)}
          >
            −
          </button>
          <span>{item.quantity}</span>
          <button
            type="button"
            aria-label={t('cart.increase')}
            disabled={item.quantity >= item.stock}
            onClick={() => increment(item.key)}
          >
            +
          </button>

          <button
            type="button"
            className={styles.remove}
            onClick={() => removeItem(item.key)}
          >
            {t('cart.remove')}
          </button>
        </div>
      </div>
    </article>
  )
}

export default CartItemCard
