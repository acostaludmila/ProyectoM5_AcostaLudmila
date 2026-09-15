import { useLanguage } from '../../../language/hooks/useLanguage'
import type {
  ProductDiscoveryFilters,
} from '../../types/productDiscovery.types'
import PriceRangeFields from './PriceRangeFields'
import styles from './DiscoveryFilters.module.css'

interface Props {
  value: ProductDiscoveryFilters
  onChange: (
    next: ProductDiscoveryFilters,
  ) => void
}

function DiscoveryFilters({
  value,
  onChange,
}: Props) {
  const { t } = useLanguage()

  const set = (
    key: keyof ProductDiscoveryFilters,
    next: string | boolean,
  ) => {
    onChange({
      ...value,
      [key]: next,
    })
  }

  return (
    <div className={styles.filters}>
      <PriceRangeFields
        minPrice={value.minPrice}
        maxPrice={value.maxPrice}
        onMinChange={(next) =>
          set('minPrice', next)}
        onMaxChange={(next) =>
          set('maxPrice', next)}
      />

      <label className={styles.check}>
        <input
          type="checkbox"
          checked={value.inStock}
          onChange={(event) =>
            set(
              'inStock',
              event.target.checked,
            )}
        />
        <span>{t('products.filter.inStock')}</span>
      </label>
    </div>
  )
}

export default DiscoveryFilters
