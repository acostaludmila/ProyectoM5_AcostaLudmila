import type {
  RatingsByProduct,
} from '../../../reviews/types/review.types'
import type { Product } from '../../types/product.types'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

interface Props {
  products: Product[]
  locale: string
  emptyMessage: string
  ratings?: RatingsByProduct
}

function ProductGrid({
  products,
  locale,
  emptyMessage,
  ratings = {},
}: Props) {
  if (products.length === 0) {
    return <p className={styles.empty}>{emptyMessage}</p>
  }

  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          locale={locale}
          rating={ratings[product.id]}
        />
      ))}
    </div>
  )
}

export default ProductGrid
