import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'
import { useCart } from '../../cart/hooks/useCart'
import { createOrder } from '../services/createOrder'
import { processPayment } from '../services/processPayment'

export type CheckoutStage = 'idle' | 'payment' | 'order'
export type PlaceOrderError = 'payment' | 'stock' | 'unknown' | null

export function usePlaceOrder() {
  const { user } = useAuth()
  const { items, clearCart } = useCart()
  const navigate = useNavigate()
  const [stage, setStage] = useState<CheckoutStage>('idle')
  const [error, setError] = useState<PlaceOrderError>(null)

  const placeOrder = async () => {
    if (!user || items.length === 0 || stage !== 'idle') return

    setError(null)
    setStage('payment')

    try {
      await processPayment()
    } catch {
      setError('payment')
      setStage('idle')
      return
    }

    setStage('order')

    try {
      const orderId = await createOrder(user.uid, items)
      clearCart()
      navigate(`/orders/${orderId}`, { replace: true })
    } catch (caught) {
      const outOfStock =
        caught instanceof Error && caught.message === 'OUT_OF_STOCK'
      setError(outOfStock ? 'stock' : 'unknown')
      setStage('idle')
    }
  }

  return {
    stage,
    placing: stage !== 'idle',
    error,
    placeOrder,
  }
}
