import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'

interface Input {
  productId: string
  userId: string
  userName: string
  rating: number
  comment: string
}

export async function saveReview(input: Input) {
  const reference = doc(
    db,
    'products',
    input.productId,
    'reviews',
    input.userId,
  )
  const current = await getDoc(reference)

  await setDoc(reference, {
    productId: input.productId,
    userId: input.userId,
    userName: input.userName,
    rating: input.rating,
    comment: input.comment.trim(),
    createdAt: current.exists()
      ? current.data().createdAt
      : serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}
