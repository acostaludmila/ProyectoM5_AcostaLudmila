import LinkButton from '../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import type { TranslationKey } from '../../../language/types/language.types'
import type { Order, OrderStatus } from '../../types/order.types'
import { formatOrderDate } from '../../utils/formatOrderDate'
import styles from './OrderCard.module.css'

const statusKeys: Record<OrderStatus, TranslationKey> = {
  pending: 'orders.status.pending',
  processing: 'orders.status.processing',
  shipped: 'orders.status.shipped',
  delivered: 'orders.status.delivered',
  cancelled: 'orders.status.cancelled',
}

interface OrderCardProps {
  order: Order
}

function OrderCard({ order }: OrderCardProps) {
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <span className={styles.id}>
          {t('orders.order')} #{order.id.slice(-8).toUpperCase()}
        </span>
        <p>{formatOrderDate(order.createdAt, locale)}</p>
      </div>

      <span className={styles.status}>
        {t(statusKeys[order.status])}
      </span>

      <strong className={styles.total}>
        {formatCurrency(order.total, locale)}
      </strong>

      <LinkButton
        to={`/orders/${order.id}`}
        className={styles.action}
      >
        {t('orders.view')}
      </LinkButton>
    </article>
  )
}

export default OrderCard
