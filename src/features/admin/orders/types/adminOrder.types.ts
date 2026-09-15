
import type {
  Order,
  OrderStatus,
} from '../../../orders/types/order.types'

export interface AdminOrder extends Order {
  customerName: string
  customerEmail: string
}

export interface OrderAnalytics {
  orderCount: number
  revenue: number
  unitsSold: number
  averageOrderValue: number
  topProduct: string
  statusCounts: Record<OrderStatus, number>
}
