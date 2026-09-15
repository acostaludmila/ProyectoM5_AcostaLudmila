import type { CartState } from '../types/cart.types'

const STORAGE_KEY = 'aurelle-cart'
const emptyCart: CartState = { items: [] }

export function loadCart(): CartState {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return emptyCart

    const parsed: unknown = JSON.parse(stored)

    if (
      !parsed
      || typeof parsed !== 'object'
      || !('items' in parsed)
      || !Array.isArray(parsed.items)
    ) {
      return emptyCart
    }

    return { items: parsed.items }
  } catch {
    return emptyCart
  }
}

export function saveCart(state: CartState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}
