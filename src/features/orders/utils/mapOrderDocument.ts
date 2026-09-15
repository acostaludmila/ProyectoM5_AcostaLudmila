import type {
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore'
import type {
  Order,
  OrderItem,
  OrderStatus,
} from '../types/order.types'

export function mapOrderDocument(
  snapshot: DocumentSnapshot<DocumentData>,
): Order {
  const data = snapshot.data()

  if (!data) {
    throw new Error('Order document has no data')
  }

  return {
    id: snapshot.id,
    userId: String(data.userId ?? ''),
    items: Array.isArray(data.items)
      ? data.items as OrderItem[]
      : [],
    total: Number(data.total ?? 0),
    status: data.status as OrderStatus,
    createdAt: data.createdAt ?? null,
  }
}
