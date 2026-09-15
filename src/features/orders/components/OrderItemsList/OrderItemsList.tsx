import { formatCurrency } from '../../../../utils/formatCurrency'
import type {
  OrderItem,
} from '../../types/order.types'
import styles from './OrderItemsList.module.css'

interface Props {
  items: OrderItem[]
  locale: string
}

function OrderItemsList({
  items,
  locale,
}: Props) {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <article
          className={styles.item}
          key={[
            item.productId,
            item.color,
            item.size,
          ].join(':')}
        >
          {item.image && (
            <img src={item.image} alt={item.name} />
          )}

          <div className={styles.info}>
            <strong>{item.name}</strong>
            <span>
              {item.color} · {item.size}
              {' · ×'}
              {item.quantity}
            </span>
          </div>

          <strong>
            {formatCurrency(
              item.price * item.quantity,
              locale,
            )}
          </strong>
        </article>
      ))}
    </div>
  )
}

export default OrderItemsList
