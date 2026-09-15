import {
  doc,
  increment,
  updateDoc,
} from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'

export async function incrementProductView(
  productId: string,
) {
  await updateDoc(
    doc(db, collections.products, productId),
    { viewCount: increment(1) },
  )
}
