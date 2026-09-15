import {
  collectionGroup,
  getDocs,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'
import type {
  RatingsByProduct,
} from '../types/review.types'

export async function getProductRatings():
Promise<RatingsByProduct> {
  const snapshot = await getDocs(
    collectionGroup(db, 'reviews'),
  )
  const totals = new Map<
    string,
    { total: number; count: number }
  >()

  snapshot.docs.forEach((document) => {
    const data = document.data()
    const productId = String(data.productId ?? '')
    const rating = Number(data.rating ?? 0)

    if (!productId || rating < 1 || rating > 5) return

    const current = totals.get(productId)
      ?? { total: 0, count: 0 }

    current.total += rating
    current.count += 1
    totals.set(productId, current)
  })

  return Object.fromEntries(
    [...totals].map(([id, value]) => [
      id,
      {
        average: value.total / value.count,
        count: value.count,
      },
    ]),
  )
}
