import { useLanguage } from '../../../language/hooks/useLanguage'
import styles from './DiscoveryFilters.module.css'

interface Props {
  minPrice: string
  maxPrice: string
  onMinChange: (value: string) => void
  onMaxChange: (value: string) => void
}

function PriceRangeFields({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: Props) {
  const { t } = useLanguage()

  return (
    <>
      <label className={styles.field}>
        <span>{t('products.filter.minPrice')}</span>
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          value={minPrice}
          onChange={(event) =>
            onMinChange(event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>{t('products.filter.maxPrice')}</span>
        <input
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          value={maxPrice}
          onChange={(event) =>
            onMaxChange(event.target.value)}
        />
      </label>
    </>
  )
}

export default PriceRangeFields
