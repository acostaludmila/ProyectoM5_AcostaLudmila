import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'
import type { CartItem } from '../../cart/types/cart.types'
import type { OrderItem } from '../types/order.types'

export async function createOrder(
  userId: string,
  cartItems: CartItem[],
) {
  const items: OrderItem[] = cartItems.map((item) => ({
    productId: item.productId,
    name: item.name,
    price: item.price,
    image: item.image,
    color: item.color,
    size: item.size,
    quantity: item.quantity,
  }))

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const reference = await addDoc(
    collection(db, collections.orders),
    {
      userId,
      items,
      total,
      status: 'pending',
      createdAt: serverTimestamp(),
    },
  )

  return reference.id
}
