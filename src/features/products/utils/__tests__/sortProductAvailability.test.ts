import { describe, expect, it } from 'vitest'
import type {
  RatingsByProduct,
} from '../../../reviews/types/review.types'
import {
  makeDateValue,
  makeProduct,
} from '../../../../test/fixtures/productFixture'
import { sortProducts } from '../sortProducts'

const ratings: RatingsByProduct = {}

describe('sortProducts availability', () => {
  it('sorts by available unique sizes', () => {
    const products = [
      makeProduct('a', {
        variants: [
          { color: 'Black', size: 'S', stock: 2 },
        ],
      }),
      makeProduct('b', {
        variants: [
          { color: 'Black', size: 'S', stock: 2 },
          { color: 'Black', size: 'M', stock: 1 },
        ],
      }),
    ]

    expect(
      sortProducts(
        products,
        'availability',
        ratings,
      )[0]?.id,
    ).toBe('b')
  })

  it('sorts newest products first', () => {
    const products = [
      makeProduct('old'),
      makeProduct('new', {
        createdAt: makeDateValue(10),
      }),
    ]

    expect(
      sortProducts(
        products,
        'newest',
        ratings,
      )[0]?.id,
    ).toBe('new')
  })
})
