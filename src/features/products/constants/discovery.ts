import type {
  ProductDiscoveryFilters,
  ProductSort,
} from '../types/productDiscovery.types'

export const DEFAULT_DISCOVERY_FILTERS:
ProductDiscoveryFilters = {
  category: 'all',
  minPrice: '0',
  maxPrice: '',
  inStock: false,
}

export const DEFAULT_PRODUCT_SORT:
ProductSort = 'newest'
