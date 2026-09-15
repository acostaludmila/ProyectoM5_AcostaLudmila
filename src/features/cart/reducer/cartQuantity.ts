import type {
  CartState,
} from '../types/cart.types'

function changeQuantity(
  state: CartState,
  key: string,
  delta: 1 | -1,
): CartState {
  return {
    items: state.items
      .map((item) => {
        if (item.key !== key) return item

        const quantity = delta === 1
          ? Math.min(
              item.quantity + 1,
              item.stock,
            )
          : item.quantity - 1

        return {
          ...item,
          quantity,
        }
      })
      .filter((item) => item.quantity > 0),
  }
}

export function incrementCartItem(
  state: CartState,
  key: string,
): CartState {
  return changeQuantity(
    state,
    key,
    1,
  )
}

export function decrementCartItem(
  state: CartState,
  key: string,
): CartState {
  return changeQuantity(
    state,
    key,
    -1,
  )
}
