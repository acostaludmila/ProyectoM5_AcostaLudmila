import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/hooks/useAuth'
import { useCart } from '../../cart/hooks/useCart'
import { createOrder } from '../services/createOrder'

export function usePlaceOrder() {
  const { user } = useAuth()
  const { items, clearCart } = useCart()
  const navigate = useNavigate()
  const [placing, setPlacing] = useState(false)
  const [error, setError] = useState(false)

  const placeOrder = async () => {
    if (!user || items.length === 0 || placing) return

    setPlacing(true)
    setError(false)

    try {
      const orderId = await createOrder(user.uid, items)
      clearCart()
      navigate(`/orders/${orderId}`, { replace: true })
    } catch {
      setError(true)
    } finally {
      setPlacing(false)
    }
  }

  return { placing, error, placeOrder }
}
