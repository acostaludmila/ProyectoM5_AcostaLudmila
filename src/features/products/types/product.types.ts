
import type { DateValue } from '../../../types/date.types'
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
  createdAt: DateValue
  updatedAt: DateValue
}
