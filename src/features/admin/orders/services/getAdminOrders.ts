
import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { collections } from '../../../../config/collections'
import { db } from '../../../../config/firebase'
import type { AdminCustomer } from '../types/adminCustomer.types'
import type { AdminOrder } from '../types/adminOrder.types'
import { mapAdminOrder } from '../utils/mapAdminOrder'

export async function getAdminOrders(): Promise<AdminOrder[]> {
  const [ordersSnapshot, usersSnapshot] = await Promise.all([
    getDocs(query(
      collection(db, collections.orders),
      orderBy('createdAt', 'desc'),
    )),
    getDocs(collection(db, collections.users)),
  ])

  const users = new Map<string, AdminCustomer>(
    usersSnapshot.docs.map((snapshot) => [
      snapshot.id,
      snapshot.data() as AdminCustomer,
    ]),
  )

  return ordersSnapshot.docs.map((snapshot) => {
    const data = snapshot.data()
    const customer = users.get(String(data.userId))

    return mapAdminOrder(
      snapshot.id,
      data,
      customer,
    )
  })
}
