import { useEffect, useState } from 'react'
import { getProductRatings } from '../services/getProductRatings'
import type { RatingsByProduct } from '../types/review.types'

export function useProductRatings() {
  const [ratings, setRatings] =
    useState<RatingsByProduct>({})

  useEffect(() => {
    let cancelled = false

    void getProductRatings()
      .then((result) => {
        if (!cancelled) setRatings(result)
      })
      .catch(() => undefined)

    return () => {
      cancelled = true
    }
  }, [])

  return { ratings }
}
