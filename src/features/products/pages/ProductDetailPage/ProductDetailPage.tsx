import { useParams } from 'react-router-dom'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { useLanguage } from '../../../language/hooks/useLanguage'
import ProductGallery from '../../components/ProductGallery/ProductGallery'
import ProductPurchasePanel from '../../components/ProductPurchasePanel/ProductPurchasePanel'
import { useProduct } from '../../hooks/useProduct'
import styles from './ProductDetailPage.module.css'

function ProductDetailPage() {
  const { productId = '' } = useParams()
  const { product, loading, error } = useProduct(productId)
  const { language, t } = useLanguage()

  if (loading) {
    return <p className={styles.state}>{t('products.loading')}</p>
  }

  if (error) {
    return <p className={styles.state}>{t('products.error')}</p>
  }

  if (!product) {
    return <p className={styles.state}>{t('product.notFound')}</p>
  }

  const locale = language === 'es' ? 'es-AR' : 'en-US'
  const categoryKey = `collections.${product.category}.name` as const

  return (
    <section className={styles.page}>
      <ProductGallery
        key={product.id}
        images={product.images}
        alt={product.name}
        previousLabel={t('product.previousImage')}
        nextLabel={t('product.nextImage')}
      />

      <div className={styles.info}>
        <span className={styles.category}>{t(categoryKey)}</span>
        <h1>{product.name}</h1>
        <strong className={styles.price}>
          {formatCurrency(product.price, locale)}
        </strong>
        <p className={styles.description}>
          {product.description}
        </p>

        <ProductPurchasePanel
          key={product.id}
          product={product}
        />
      </div>
    </section>
  )
}

export default ProductDetailPage
