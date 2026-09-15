import { describe, expect, it } from 'vitest'
import type {
  CartState,
} from '../../types/cart.types'
import {
  decrementCartItem,
  incrementCartItem,
} from '../cartQuantity'

function state(
  quantity: number,
  stock = 3,
): CartState {
  return {
    items: [
      {
        key: 'p1-Black-M',
        productId: 'p1',
        name: 'Dress',
        price: 100,
        image: 'dress.jpg',
        color: 'Black',
        size: 'M',
        quantity,
        stock,
      },
    ],
  }
}

describe('cartQuantity', () => {
  it('increments without exceeding stock', () => {
    expect(
      incrementCartItem(
        state(2),
        'p1-Black-M',
      ).items[0]?.quantity,
    ).toBe(3)

    expect(
      incrementCartItem(
        state(3),
        'p1-Black-M',
      ).items[0]?.quantity,
    ).toBe(3)
  })

  it('decrements quantity', () => {
    expect(
      decrementCartItem(
        state(2),
        'p1-Black-M',
      ).items[0]?.quantity,
    ).toBe(1)
  })

  it('removes an item when quantity reaches zero', () => {
    expect(
      decrementCartItem(
        state(1),
        'p1-Black-M',
      ).items,
    ).toEqual([])
  })
})
