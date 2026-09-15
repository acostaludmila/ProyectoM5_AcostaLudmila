import { describe, expect, it } from 'vitest'
import type {
  RatingsByProduct,
} from '../../../reviews/types/review.types'
import { makeProduct } from '../../../../test/fixtures/productFixture'
import { sortProducts } from '../sortProducts'

const noRatings: RatingsByProduct = {}

describe('sortProducts ranking', () => {
  it('sorts by views and rating', () => {
    const products = [
      makeProduct('a', { viewCount: 2 }),
      makeProduct('b', { viewCount: 9 }),
    ]
    const ratings: RatingsByProduct = {
      a: { average: 5, count: 2 },
      b: { average: 3, count: 4 },
    }

    expect(
      sortProducts(products, 'views', noRatings)[0]?.id,
    ).toBe('b')

    expect(
      sortProducts(products, 'rating', ratings)[0]?.id,
    ).toBe('a')
  })

  it('sorts price in both directions', () => {
    const products = [
      makeProduct('a', { price: 80 }),
      makeProduct('b', { price: 120 }),
    ]

    expect(
      sortProducts(products, 'priceAsc', noRatings)
        .map(({ id }) => id),
    ).toEqual(['a', 'b'])

    expect(
      sortProducts(products, 'priceDesc', noRatings)
        .map(({ id }) => id),
    ).toEqual(['b', 'a'])
  })
})
