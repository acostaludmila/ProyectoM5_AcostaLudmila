import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/getAllProducts'
import type { Product } from '../types/product.types'

const PAGE_SIZE = 8

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let cancelled = false

    void getAllProducts()
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
  }, [])

  const loadMore = () =>
    setVisibleCount((current) => current + PAGE_SIZE)

  const resetVisible = () =>
    setVisibleCount(PAGE_SIZE)

  return {
    products,
    visibleCount,
    loading,
    error,
    loadMore,
    resetVisible,
  }
}
