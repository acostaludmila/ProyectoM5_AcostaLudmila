import type {
  CartItemInput,
} from '../../cart/types/cart.types'

export interface ReorderResolution {
  item: CartItemInput | null
  quantity: number
  skipped: number
}

export interface ReorderResult {
  added: number
  skipped: number
}
