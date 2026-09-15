import LinkButton from '../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import type { Order } from '../../types/order.types'
import { formatOrderDate } from '../../utils/formatOrderDate'
import { orderStatusKey } from '../../utils/orderStatusKey'
import ReorderButton from '../ReorderButton/ReorderButton'
import styles from './OrderCard.module.css'

interface Props {
  order: Order
}

function OrderCard({ order }: Props) {
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <article className={styles.card}>
      <div className={styles.info}>
        <span className={styles.id}>
          {t('orders.order')}
          {' #'}
          {order.id.slice(-8).toUpperCase()}
        </span>
        <p>{formatOrderDate(order.createdAt, locale)}</p>
      </div>

      <span className={styles.status}>
        {t(orderStatusKey(order.status))}
      </span>

      <strong className={styles.total}>
        {formatCurrency(order.total, locale)}
      </strong>

      <div className={styles.actions}>
        <LinkButton
          to={'/orders/' + order.id}
          className={styles.action}
        >
          {t('orders.view')}
        </LinkButton>
        <ReorderButton items={order.items} />
      </div>
    </article>
  )
}

export default OrderCard
