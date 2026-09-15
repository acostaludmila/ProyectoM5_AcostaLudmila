import { useEffect, useState } from 'react'
import { getProductById } from '../services/getProductById'
import type { Product } from '../types/product.types'

interface ProductState {
  product: Product | null
  loading: boolean
  error: boolean
}

const initialState: ProductState = {
  product: null,
  loading: true,
  error: false,
}

export function useProduct(productId: string) {
  const [state, setState] =
    useState<ProductState>(initialState)

  useEffect(() => {
    let cancelled = false

    void getProductById(productId)
      .then((product) => {
        if (!cancelled) {
          setState({
            product,
            loading: false,
            error: false,
          })
        }
      })
      .catch(() => {
        if (!cancelled) {
          setState({
            product: null,
            loading: false,
            error: true,
          })
        }
      })

    return () => {
      cancelled = true
    }
  }, [productId])

  return state
}
