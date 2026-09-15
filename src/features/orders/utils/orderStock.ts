import type { CartItem } from '../../cart/types/cart.types'
import type { Product } from '../../products/types/product.types'
import type { ProductVariant } from '../../products/types/productVariant.types'
import type { OrderItem } from '../types/order.types'

export function groupCartItems(items: CartItem[]) {
  const groups = new Map<string, CartItem[]>()

  for (const item of items) {
    const current = groups.get(item.productId) ?? []
    current.push(item)
    groups.set(item.productId, current)
  }

  return groups
}

export function reserveVariants(
  product: Product,
  items: CartItem[],
): ProductVariant[] {
  const variants = product.variants.map((variant) => ({ ...variant }))

  for (const item of items) {
    const variant = variants.find(
      (value) =>
        value.color === item.color
        && value.size === item.size,
    )

    if (!variant || variant.stock < item.quantity) {
      throw new Error('OUT_OF_STOCK')
    }

    variant.stock -= item.quantity
  }

  return variants
}

export function buildOrderItems(
  product: Product,
  items: CartItem[],
): OrderItem[] {
  return items.map((item) => ({
    productId: product.id,
    name: product.name,
    price: product.price,
    image: product.images[0] ?? '',
    color: item.color,
    size: item.size,
    quantity: item.quantity,
  }))
}
