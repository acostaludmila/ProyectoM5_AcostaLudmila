
import type { DateValue } from '../../../types/date.types'
import type {
  Product,
  ProductCategory,
} from './product.types'

export interface ProductCursor {
  id: string
  createdAt: DateValue
}

export interface ProductPage {
  products: Product[]
  nextCursor: ProductCursor | null
  hasMore: boolean
}

export interface ProductQueryOptions {
  category?: ProductCategory | 'all'
  cursor?: ProductCursor | null
  pageSize?: number
}
