import type {
  CartItemInput,
  CartState,
} from '../types/cart.types'

function buildKey(item: CartItemInput) {
  return [
    item.productId,
    item.color,
    item.size,
  ].join(':')
}

export function addCartItem(
  state: CartState,
  input: CartItemInput,
): CartState {
  const key = buildKey(input)
  const existing = state.items.find(
    (item) => item.key === key,
  )

  if (!existing) {
    return {
      items: [
        ...state.items,
        {
          ...input,
          key,
          quantity: 1,
        },
      ],
    }
  }

  return {
    items: state.items.map((item) =>
      item.key === key
        ? {
            ...item,
            quantity: Math.min(
              item.quantity + 1,
              input.stock,
            ),
            stock: input.stock,
            price: input.price,
          }
        : item,
    ),
  }
}

export function removeCartItem(
  state: CartState,
  key: string,
): CartState {
  return {
    items: state.items.filter(
      (item) => item.key !== key,
    ),
  }
}
