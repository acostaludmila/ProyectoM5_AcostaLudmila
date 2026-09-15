import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import AnalyticsGrid from '../../components/AnalyticsGrid/AnalyticsGrid'
import { useAdminOrders } from '../../hooks/useAdminOrders'
import { getOrderAnalytics } from '../../utils/orderAnalytics'
import styles from '../../styles/AdminOrders.module.css'

function AdminDashboardPage() {
  const { t } = useLanguage()
  const { orders, loading, error } = useAdminOrders()
  const analytics = getOrderAnalytics(orders)

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <div>
          <span>{t('admin.dashboard.eyebrow')}</span>
          <h1>{t('admin.dashboard.title')}</h1>
        </div>
        <div className={styles.actions}>
          <LinkButton to="/admin/products">
            {t('admin.dashboard.products')}
          </LinkButton>
          <LinkButton to="/admin/orders">
            {t('admin.dashboard.orders')}
          </LinkButton>
        </div>
      </header>

      {loading && <p>{t('common.loading')}</p>}
      {error && <p className={styles.error}>{t('admin.orders.error')}</p>}
      {!loading && !error && <AnalyticsGrid analytics={analytics} />}
    </section>
  )
}

export default AdminDashboardPage
