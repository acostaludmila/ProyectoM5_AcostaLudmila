import type { ProductCategory } from './product.types'

export type ProductSort =
  | 'views'
  | 'rating'
  | 'newest'
  | 'priceAsc'
  | 'priceDesc'
  | 'availability'

export interface ProductDiscoveryFilters {
  category: ProductCategory | 'all'
  minPrice: string
  maxPrice: string
  inStock: boolean
}
