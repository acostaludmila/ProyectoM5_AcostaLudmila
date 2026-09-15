import { Link } from 'react-router-dom'
import { useAuth } from '../../../auth/hooks/useAuth'
import { useLanguage } from '../../../language/hooks/useLanguage'
import OrderCard from '../../components/OrderCard/OrderCard'
import { useOrders } from '../../hooks/useOrders'
import styles from './OrdersPage.module.css'

function OrdersPage() {
  const { user } = useAuth()
  const { t } = useLanguage()
  const { orders, loading, error } = useOrders(user?.uid ?? '')

  return (
    <section className={styles.page}>
      <header>
        <span>AURELLE</span>
        <h1>{t('orders.title')}</h1>
      </header>

      {loading ? (
        <p className={styles.state}>{t('products.loading')}</p>
      ) : error ? (
        <p className={styles.state}>{t('products.error')}</p>
      ) : orders.length === 0 ? (
        <div className={styles.empty}>
          <p>{t('orders.empty')}</p>
          <Link to="/collections">{t('cart.continue')}</Link>
        </div>
      ) : (
        <div>
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </section>
  )
}

export default OrdersPage
