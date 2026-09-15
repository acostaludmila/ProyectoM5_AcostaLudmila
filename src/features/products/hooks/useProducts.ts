import { useCallback, useEffect, useState } from 'react'
import { getProducts } from '../services/getProducts'
import type { Product, ProductCategory, ProductCursor, ProductPage } from '../types/product.types'

const PAGE_SIZE = 8
type Category = ProductCategory | 'all'

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [category, setCategoryState] = useState<Category>('all')
  const [cursor, setCursor] = useState<ProductCursor | null>(null)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState(false)

  const applyPage = useCallback((page: ProductPage, append = false) => {
    setProducts((current) => append
      ? [...current, ...page.products]
      : page.products)
    setCursor(page.nextCursor)
    setHasMore(page.hasMore)
  }, [])

  useEffect(() => {
    let cancelled = false

    void getProducts({ category, pageSize: PAGE_SIZE })
      .then((page) => {
        if (!cancelled) applyPage(page)
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
  }, [category, applyPage])

  const setCategory = (nextCategory: Category) => {
    if (nextCategory === category) return
    setProducts([])
    setCursor(null)
    setHasMore(false)
    setError(false)
    setLoading(true)
    setCategoryState(nextCategory)
  }

  const loadMore = async () => {
    if (!cursor || !hasMore || loadingMore) return
    setLoadingMore(true)
    setError(false)

    try {
      const page = await getProducts({ category, cursor, pageSize: PAGE_SIZE })
      applyPage(page, true)
    } catch {
      setError(true)
    } finally {
      setLoadingMore(false)
    }
  }

  return {
    products, category, setCategory, loading, loadingMore,
    error, hasMore, loadMore,
  }
}
