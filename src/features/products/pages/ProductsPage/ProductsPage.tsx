import { useState } from 'react'
import Button from '../../../../components/ui/Button/Button'
import { useDebounce } from '../../../../hooks/useDebounce'
import { useLanguage } from '../../../language/hooks/useLanguage'
import ProductFilters from '../../components/ProductFilters/ProductFilters'
import ProductGrid from '../../components/ProductGrid/ProductGrid'
import ProductSearch from '../../components/ProductSearch/ProductSearch'
import { useProducts } from '../../hooks/useProducts'
import { filterProducts } from '../../utils/filterProducts'
import styles from './ProductsPage.module.css'

function ProductsPage() {
  const { language, t } = useLanguage()
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)
  const {
    products, category, setCategory, loading,
    loadingMore, error, hasMore, loadMore,
  } = useProducts()

  const labels = {
    all: t('products.all'),
    clothing: t('collections.clothing.name'),
    jewelry: t('collections.jewelry.name'),
    essentials: t('collections.essentials.name'),
  }
  const visibleProducts = filterProducts(products, debouncedSearch)
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <span>{t('products.eyebrow')}</span>
        <h1>{t('products.title')}</h1>
      </header>

      <ProductSearch
        value={search}
        label={t('products.search')}
        onChange={setSearch}
      />
      <ProductFilters
        value={category}
        labels={labels}
        onChange={setCategory}
      />

      {loading ? (
        <p className={styles.state}>{t('products.loading')}</p>
      ) : error ? (
        <p className={styles.state}>{t('products.error')}</p>
      ) : (
        <ProductGrid
          products={visibleProducts}
          locale={locale}
          emptyMessage={t('products.empty')}
        />
      )}

      {hasMore && !loading && (
        <Button
          className={styles.more}
          disabled={loadingMore}
          onClick={() => void loadMore()}
        >
          {loadingMore ? t('products.loading') : t('products.loadMore')}
        </Button>
      )}
    </section>
  )
}

export default ProductsPage
