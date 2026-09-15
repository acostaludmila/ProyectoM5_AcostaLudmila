import type {
  CartAction,
  CartState,
} from '../types/cart.types'
import {
  addCartItem,
  removeCartItem,
} from './cartItemMutations'
import {
  decrementCartItem,
  incrementCartItem,
} from './cartQuantity'

export function cartReducer(
  state: CartState,
  action: CartAction,
): CartState {
  if (action.type === 'ADD') {
    return addCartItem(
      state,
      action.payload,
    )
  }

  if (action.type === 'INCREMENT') {
    return incrementCartItem(
      state,
      action.payload,
    )
  }

  if (action.type === 'DECREMENT') {
    return decrementCartItem(
      state,
      action.payload,
    )
  }

  if (action.type === 'REMOVE') {
    return removeCartItem(
      state,
      action.payload,
    )
  }

  if (action.type === 'CLEAR') {
    return { items: [] }
  }

  return state
}
