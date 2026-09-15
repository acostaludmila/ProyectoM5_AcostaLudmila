import { doc, updateDoc } from 'firebase/firestore'
import { collections } from '../../../../config/collections'
import { db } from '../../../../config/firebase'
import type { OrderStatus } from '../../../orders/types/order.types'

export async function updateAdminOrderStatus(
  orderId: string,
  status: OrderStatus,
) {
  await updateDoc(
    doc(db, collections.orders, orderId),
    { status },
  )
}
