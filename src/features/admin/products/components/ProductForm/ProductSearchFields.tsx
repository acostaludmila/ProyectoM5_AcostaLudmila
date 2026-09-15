import { useLanguage } from '../../../../language/hooks/useLanguage'
import type {
  ProductFormSectionProps,
} from './ProductFormSection.types'
import styles from './ProductForm.module.css'

function ProductSearchFields({
  values,
  onChange,
}: ProductFormSectionProps) {
  const { t } = useLanguage()

  return (
    <label className={styles.field}>
      <span>{t('admin.products.tags')}</span>
      <textarea
        className={[
          styles.control,
          styles.textarea,
        ].join(' ')}
        value={values.tags}
        onChange={(event) =>
          onChange('tags', event.target.value)}
      />
      <small>{t('admin.products.tagsHelp')}</small>
    </label>
  )
}

export default ProductSearchFields
