import { useState } from 'react'
import { useCart } from '../../cart/hooks/useCart'
import type {
  OrderItem,
} from '../types/order.types'
import type {
  ReorderResult,
} from '../types/reorder.types'
import { resolveReorderItem } from '../utils/resolveReorderItem'

export function useReorder() {
  const {
    items: cartItems,
    addItem,
  } = useCart()
  const [loading, setLoading] = useState(false)

  const reorder = async (
    items: OrderItem[],
  ): Promise<ReorderResult> => {
    setLoading(true)

    let added = 0
    let skipped = 0

    try {
      for (const old of items) {
        const result = await resolveReorderItem(
          old,
          cartItems,
        )

        if (result.item) {
          for (
            let index = 0;
            index < result.quantity;
            index += 1
          ) {
            addItem(result.item)
          }
        }

        added += result.quantity
        skipped += result.skipped
      }

      return { added, skipped }
    } finally {
      setLoading(false)
    }
  }

  return { reorder, loading }
}
