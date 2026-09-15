import type { ProductCategory } from '../../types/product.types'
import styles from './ProductFilters.module.css'

type Category = ProductCategory | 'all'

interface ProductFiltersProps {
  value: Category
  labels: Record<Category, string>
  onChange: (category: Category) => void
}

const categories: Category[] = [
  'all',
  'clothing',
  'jewelry',
  'essentials',
]

function ProductFilters({
  value,
  labels,
  onChange,
}: ProductFiltersProps) {
  return (
    <div className={styles.filters}>
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={value === category ? styles.active : ''}
          onClick={() => onChange(category)}
        >
          {labels[category]}
        </button>
      ))}
    </div>
  )
}

export default ProductFilters
