export interface CartItemInput {
  productId: string
  name: string
  price: number
  image: string
  color: string
  size: string
  stock: number
}

export interface CartItem extends CartItemInput {
  key: string
  quantity: number
}

export interface CartState {
  items: CartItem[]
}

export type CartAction =
  | { type: 'ADD'; payload: CartItemInput }
  | { type: 'INCREMENT'; payload: string }
  | { type: 'DECREMENT'; payload: string }
  | { type: 'REMOVE'; payload: string }
  | { type: 'CLEAR' }

export interface CartContextValue {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addItem: (item: CartItemInput) => void
  increment: (key: string) => void
  decrement: (key: string) => void
  removeItem: (key: string) => void
  clearCart: () => void
}
