import Button from '../../../../components/ui/Button/Button'
import { useLanguage } from '../../../language/hooks/useLanguage'
import ProductDiscoveryControls from '../../components/ProductDiscoveryControls/ProductDiscoveryControls'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import { useProductDiscovery } from '../../hooks/useProductDiscovery'
import styles from './ProductsPage.module.css'

function ProductsPage() {
  const { language, t } = useLanguage()
  const discovery = useProductDiscovery()
  const locale =
    language === 'es' ? 'es-AR' : 'en-US'

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <span>{t('products.eyebrow')}</span>
        <h1>{t('products.title')}</h1>
      </header>

      <ProductDiscoveryControls
        search={discovery.search}
        sort={discovery.sort}
        filters={discovery.filters}
        onSearch={discovery.setSearch}
        onSort={discovery.setSort}
        onFilters={discovery.setFilters}
        onCategory={discovery.setCategory}
      />

      {discovery.loading ? (
        <p className={styles.state}>
          {t('products.loading')}
        </p>
      ) : discovery.error ? (
        <p className={styles.state}>
          {t('products.error')}
        </p>
      ) : (
        <ProductGrid
          products={discovery.visible}
          locale={locale}
          ratings={discovery.ratings}
          emptyMessage={t('products.empty')}
        />
      )}

      {discovery.hasMore && !discovery.loading && (
        <Button
          className={styles.more}
          onClick={discovery.loadMore}
        >
          {t('products.loadMore')}
        </Button>
      )}
    </section>
  )
}

export default ProductsPage
