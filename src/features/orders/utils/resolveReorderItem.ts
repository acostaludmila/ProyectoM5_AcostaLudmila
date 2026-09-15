import type {
  CartItem,
} from '../../cart/types/cart.types'
import { getProductById } from '../../products/services/getProductById'
import { getVariantStock } from '../../products/utils/productStock'
import type {
  OrderItem,
} from '../types/order.types'
import type {
  ReorderResolution,
} from '../types/reorder.types'

export async function resolveReorderItem(
  old: OrderItem,
  cartItems: CartItem[],
): Promise<ReorderResolution> {
  try {
    const product = await getProductById(old.productId)

    if (!product?.active) {
      return {
        item: null,
        quantity: 0,
        skipped: old.quantity,
      }
    }

    const stock = getVariantStock(
      product.variants,
      old.color,
      old.size,
    )

    const existing = cartItems.find((item) =>
      item.productId === old.productId
      && item.color === old.color
      && item.size === old.size)

    const available = Math.max(
      0,
      stock - (existing?.quantity ?? 0),
    )

    const quantity = Math.min(
      old.quantity,
      available,
    )

    if (quantity <= 0) {
      return {
        item: null,
        quantity: 0,
        skipped: old.quantity,
      }
    }

    return {
      item: {
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0] ?? '',
        color: old.color,
        size: old.size,
        stock,
      },
      quantity,
      skipped: old.quantity - quantity,
    }
  } catch {
    return {
      item: null,
      quantity: 0,
      skipped: old.quantity,
    }
  }
}
