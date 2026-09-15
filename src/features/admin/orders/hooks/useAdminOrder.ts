import { useEffect, useState } from 'react'
import { getAdminOrderById } from '../services/getAdminOrderById'
import type { AdminOrder } from '../types/adminOrder.types'

export function useAdminOrder(orderId: string) {
  const [order, setOrder] = useState<AdminOrder | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [version, setVersion] = useState(0)

  useEffect(() => {
    let cancelled = false

    void getAdminOrderById(orderId)
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
  }, [orderId, version])

  const reload = () => {
    setLoading(true)
    setError(false)
    setVersion((value) => value + 1)
  }

  return { order, loading, error, reload }
}
