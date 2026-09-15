import { useEffect, useState } from 'react'
import { getOrderById } from '../services/getOrderById'
import type { Order } from '../types/order.types'

export function useOrder(orderId: string) {
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    void getOrderById(orderId)
      .then((result) => {
        if (!cancelled) setOrder(result)
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
  }, [orderId])

  return { order, loading, error }
}
