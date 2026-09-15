import { useState, type FormEvent } from 'react'
import Button from '../../../../../components/ui/Button/Button'
import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import type { Product } from '../../../../products/types/product.types'
import type { ProductFormValues } from '../../types/adminProduct.types'
import { parseProductForm, toFormValues } from '../../utils/productFormUtils'
import ProductFormFields from './ProductFormFields'
import styles from './ProductForm.module.css'

interface ProductFormProps {
  product?: Product | null
  saving: boolean
  onSave: (
    values: NonNullable<ReturnType<typeof parseProductForm>>,
  ) => Promise<void>
}

function ProductForm({ product, saving, onSave }: ProductFormProps) {
  const { t } = useLanguage()
  const [values, setValues] = useState(() => toFormValues(product))
  const [invalid, setInvalid] = useState(false)

  const set = <K extends keyof ProductFormValues>(
    key: K,
    value: ProductFormValues[K],
  ) => {
    setValues((current) => ({ ...current, [key]: value }))
  }

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const parsed = parseProductForm(values)

    if (!parsed) {
      setInvalid(true)
      return
    }

    setInvalid(false)
    void onSave(parsed)
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <ProductFormFields values={values} onChange={set} />

      <label className={styles.check}>
        <input
          type="checkbox"
          checked={values.active}
          onChange={(e) => set('active', e.target.checked)}
        />
        {t('admin.products.active')}
      </label>

      {invalid && (
        <p className={styles.error}>{t('admin.products.invalid')}</p>
      )}

      <div className={styles.actions}>
        <LinkButton to="/admin/products">
          {t('common.cancel')}
        </LinkButton>
        <Button type="submit" disabled={saving}>
          {saving
            ? t('admin.products.saving')
            : t('admin.products.save')}
        </Button>
      </div>
    </form>
  )
}

export default ProductForm
