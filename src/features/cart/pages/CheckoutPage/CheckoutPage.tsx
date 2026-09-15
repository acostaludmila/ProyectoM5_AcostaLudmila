import { Link } from 'react-router-dom'
import Button from '../../../../components/ui/Button/Button'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import CheckoutProcessing from '../../../orders/components/CheckoutProcessing/CheckoutProcessing'
import { usePlaceOrder } from '../../../orders/hooks/usePlaceOrder'
import CartSummary from '../../components/CartSummary/CartSummary'
import { useCart } from '../../hooks/useCart'
import styles from './CheckoutPage.module.css'

function CheckoutPage() {
  const { items } = useCart()
  const { language, t } = useLanguage()
  const { stage, placing, error, placeOrder } = usePlaceOrder()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  if (items.length === 0) {
    return (
      <section className={styles.empty}>
        <p>{t('cart.empty')}</p>
        <LinkButton to="/collections">{t('cart.continue')}</LinkButton>
      </section>
    )
  }

  const errorKey = error === 'stock'
    ? 'checkout.stockError'
    : error === 'payment'
      ? 'checkout.paymentError'
      : 'checkout.error'

  return (
    <section className={styles.page}>
      <header>
        <span>AURELLE</span>
        <h1>{t('checkout.title')}</h1>
      </header>

      <div className={styles.layout}>
        <div className={styles.items}>
          <h2>{t('checkout.summary')}</h2>
          {items.map((item) => (
            <article key={item.key}>
              <div>
                <strong>{item.name}</strong>
                <span>{item.color} · {item.size} · ×{item.quantity}</span>
              </div>
              <strong>
                {formatCurrency(item.price * item.quantity, locale)}
              </strong>
            </article>
          ))}
        </div>

        <div className={styles.side}>
          <CartSummary />
          <p>{t('checkout.notice')}</p>
          {error && <p className={styles.error}>{t(errorKey)}</p>}
          <Button disabled={placing} onClick={() => void placeOrder()}>
            {placing ? t('checkout.placing') : t('checkout.placeOrder')}
          </Button>
          <Link to="/cart">{t('checkout.back')}</Link>
        </div>
      </div>

      {stage !== 'idle' && <CheckoutProcessing stage={stage} />}
    </section>
  )
}

export default CheckoutPage
