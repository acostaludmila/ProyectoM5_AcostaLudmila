import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../../utils/formatCurrency'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import type { AdminOrder } from '../../types/adminOrder.types'
import { orderStatusLabel } from '../../utils/orderStatusLabel'
import styles from './AdminOrderCard.module.css'

interface Props {
  order: AdminOrder
}

function AdminOrderCard({ order }: Props) {
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'
  const date = order.createdAt
    ? order.createdAt.toDate().toLocaleDateString(locale)
    : '—'

  return (
    <article className={styles.card}>
      <div className={styles.main}>
        <span className={styles.id}>#{order.id.slice(0, 8)}</span>
        <strong>{order.customerName}</strong>
        <span>{order.customerEmail}</span>
      </div>
      <div className={styles.meta}>
        <span>{date}</span>
        <span>{orderStatusLabel(order.status, language)}</span>
        <strong>{formatCurrency(order.total, locale)}</strong>
      </div>
      <LinkButton to={`/admin/orders/${order.id}`}>
        {t('admin.orders.view')}
      </LinkButton>
    </article>
  )
}

export default AdminOrderCard
