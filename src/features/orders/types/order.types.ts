import type { Timestamp } from 'firebase/firestore'

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'

export interface OrderItem {
  productId: string
  name: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  total: number
  status: OrderStatus
  createdAt: Timestamp | null
}
