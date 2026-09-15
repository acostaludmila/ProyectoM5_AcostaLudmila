import { useLanguage } from '../../../../language/hooks/useLanguage'
import type {
  ProductCategory,
} from '../../../../products/types/product.types'
import type {
  ProductFormSectionProps,
} from './ProductFormSection.types'
import styles from './ProductForm.module.css'

function ProductCommerceFields({
  values,
  onChange,
}: ProductFormSectionProps) {
  const { t } = useLanguage()

  const changeCategory = (value: string) => {
    onChange('category', value as ProductCategory)
  }

  return (
    <div className={styles.row}>
      <label className={styles.field}>
        <span>{t('admin.products.price')}</span>
        <input
          className={styles.control}
          type="number"
          min="0"
          step="0.01"
          value={values.price}
          onChange={(event) =>
            onChange('price', event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>{t('admin.products.category')}</span>
        <select
          className={styles.control}
          value={values.category}
          onChange={(event) =>
            changeCategory(event.target.value)}
        >
          <option value="clothing">Clothing</option>
          <option value="jewelry">Jewelry</option>
          <option value="essentials">Essentials</option>
        </select>
      </label>
    </div>
  )
}

export default ProductCommerceFields
