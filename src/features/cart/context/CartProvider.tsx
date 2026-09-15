import {
  useEffect,
  useReducer,
  type PropsWithChildren,
} from 'react'
import { cartReducer } from '../reducer/cartReducer'
import type { CartItemInput } from '../types/cart.types'
import { loadCart, saveCart } from '../utils/cartStorage'
import { CartContext } from './CartContext'

function CartProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(
    cartReducer,
    undefined,
    loadCart,
  )

  useEffect(() => {
    saveCart(state)
  }, [state])

  const totalItems = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  )
  const totalPrice = state.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  const addItem = (item: CartItemInput) =>
    dispatch({ type: 'ADD', payload: item })

  const value = {
    items: state.items,
    totalItems,
    totalPrice,
    addItem,
    increment: (key: string) =>
      dispatch({ type: 'INCREMENT', payload: key }),
    decrement: (key: string) =>
      dispatch({ type: 'DECREMENT', payload: key }),
    removeItem: (key: string) =>
      dispatch({ type: 'REMOVE', payload: key }),
    clearCart: () => dispatch({ type: 'CLEAR' as const }),
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export { CartProvider }
