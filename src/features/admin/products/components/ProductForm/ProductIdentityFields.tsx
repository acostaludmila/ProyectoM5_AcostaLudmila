import { useLanguage } from '../../../../language/hooks/useLanguage'
import type {
  ProductFormSectionProps,
} from './ProductFormSection.types'
import styles from './ProductForm.module.css'

function ProductIdentityFields({
  values,
  onChange,
}: ProductFormSectionProps) {
  const { t } = useLanguage()

  return (
    <>
      <label className={styles.field}>
        <span>{t('admin.products.name')}</span>
        <input
          className={styles.control}
          value={values.name}
          onChange={(event) =>
            onChange('name', event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span>{t('admin.products.description')}</span>
        <textarea
          className={[
            styles.control,
            styles.textarea,
          ].join(' ')}
          value={values.description}
          onChange={(event) =>
            onChange('description', event.target.value)}
        />
      </label>
    </>
  )
}

export default ProductIdentityFields
