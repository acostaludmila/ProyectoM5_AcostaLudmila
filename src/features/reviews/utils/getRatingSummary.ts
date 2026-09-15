import type {
  RatingSummary,
  Review,
} from '../types/review.types'

export function getRatingSummary(
  reviews: Review[],
): RatingSummary {
  if (reviews.length === 0) {
    return { average: 0, count: 0 }
  }

  const total = reviews.reduce(
    (sum, review) => sum + review.rating,
    0,
  )

  return {
    average: total / reviews.length,
    count: reviews.length,
  }
}
