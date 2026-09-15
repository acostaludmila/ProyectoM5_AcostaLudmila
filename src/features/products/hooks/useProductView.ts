import { useEffect } from 'react'
import { incrementProductView } from '../services/incrementProductView'

export function useProductView(productId: string) {
  useEffect(() => {
    if (!productId) return

    void incrementProductView(productId)
      .catch(() => undefined)
  }, [productId])
}
