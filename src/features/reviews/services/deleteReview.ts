import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export async function deleteReview(
  productId: string,
  userId: string,
) {
  await deleteDoc(
    doc(
      db,
      'products',
      productId,
      'reviews',
      userId,
    ),
  )
}
