import type { Timestamp } from 'firebase/firestore'
import type { ProductImage } from './productImage.types'
import type { ProductVariant } from './productVariant.types'

export type ProductCategory =
  | 'clothing'
  | 'jewelry'
  | 'essentials'

export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: ProductCategory
  images: ProductImage[]
  variants: ProductVariant[]
  active: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface ProductFilters {
  category: ProductCategory | 'all'
  search: string
}

export interface ProductCursor {
  id: string
  createdAt: Timestamp
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
