import type { OrderStatus } from '../../../orders/types/order.types'

const labels: Record<OrderStatus, { en: string; es: string }> = {
  pending: { en: 'Pending', es: 'Pendiente' },
  paid: { en: 'Paid', es: 'Pagado' },
  processing: { en: 'Processing', es: 'Procesando' },
  shipped: { en: 'Shipped', es: 'Enviado' },
  delivered: { en: 'Delivered', es: 'Entregado' },
  cancelled: { en: 'Cancelled', es: 'Cancelado' },
}

export function orderStatusLabel(
  status: OrderStatus,
  language: 'en' | 'es',
) {
  return labels[status][language]
}
