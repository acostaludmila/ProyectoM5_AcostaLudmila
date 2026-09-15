import { useLanguage } from '../../../language/hooks/useLanguage'
import type {
  ProductCategory,
} from '../../types/product.types'
import type {
  ProductDiscoveryFilters,
  ProductSort,
} from '../../types/productDiscovery.types'
import DiscoveryFilters from '../DiscoveryFilters/DiscoveryFilters'
import ProductFilters from '../ProductFilters/ProductFilters'
import ProductSearch from '../ProductSearch/ProductSearch'
import ProductSortSelect from '../ProductSortSelect/ProductSortSelect'
import styles from './ProductDiscoveryControls.module.css'

interface Props {
  search: string
  sort: ProductSort
  filters: ProductDiscoveryFilters
  onSearch: (value: string) => void
  onSort: (value: ProductSort) => void
  onFilters: (value: ProductDiscoveryFilters) => void
  onCategory: (
    value: ProductCategory | 'all',
  ) => void
}

function ProductDiscoveryControls(
  props: Props,
) {
  const { t } = useLanguage()

  const labels = {
    all: t('products.all'),
    clothing: t('collections.clothing.name'),
    jewelry: t('collections.jewelry.name'),
    essentials: t('collections.essentials.name'),
  }

  return (
    <div className={styles.controls}>
      <div className={styles.topbar}>
        <ProductSearch
          value={props.search}
          label={t('products.search')}
          onChange={props.onSearch}
        />

        <ProductSortSelect
          value={props.sort}
          onChange={props.onSort}
        />
      </div>

      <ProductFilters
        value={props.filters.category}
        labels={labels}
        onChange={props.onCategory}
      />

      <DiscoveryFilters
        value={props.filters}
        onChange={props.onFilters}
      />
    </div>
  )
}

export default ProductDiscoveryControls
