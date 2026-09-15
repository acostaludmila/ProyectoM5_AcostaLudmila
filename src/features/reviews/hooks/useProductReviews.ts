import { useEffect, useState } from 'react'
import { getProductReviews } from '../services/getProductReviews'
import type { Review } from '../types/review.types'

export function useProductReviews(productId: string) {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loadedProductId, setLoadedProductId] =
    useState('')
  const [version, setVersion] = useState(0)

  useEffect(() => {
    let cancelled = false

    void getProductReviews(productId)
      .then((result) => {
        if (!cancelled) {
          setReviews(result)
          setLoadedProductId(productId)
        }
      })
      .catch(() => {
        if (!cancelled) {
          setReviews([])
          setLoadedProductId(productId)
        }
      })

    return () => {
      cancelled = true
    }
  }, [productId, version])

  const reload = () => {
    setLoadedProductId('')
    setVersion((value) => value + 1)
  }

  return {
    reviews,
    loading: loadedProductId !== productId,
    reload,
  }
}
