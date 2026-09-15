import type {
  CartAction,
  CartItemInput,
  CartState,
} from '../types/cart.types'

function buildKey(item: CartItemInput) {
  return `${item.productId}:${item.color}:${item.size}`
}

export function cartReducer(
  state: CartState,
  action: CartAction,
): CartState {
  if (action.type === 'ADD') {
    const key = buildKey(action.payload)
    const existing = state.items.find((item) => item.key === key)

    if (!existing) {
      return {
        items: [
          ...state.items,
          { ...action.payload, key, quantity: 1 },
        ],
      }
    }

    return {
      items: state.items.map((item) =>
        item.key === key
          ? {
              ...item,
              quantity: Math.min(item.quantity + 1, item.stock),
            }
          : item,
      ),
    }
  }

  if (action.type === 'INCREMENT') {
    return {
      items: state.items.map((item) =>
        item.key === action.payload
          ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
          : item,
      ),
    }
  }

  if (action.type === 'DECREMENT') {
    return {
      items: state.items
        .map((item) =>
          item.key === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        )
        .filter((item) => item.quantity > 0),
    }
  }

  if (action.type === 'REMOVE') {
    return {
      items: state.items.filter((item) => item.key !== action.payload),
    }
  }

  return action.type === 'CLEAR' ? { items: [] } : state
}
