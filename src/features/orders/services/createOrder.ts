import {
  collection,
  doc,
  runTransaction,
  serverTimestamp,
} from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'
import type { CartItem } from '../../cart/types/cart.types'
import type { Product } from '../../products/types/product.types'
import { mapProductDocument } from '../../products/utils/mapProductDocument'
import type { OrderItem } from '../types/order.types'
import {
  buildOrderItems,
  groupCartItems,
  reserveVariants,
} from '../utils/orderStock'

export async function createOrder(
  userId: string,
  cartItems: CartItem[],
) {
  const orderRef = doc(collection(db, collections.orders))

  await runTransaction(db, async (transaction) => {
    const groups = groupCartItems(cartItems)
    const products = new Map<string, Product>()

    for (const [productId] of groups) {
      const reference = doc(db, collections.products, productId)
      const snapshot = await transaction.get(reference)

      if (!snapshot.exists()) throw new Error('PRODUCT_NOT_FOUND')

      const product = mapProductDocument(snapshot)
      if (!product.active) throw new Error('PRODUCT_NOT_FOUND')

      products.set(productId, product)
    }

    const orderItems: OrderItem[] = []

    for (const [productId, items] of groups) {
      const product = products.get(productId)
      if (!product) throw new Error('PRODUCT_NOT_FOUND')

      transaction.update(
        doc(db, collections.products, productId),
        {
          variants: reserveVariants(product, items),
          updatedAt: serverTimestamp(),
        },
      )

      orderItems.push(...buildOrderItems(product, items))
    }

    const total = orderItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    )

    transaction.set(orderRef, {
      userId,
      items: orderItems,
      total,
      status: 'pending',
      createdAt: serverTimestamp(),
    })
  })

  return orderRef.id
}
