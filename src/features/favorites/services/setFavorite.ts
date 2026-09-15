import {
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore'
import { db } from '../../../config/firebase'

export async function setFavorite(
  userId: string,
  productId: string,
  favorite: boolean,
) {
  const reference = doc(
    db,
    'users',
    userId,
    'favorites',
    productId,
  )

  if (!favorite) {
    await deleteDoc(reference)
    return
  }

  await setDoc(reference, {
    productId,
    createdAt: serverTimestamp(),
  })
}
