import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import AdminOrderCard from '../../components/AdminOrderCard/AdminOrderCard'
import { useAdminOrders } from '../../hooks/useAdminOrders'
import styles from '../../styles/AdminOrders.module.css'

function AdminOrdersPage() {
  const { t } = useLanguage()
  const { orders, loading, error } = useAdminOrders()

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <span>{t('admin.dashboard.eyebrow')}</span>
          <h1>{t('admin.orders.title')}</h1>
        </div>
        <div className={styles.actions}>
          <LinkButton to="/admin">
            {t('admin.dashboard.back')}
          </LinkButton>
          <LinkButton to="/admin/products">
            {t('admin.dashboard.products')}
          </LinkButton>
        </div>
      </header>

      {loading && <p>{t('common.loading')}</p>}
      {error && <p className={styles.error}>{t('admin.orders.error')}</p>}
      {!loading && !error && orders.length === 0 && (
        <p>{t('admin.orders.empty')}</p>
      )}
      <div className={styles.list}>
        {orders.map((order) => (
          <AdminOrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  )
}

export default AdminOrdersPage
