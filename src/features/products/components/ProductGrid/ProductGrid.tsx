import type { Product } from '../../types/product.types'
import ProductCard from '../ProductCard/ProductCard'
import styles from './ProductGrid.module.css'

interface ProductGridProps {
  products: Product[]
  locale: string
  emptyMessage: string
}

function ProductGrid({
  products,
  locale,
  emptyMessage,
}: ProductGridProps) {
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
        />
      ))}
    </div>
  )
}

export default ProductGrid
