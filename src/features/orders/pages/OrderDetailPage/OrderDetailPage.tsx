import { useParams } from 'react-router-dom'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import type { TranslationKey } from '../../../language/types/language.types'
import { useOrder } from '../../hooks/useOrder'
import type { OrderStatus } from '../../types/order.types'
import { formatOrderDate } from '../../utils/formatOrderDate'
import styles from './OrderDetailPage.module.css'

const statusKeys: Record<OrderStatus, TranslationKey> = {
  pending: 'orders.status.pending',
  paid: 'orders.status.paid',
  processing: 'orders.status.processing',
  shipped: 'orders.status.shipped',
  delivered: 'orders.status.delivered',
  cancelled: 'orders.status.cancelled',
}

function OrderDetailPage() {
  const { orderId = '' } = useParams()
  const { order, loading, error } = useOrder(orderId)
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  if (loading) {
    return <p className={styles.state}>{t('products.loading')}</p>
  }

  if (error) {
    return <p className={styles.state}>{t('products.error')}</p>
  }

  if (!order) {
    return <p className={styles.state}>{t('orders.notFound')}</p>
  }

  return (
    <section className={styles.page}>
      <header>
        <span>{t(statusKeys[order.status])}</span>
        <h1>{t('orders.order')} #{order.id.slice(-8).toUpperCase()}</h1>
        <p>{formatOrderDate(order.createdAt, locale)}</p>
      </header>

      <div className={styles.items}>
        {order.items.map((item) => (
          <article key={`${item.productId}:${item.color}:${item.size}`}>
            {item.image && <img src={item.image} alt={item.name} />}
            <div>
              <strong>{item.name}</strong>
              <span>
                {item.color} · {item.size} · ×{item.quantity}
              </span>
            </div>
            <strong>
              {formatCurrency(item.price * item.quantity, locale)}
            </strong>
          </article>
        ))}
      </div>

      <div className={styles.total}>
        <span>{t('orders.total')}</span>
        <strong>{formatCurrency(order.total, locale)}</strong>
      </div>

      <LinkButton to="/orders" className={styles.back}>
        {t('orders.back')}
      </LinkButton>
    </section>
  )
}

export default OrderDetailPage
