import { Link } from 'react-router-dom'
import { useLanguage } from '../../../language/hooks/useLanguage'
import CartItemCard from '../../components/CartItemCard/CartItemCard'
import CartSummary from '../../components/CartSummary/CartSummary'
import { useCart } from '../../hooks/useCart'
import styles from './CartPage.module.css'

function CartPage() {
  const { items } = useCart()
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <section className={styles.page}>
      <header>
        <span>AURELLE</span>
        <h1>{t('cart.title')}</h1>
      </header>

      {items.length === 0 ? (
        <div className={styles.empty}>
          <p>{t('cart.empty')}</p>
          <Link to="/collections">
            {t('cart.continue')}
          </Link>
        </div>
      ) : (
        <div className={styles.layout}>
          <div>
            {items.map((item) => (
              <CartItemCard
                key={item.key}
                item={item}
                locale={locale}
              />
            ))}
          </div>

          <CartSummary checkoutHref="/checkout" />
        </div>
      )}
    </section>
  )
}

export default CartPage
