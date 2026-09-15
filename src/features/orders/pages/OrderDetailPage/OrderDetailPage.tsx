import { useParams } from 'react-router-dom'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import OrderItemsList from '../../components/OrderItemsList/OrderItemsList'
import ReorderButton from '../../components/ReorderButton/ReorderButton'
import { useOrder } from '../../hooks/useOrder'
import { formatOrderDate } from '../../utils/formatOrderDate'
import { orderStatusKey } from '../../utils/orderStatusKey'
import styles from './OrderDetailPage.module.css'

function OrderDetailPage() {
  const { orderId = '' } = useParams()
  const { order, loading, error } = useOrder(orderId)
  const { language, t } = useLanguage()
  const locale =
    language === 'es' ? 'es-AR' : 'en-US'

  if (loading) {
    return (
      <p className={styles.state}>
        {t('products.loading')}
      </p>
    )
  }

  if (error) {
    return (
      <p className={styles.state}>
        {t('products.error')}
      </p>
    )
  }

  if (!order) {
    return (
      <p className={styles.state}>
        {t('orders.notFound')}
      </p>
    )
  }

  return (
    <section className={styles.page}>
      <header>
        <span>{t(orderStatusKey(order.status))}</span>
        <h1>
          {t('orders.order')}
          {' #'}
          {order.id.slice(-8).toUpperCase()}
        </h1>
        <p>{formatOrderDate(order.createdAt, locale)}</p>
      </header>

      <OrderItemsList
        items={order.items}
        locale={locale}
      />

      <div className={styles.total}>
        <span>{t('orders.total')}</span>
        <strong>
          {formatCurrency(order.total, locale)}
        </strong>
      </div>

      <ReorderButton items={order.items} />

      <LinkButton
        to="/orders"
        className={styles.back}
      >
        {t('orders.back')}
      </LinkButton>
    </section>
  )
}

export default OrderDetailPage
