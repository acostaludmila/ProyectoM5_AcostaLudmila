import { useLanguage } from '../../../language/hooks/useLanguage'
import type { CheckoutStage } from '../../hooks/usePlaceOrder'
import styles from './CheckoutProcessing.module.css'

interface Props {
  stage: Exclude<CheckoutStage, 'idle'>
}

function CheckoutProcessing({ stage }: Props) {
  const { t } = useLanguage()
  const payment = stage === 'payment'

  return (
    <div className={styles.overlay} role="status" aria-live="polite">
      <div className={styles.card}>
        <span className={styles.brand}>AURELLE</span>
        <div className={styles.spinner} />
        <h2>
          {t(payment
            ? 'checkout.processingPayment'
            : 'checkout.finalizingOrder')}
        </h2>
        <p>
          {t(payment
            ? 'checkout.processingPaymentDescription'
            : 'checkout.finalizingOrderDescription')}
        </p>
      </div>
    </div>
  )
}

export default CheckoutProcessing
