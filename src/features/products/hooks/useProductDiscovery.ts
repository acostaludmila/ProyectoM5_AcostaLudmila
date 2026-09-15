import { useDebounce } from '../../../hooks/useDebounce'
import { useProductRatings } from '../../reviews/hooks/useProductRatings'
import { filterProducts } from '../utils/filterProducts'
import { sortProducts } from '../utils/sortProducts'
import { useProductDiscoveryControls } from './useProductDiscoveryControls'
import { useProducts } from './useProducts'

export function useProductDiscovery() {
  const catalog = useProducts()
  const { ratings } = useProductRatings()
  const controls =
    useProductDiscoveryControls(
      catalog.resetVisible,
    )
  const debouncedSearch =
    useDebounce(controls.search)

  const filtered = filterProducts(
    catalog.products,
    debouncedSearch,
    controls.filters,
  )

  const sorted = sortProducts(
    filtered,
    controls.sort,
    ratings,
  )

  return {
    ...controls,
    ratings,
    visible:
      sorted.slice(0, catalog.visibleCount),
    hasMore:
      catalog.visibleCount < sorted.length,
    loading: catalog.loading,
    error: catalog.error,
    loadMore: catalog.loadMore,
  }
}
