import { useLanguage } from '../../../../language/hooks/useLanguage'
import type {
  ProductFormValues,
} from '../../types/adminProduct.types'
import styles from './ProductForm.module.css'

interface Props {
  values: ProductFormValues
  onChange: <K extends keyof ProductFormValues>(
    key: K,
    value: ProductFormValues[K],
  ) => void
}

function ProductMediaFields({
  values,
  onChange,
}: Props) {
  const { t } = useLanguage()

  return (
    <>
      <label className={styles.field}>
        <span>{t('admin.products.images')}</span>
        <textarea
          className={[
            styles.control,
            styles.textarea,
          ].join(' ')}
          value={values.images}
          onChange={(event) =>
            onChange('images', event.target.value)}
        />
        <small>{t('admin.products.imagesHelp')}</small>
      </label>

      <label className={styles.field}>
        <span>{t('admin.products.variants')}</span>
        <textarea
          className={[
            styles.control,
            styles.textarea,
          ].join(' ')}
          value={values.variants}
          onChange={(event) =>
            onChange('variants', event.target.value)}
        />
        <small>{t('admin.products.variantsHelp')}</small>
      </label>
    </>
  )
}

export default ProductMediaFields
