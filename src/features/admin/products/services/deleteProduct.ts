import { deleteDoc, doc } from 'firebase/firestore'
import { collections } from '../../../../config/collections'
import { db } from '../../../../config/firebase'

export async function deleteProduct(productId: string) {
  await deleteDoc(
    doc(db, collections.products, productId),
  )
}
