import { doc, getDoc } from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'
import type { Order } from '../types/order.types'
import { mapOrderDocument } from '../utils/mapOrderDocument'

export async function getOrderById(
  orderId: string,
): Promise<Order | null> {
  const snapshot = await getDoc(
    doc(db, collections.orders, orderId),
  )

  if (!snapshot.exists()) {
    return null
  }

  return mapOrderDocument(snapshot)
}
