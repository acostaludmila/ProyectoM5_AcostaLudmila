import type { OrderItem } from '../../features/orders/types/order.types'
import type { Product } from '../../features/products/types/product.types'
import { makeProduct } from './productFixture'

export const oldOrderItem: OrderItem = {
  productId: 'p1',
  name: 'Old Dress',
  price: 50,
  image: 'old.jpg',
  color: 'Black',
  size: 'M',
  quantity: 4,
}

export function makeCurrentProduct(
  overrides: Partial<Product> = {},
) {
  return makeProduct('p1', {
    name: 'Current Dress',
    price: 99,
    images: ['current.jpg'],
    variants: [
      {
        color: 'Black',
        size: 'M',
        stock: 3,
      },
    ],
    ...overrides,
  })
}
