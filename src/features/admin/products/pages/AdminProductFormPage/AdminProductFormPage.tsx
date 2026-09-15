import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import { useProduct } from '../../../../products/hooks/useProduct'
import ProductForm from '../../components/ProductForm/ProductForm'
import { saveProduct } from '../../services/saveProduct'
import type { ProductWriteInput } from '../../types/adminProduct.types'
import styles from './AdminProductFormPage.module.css'

function AdminProductFormPage() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { t } = useLanguage()
  const { product, loading } = useProduct(productId ?? '__new__')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(false)

  const save = async (values: ProductWriteInput) => {
    setSaving(true)
    setError(false)

    try {
      await saveProduct(productId, values)
      navigate('/admin/products')
    } catch {
      setError(true)
      setSaving(false)
    }
  }

  if (productId && loading) {
    return <p className={styles.state}>{t('products.loading')}</p>
  }

  return (
    <section className={styles.page}>
      <header>
        <span>AURELLE ADMIN</span>
        <h1>
          {productId
            ? t('admin.products.editTitle')
            : t('admin.products.newTitle')}
        </h1>
      </header>

      {error && <p>{t('products.error')}</p>}

      <ProductForm
        product={product}
        saving={saving}
        onSave={save}
      />
    </section>
  )
}

export default AdminProductFormPage
