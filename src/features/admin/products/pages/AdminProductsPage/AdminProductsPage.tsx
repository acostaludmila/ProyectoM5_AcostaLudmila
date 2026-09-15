import { useState } from 'react'
import ConfirmDialog from '../../../../../components/ui/ConfirmDialog/ConfirmDialog'
import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import type { Product } from '../../../../products/types/product.types'
import AdminProductCard from '../../components/AdminProductCard/AdminProductCard'
import { useAdminProducts } from '../../hooks/useAdminProducts'
import { deleteProduct } from '../../services/deleteProduct'
import styles from './AdminProductsPage.module.css'

function AdminProductsPage() {
  const { t } = useLanguage()
  const { products, loading, error, reload } = useAdminProducts()
  const [pending, setPending] = useState<Product | null>(null)

  const remove = async () => {
    if (!pending) return
    await deleteProduct(pending.id)
    setPending(null)
    reload()
  }

  return (
    <section className={styles.page}>
      <header>
        <div>
          <span>AURELLE ADMIN</span>
          <h1>{t('admin.products.title')}</h1>
        </div>
        <div className={styles.actions}>
          <LinkButton to="/admin">
            {t('admin.dashboard.back')}
          </LinkButton>
          <LinkButton to="/admin/products/new" variant="primary">
            {t('admin.products.new')}
          </LinkButton>
        </div>
      </header>

      {loading && <p>{t('products.loading')}</p>}
      {error && <p>{t('products.error')}</p>}
      {!loading && !error && products.length === 0 && (
        <p>{t('admin.products.empty')}</p>
      )}

      {products.map((product) => (
        <AdminProductCard
          key={product.id}
          product={product}
          onDelete={setPending}
        />
      ))}

      <ConfirmDialog
        open={Boolean(pending)}
        title={t('admin.products.deleteTitle')}
        description={t('admin.products.deleteDescription')}
        cancelLabel={t('common.cancel')}
        confirmLabel={t('admin.products.delete')}
        onCancel={() => setPending(null)}
        onConfirm={() => void remove()}
      />
    </section>
  )
}

export default AdminProductsPage
