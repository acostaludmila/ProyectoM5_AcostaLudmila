import Button from '../../../../../components/ui/Button/Button'
import LinkButton from '../../../../../components/ui/LinkButton/LinkButton'
import { formatCurrency } from '../../../../../utils/formatCurrency'
import { useLanguage } from '../../../../language/hooks/useLanguage'
import type { Product } from '../../../../products/types/product.types'
import styles from './AdminProductCard.module.css'

interface AdminProductCardProps {
  product: Product
  onDelete: (product: Product) => void
}

function AdminProductCard({
  product,
  onDelete,
}: AdminProductCardProps) {
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <article className={styles.card}>
      <img src={product.images[0]} alt={product.name} />

      <div className={styles.info}>
        <strong>{product.name}</strong>
        <span>
          {formatCurrency(product.price, locale)}
          {' · '}
          {product.active
            ? t('admin.products.active')
            : t('admin.products.inactive')}
        </span>
      </div>

      <div className={styles.actions}>
        <LinkButton to={`/admin/products/${product.id}/edit`}>
          {t('admin.products.edit')}
        </LinkButton>

        <Button
          variant="secondary"
          onClick={() => onDelete(product)}
        >
          {t('admin.products.delete')}
        </Button>
      </div>
    </article>
  )
}

export default AdminProductCard
