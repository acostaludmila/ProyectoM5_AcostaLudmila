import type {
  TranslationKey,
} from '../../language/types/language.types'
import type {
  OrderStatus,
} from '../types/order.types'

const statusKeys: Record<OrderStatus, TranslationKey> = {
  pending: 'orders.status.pending',
  paid: 'orders.status.paid',
  processing: 'orders.status.processing',
  shipped: 'orders.status.shipped',
  delivered: 'orders.status.delivered',
  cancelled: 'orders.status.cancelled',
}

export function orderStatusKey(
  status: OrderStatus,
): TranslationKey {
  return statusKeys[status]
}
