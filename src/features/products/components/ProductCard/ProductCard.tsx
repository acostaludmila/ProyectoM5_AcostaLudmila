import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../../utils/formatCurrency'
import FavoriteButton from '../../../favorites/components/FavoriteButton/FavoriteButton'
import type {
  RatingSummary,
} from '../../../reviews/types/review.types'
import type { Product } from '../../types/product.types'
import styles from './ProductCard.module.css'

interface Props {
  product: Product
  locale: string
  rating?: RatingSummary
}

function ProductCard({
  product,
  locale,
  rating,
}: Props) {
  const image = product.images[0]

  return (
    <article className={styles.card}>
      <div className={styles.favorite}>
        <FavoriteButton productId={product.id} compact />
      </div>

      <Link
        to={'/products/' + product.id}
        className={styles.link}
      >
        <div className={styles.imageWrapper}>
          {image && (
            <img
              src={image}
              alt={product.name}
              className={styles.image}
            />
          )}
        </div>

        <div className={styles.content}>
          <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>

          <div className={styles.meta}>
            <strong>
              {formatCurrency(product.price, locale)}
            </strong>
            {rating && rating.count > 0 && (
              <span className={styles.rating}>
                ★ {rating.average.toFixed(1)}
                {' '}({rating.count})
              </span>
            )}
          </div>
        </div>
      </Link>
    </article>
  )
}

export default ProductCard
