import { useEffect, useState } from 'react'
import type { Product } from '../../products/types/product.types'
import { getFavoriteProducts } from '../services/getFavoriteProducts'

interface FavoriteProductsState {
  key: string
  products: Product[]
}

export function useFavoriteProducts(ids: Set<string>) {
  const key = [...ids].sort().join('|')
  const [state, setState] =
    useState<FavoriteProductsState>({
      key: '',
      products: [],
    })

  useEffect(() => {
    if (!key) return

    let cancelled = false
    const values = key.split('|')

    void getFavoriteProducts(values)
      .then((products) => {
        if (!cancelled) {
          setState({ key, products })
        }
      })

    return () => {
      cancelled = true
    }
  }, [key])

  if (!key) {
    return { products: [], loading: false }
  }

  return {
    products:
      state.key === key ? state.products : [],
    loading: state.key !== key,
  }
}
