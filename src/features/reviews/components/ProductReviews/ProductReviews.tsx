import { useLanguage } from '../../../language/hooks/useLanguage'
import { useProductReviews } from '../../hooks/useProductReviews'
import { getRatingSummary } from '../../utils/getRatingSummary'
import ReviewEditor from '../ReviewEditor/ReviewEditor'
import ReviewList from '../ReviewList/ReviewList'
import styles from './ProductReviews.module.css'

interface Props {
  productId: string
}

function ProductReviews({ productId }: Props) {
  const { t } = useLanguage()
  const {
    reviews,
    loading,
    reload,
  } = useProductReviews(productId)
  const summary = getRatingSummary(reviews)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{t('reviews.title')}</h2>
        <span className={styles.summary}>
          {summary.count
            ? '★ '
              + summary.average.toFixed(1)
              + ' ('
              + summary.count
              + ')'
            : t('reviews.none')}
        </span>
      </div>

      {loading ? (
        <p>{t('common.loading')}</p>
      ) : (
        <>
          <ReviewEditor
            productId={productId}
            reviews={reviews}
            onSaved={reload}
          />
          <ReviewList reviews={reviews} />
        </>
      )}
    </section>
  )
}

export default ProductReviews
