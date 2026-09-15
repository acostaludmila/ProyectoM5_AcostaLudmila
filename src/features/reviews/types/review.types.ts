import type { DateValue } from '../../../types/date.types'

export interface Review {
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
  createdAt: DateValue | null
  updatedAt: DateValue | null
}

export interface RatingSummary {
  average: number
  count: number
}

export type RatingsByProduct =
  Record<string, RatingSummary>
