import SelectMenu from '../../../../components/ui/SelectMenu/SelectMenu'
import type {
  SelectMenuOption,
} from '../../../../components/ui/SelectMenu/SelectMenu.types'
import { useLanguage } from '../../../language/hooks/useLanguage'
import type {
  ProductSort,
} from '../../types/productDiscovery.types'
import styles from './ProductSortSelect.module.css'

interface Props {
  value: ProductSort
  onChange: (sort: ProductSort) => void
}

function ProductSortSelect({
  value,
  onChange,
}: Props) {
  const { t } = useLanguage()

  const options: SelectMenuOption[] = [
    {
      value: 'views',
      label: t('products.sort.views'),
    },
    {
      value: 'rating',
      label: t('products.sort.rating'),
    },
    {
      value: 'newest',
      label: t('products.sort.newest'),
    },
    {
      value: 'priceAsc',
      label: t('products.sort.priceAsc'),
    },
    {
      value: 'priceDesc',
      label: t('products.sort.priceDesc'),
    },
    {
      value: 'availability',
      label: t('products.sort.availability'),
    },
  ]

  return (
    <label className={styles.sort}>
      <span className={styles.label}>
        {t('products.sort.label')}
      </span>

      <SelectMenu
        value={value}
        options={options}
        ariaLabel={t('products.sort.label')}
        onChange={(next) =>
          onChange(next as ProductSort)}
      />
    </label>
  )
}

export default ProductSortSelect
