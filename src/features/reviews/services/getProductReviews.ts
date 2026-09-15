import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'
import type { Review } from '../types/review.types'

export async function getProductReviews(
  productId: string,
): Promise<Review[]> {
  const snapshot = await getDocs(
    query(
      collection(db, 'products', productId, 'reviews'),
      orderBy('updatedAt', 'desc'),
    ),
  )

  return snapshot.docs.map((document) => {
    const data = document.data()

    return {
      productId,
      userId: String(data.userId),
      userName: String(data.userName ?? ''),
      rating: Number(data.rating),
      comment: String(data.comment ?? ''),
      createdAt: data.createdAt ?? null,
      updatedAt: data.updatedAt ?? null,
    }
  })
}
