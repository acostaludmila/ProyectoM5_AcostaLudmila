import { useState, type FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../../../../components/ui/Button/Button'
import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../../utils/formatCurrency'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import type { OrderStatus } from '../../../../orders/types/order.types'
import { useAdminOrder } from '../../hooks/useAdminOrder'
import { updateAdminOrderStatus } from '../../services/updateAdminOrderStatus'
import { ORDER_STATUSES } from '../../constants/orderStatuses'
import { orderStatusLabel } from '../../utils/orderStatusLabel'
import commonStyles from '../../styles/AdminOrders.module.css'
import styles from './AdminOrderDetailPage.module.css'

function AdminOrderDetailPage() {
  const { orderId = '' } = useParams()
  const { language, t } = useLanguage()
  const { order, loading, error, reload } = useAdminOrder(orderId)
  const [saving, setSaving] = useState(false)
  const locale = language === 'es' ? 'es-AR' : 'en-US'
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!order) return
    const status = new FormData(event.currentTarget).get('status') as OrderStatus
    setSaving(true)
    try {
      await updateAdminOrderStatus(order.id, status)
      reload()
    } finally {
      setSaving(false)
    }
  }
  if (loading) return <section className={commonStyles.page}>{t('common.loading')}</section>
  if (error || !order) {
    return <section className={commonStyles.page}>{t('admin.orders.error')}</section>
  }
  return (
    <section className={commonStyles.page}>
      <header className={commonStyles.header}>
        <div><span>#{order.id}</span><h1>{t('admin.orders.detailTitle')}</h1></div>
        <LinkButton to="/admin/orders">{t('admin.orders.backToOrders')}</LinkButton>
      </header>
      <div className={styles.detail}>
        <div className={styles.panel}>
          <span>{t('admin.orders.customer')}</span>
          <strong>{order.customerName}</strong>
          <span>{order.customerEmail}</span>
        </div>
        <div className={styles.panel}>
          <span>{t('admin.orders.total')}</span>
          <strong>{formatCurrency(order.total, locale)}</strong>
        </div>
      </div>
      <form className={styles.statusForm} onSubmit={(event) => void submit(event)}>
        <select name="status" defaultValue={order.status}>
          {ORDER_STATUSES.map((status) => (
            <option key={status} value={status}>
              {orderStatusLabel(status, language)}
            </option>
          ))}
        </select>
        <Button type="submit" disabled={saving}>
          {t(saving ? 'admin.orders.saving' : 'admin.orders.update')}
        </Button>
      </form>
      <h2>{t('admin.orders.items')}</h2>
      <div className={styles.items}>
        {order.items.map((item) => (
          <div className={styles.item} key={`${item.productId}-${item.color}-${item.size}`}>
            <span>{item.name} · {item.color} · {item.size} · ×{item.quantity}</span>
            <strong>{formatCurrency(item.price * item.quantity, locale)}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
export default AdminOrderDetailPage
