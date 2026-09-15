import { useEffect, useState } from 'react'
import { getAdminOrders } from '../services/getAdminOrders'
import type { AdminOrder } from '../types/adminOrder.types'

export function useAdminOrders() {
  const [orders, setOrders] = useState<AdminOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [version, setVersion] = useState(0)

  useEffect(() => {
    let cancelled = false

    void getAdminOrders()
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
  }, [version])

  const reload = () => {
    setLoading(true)
    setError(false)
    setVersion((value) => value + 1)
  }

  return { orders, loading, error, reload }
}
