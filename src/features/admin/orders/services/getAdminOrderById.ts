
import { doc, getDoc } from 'firebase/firestore'
import { collections } from '../../../../config/collections'
import { db } from '../../../../config/firebase'
import type { AdminCustomer } from '../types/adminCustomer.types'
import type { AdminOrder } from '../types/adminOrder.types'
import { mapAdminOrder } from '../utils/mapAdminOrder'

export async function getAdminOrderById(
  orderId: string,
): Promise<AdminOrder | null> {
  const orderSnapshot = await getDoc(
    doc(db, collections.orders, orderId),
  )

  if (!orderSnapshot.exists()) return null

  const data = orderSnapshot.data()
  const userSnapshot = await getDoc(
    doc(db, collections.users, String(data.userId)),
  )

  const customer = userSnapshot.exists()
    ? userSnapshot.data() as AdminCustomer
    : null

  return mapAdminOrder(
    orderSnapshot.id,
    data,
    customer,
  )
}
