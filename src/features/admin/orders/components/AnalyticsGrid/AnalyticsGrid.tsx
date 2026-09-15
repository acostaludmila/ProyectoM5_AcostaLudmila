import { formatCurrency } from '../../../../../utils/formatCurrency'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import { ORDER_STATUSES } from '../../constants/orderStatuses'
import type { OrderAnalytics } from '../../types/adminOrder.types'
import { orderStatusLabel } from '../../utils/orderStatusLabel'
import styles from './AnalyticsGrid.module.css'

interface Props {
  analytics: OrderAnalytics
}

function AnalyticsGrid({ analytics }: Props) {
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'
  const cards = [
    [t('admin.analytics.orders'), String(analytics.orderCount)],
    [
      t('admin.analytics.revenue'),
      formatCurrency(analytics.revenue, locale),
    ],
    [t('admin.analytics.units'), String(analytics.unitsSold)],
    [
      t('admin.analytics.average'),
      formatCurrency(analytics.averageOrderValue, locale),
    ],
    [
      t('admin.analytics.topProduct'),
      analytics.topProduct || t('admin.analytics.noSales'),
    ],
  ]

  return (
    <>
      <div className={styles.grid}>
        {cards.map(([label, value]) => (
          <article className={styles.card} key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </div>
      <div className={styles.statuses}>
        {ORDER_STATUSES.map((status) => (
          <article className={styles.status} key={status}>
            <span>{orderStatusLabel(status, language)}</span>
            <strong>{analytics.statusCounts[status]}</strong>
          </article>
        ))}
      </div>
    </>
  )
}

export default AnalyticsGrid
