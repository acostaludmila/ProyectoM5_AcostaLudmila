import {
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'
import type { Order } from '../types/order.types'
import { mapOrderDocument } from '../utils/mapOrderDocument'

export async function getUserOrders(
  userId: string,
): Promise<Order[]> {
  const snapshot = await getDocs(
    query(
      collection(db, collections.orders),
      where('userId', '==', userId),
    ),
  )

  return snapshot.docs
    .map(mapOrderDocument)
    .sort((first, second) =>
      (second.createdAt?.toMillis() ?? 0)
      - (first.createdAt?.toMillis() ?? 0),
    )
}
