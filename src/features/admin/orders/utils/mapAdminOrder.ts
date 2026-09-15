
import type { DocumentData } from 'firebase/firestore'
import type {
  OrderItem,
  OrderStatus,
} from '../../../orders/types/order.types'
import type { AdminCustomer } from '../types/adminCustomer.types'
import type { AdminOrder } from '../types/adminOrder.types'

export function mapAdminOrder(
  id: string,
  data: DocumentData,
  customer?: AdminCustomer | null,
): AdminOrder {
  return {
    id,
    userId: String(data.userId),
    items: data.items as OrderItem[],
    total: Number(data.total),
    status: data.status as OrderStatus,
    createdAt: data.createdAt ?? null,
    customerName:
      customer?.displayName || customer?.email || '—',
    customerEmail: customer?.email ?? '—',
  }
}
