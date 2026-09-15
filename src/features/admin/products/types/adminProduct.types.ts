import type {
  ProductCategory,
} from '../../../products/types/product.types'
import type {
  ProductVariant,
} from '../../../products/types/productVariant.types'

export interface ProductWriteInput {
  name: string
  description: string
  price: number
  category: ProductCategory
  tags: string[]
  images: string[]
  variants: ProductVariant[]
  active: boolean
}

export interface ProductFormValues {
  name: string
  description: string
  price: string
  category: ProductCategory
  tags: string
  images: string
  variants: string
  active: boolean
}
