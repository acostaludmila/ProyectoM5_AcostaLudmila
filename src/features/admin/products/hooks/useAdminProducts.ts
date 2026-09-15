import { useEffect, useState } from 'react'
import type { Product } from '../../../products/types/product.types'
import { getAdminProducts } from '../services/getAdminProducts'

export function useAdminProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [version, setVersion] = useState(0)

  useEffect(() => {
    let cancelled = false

    void getAdminProducts()
      .then((result) => {
        if (!cancelled) setProducts(result)
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

  return {
    products,
    loading,
    error,
    reload,
  }
}
