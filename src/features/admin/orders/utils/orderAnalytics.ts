import type { OrderStatus } from '../../../orders/types/order.types'
import { ORDER_STATUSES } from '../constants/orderStatuses'
import type {
  AdminOrder,
  OrderAnalytics,
} from '../types/adminOrder.types'

const revenueStatuses: OrderStatus[] = [
  'paid',
  'processing',
  'shipped',
  'delivered',
]

export function getOrderAnalytics(
  orders: AdminOrder[],
): OrderAnalytics {
  const paidOrders = orders.filter((order) =>
    revenueStatuses.includes(order.status),
  )
  const revenue = paidOrders.reduce(
    (sum, order) => sum + order.total,
    0,
  )
  const unitsSold = paidOrders.reduce(
    (sum, order) => sum + order.items.reduce(
      (itemSum, item) => itemSum + item.quantity,
      0,
    ),
    0,
  )
  const products = new Map<string, number>()

  for (const order of paidOrders) {
    for (const item of order.items) {
      products.set(
        item.name,
        (products.get(item.name) ?? 0) + item.quantity,
      )
    }
  }

  const statusCounts = Object.fromEntries(
    ORDER_STATUSES.map((status) => [
      status,
      orders.filter((order) => order.status === status).length,
    ]),
  ) as Record<OrderStatus, number>

  return {
    orderCount: orders.length,
    revenue,
    unitsSold,
    averageOrderValue: paidOrders.length
      ? revenue / paidOrders.length
      : 0,
    topProduct: [...products.entries()]
      .sort((a, b) => b[1] - a[1])[0]?.[0] ?? '',
    statusCounts,
  }
}
