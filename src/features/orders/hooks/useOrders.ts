import { useEffect, useState } from 'react'
import { getUserOrders } from '../services/getUserOrders'
import type { Order } from '../types/order.types'

export function useOrders(userId: string) {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    void getUserOrders(userId)
      .then((result) => {
        if (!cancelled) setOrders(result)
      })
      .catch(() => {
        if (!cancelled) setError(true)
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [userId])

  return { orders, loading, error }
}
