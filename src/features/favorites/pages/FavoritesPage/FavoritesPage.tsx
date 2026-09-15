import { useLanguage } from '../../../language/hooks/useLanguage'
import ProductGrid from '../../../products/components/ProductGrid/ProductGrid'
import { useProductRatings } from '../../../reviews/hooks/useProductRatings'
import { useFavoriteProducts } from '../../hooks/useFavoriteProducts'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './FavoritesPage.module.css'

function FavoritesPage() {
  const { favoriteIds, loading: idsLoading } = useFavorites()
  const { products, loading } =
    useFavoriteProducts(favoriteIds)
  const { ratings } = useProductRatings()
  const { language, t } = useLanguage()
  const locale = language === 'es' ? 'es-AR' : 'en-US'

  return (
    <section className={styles.page}>
      <header>
        <span>AURELLE</span>
        <h1>{t('favorites.title')}</h1>
      </header>

      {idsLoading || loading ? (
        <p className={styles.state}>
          {t('common.loading')}
        </p>
      ) : (
        <ProductGrid
          products={products}
          locale={locale}
          ratings={ratings}
          emptyMessage={t('favorites.empty')}
        />
      )}
    </section>
  )
}

export default FavoritesPage
