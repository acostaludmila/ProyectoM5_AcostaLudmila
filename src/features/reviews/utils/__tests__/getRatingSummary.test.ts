import { describe, expect, it } from 'vitest'
import type { Review } from '../../types/review.types'
import { getRatingSummary } from '../getRatingSummary'

function review(rating: number): Review {
  return {
    rating,
  } as Review
}

describe('getRatingSummary', () => {
  it('returns zero values without reviews', () => {
    expect(
      getRatingSummary([]),
    ).toEqual({
      average: 0,
      count: 0,
    })
  })

  it('calculates average and count', () => {
    const result = getRatingSummary([
      review(5),
      review(4),
      review(3),
    ])

    expect(result.count).toBe(3)
    expect(result.average).toBe(4)
  })
})
