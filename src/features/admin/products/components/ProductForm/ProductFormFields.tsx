import { useLanguage } from '../../../../language/hooks/useLanguage'
import type { ProductFormValues } from '../../types/adminProduct.types'
import styles from './ProductForm.module.css'

interface Props {
  values: ProductFormValues
  onChange: <K extends keyof ProductFormValues>(
    key: K,
    value: ProductFormValues[K],
  ) => void
}

function ProductFormFields({ values, onChange }: Props) {
  const { t } = useLanguage()
  return (
    <>
      <label className={styles.field}>
        <span>{t('admin.products.name')}</span>
        <input className={styles.control} value={values.name}
          onChange={(event) => onChange('name', event.target.value)} />
      </label>
      <label className={styles.field}>
        <span>{t('admin.products.description')}</span>
        <textarea className={`${styles.control} ${styles.textarea}`}
          value={values.description}
          onChange={(event) => onChange('description', event.target.value)} />
      </label>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>{t('admin.products.price')}</span>
          <input className={styles.control} type="number" min="0" step="0.01"
            value={values.price}
            onChange={(event) => onChange('price', event.target.value)} />
        </label>
        <label className={styles.field}>
          <span>{t('admin.products.category')}</span>
          <select className={styles.control} value={values.category}
            onChange={(event) => onChange(
              'category',
              event.target.value as ProductFormValues['category'],
            )}>
            <option value="clothing">Clothing</option>
            <option value="jewelry">Jewelry</option>
            <option value="essentials">Essentials</option>
          </select>
        </label>
      </div>
      <label className={styles.field}>
        <span>{t('admin.products.images')}</span>
        <textarea className={`${styles.control} ${styles.textarea}`}
          value={values.images}
          onChange={(event) => onChange('images', event.target.value)} />
        <small>{t('admin.products.imagesHelp')}</small>
      </label>
      <label className={styles.field}>
        <span>{t('admin.products.variants')}</span>
        <textarea className={`${styles.control} ${styles.textarea}`}
          value={values.variants}
          onChange={(event) => onChange('variants', event.target.value)} />
        <small>{t('admin.products.variantsHelp')}</small>
      </label>
    </>
  )
}

export default ProductFormFields
