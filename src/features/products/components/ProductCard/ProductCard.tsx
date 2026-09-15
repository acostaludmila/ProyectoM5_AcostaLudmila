import { Link } from 'react-router-dom'
import { formatCurrency } from '../../../../utils/formatCurrency'
import type { Product } from '../../types/product.types'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  locale: string
}

function ProductCard({
  product,
  locale,
}: ProductCardProps) {
  const image = product.images[0]

  return (
    <Link
      to={`/products/${product.id}`}
      className={styles.card}
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

        <strong>
          {formatCurrency(product.price, locale)}
        </strong>
      </div>
    </Link>
  )
}

export default ProductCard
