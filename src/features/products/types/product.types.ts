import type { Timestamp } from 'firebase/firestore'

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
  imageUrl: string
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
