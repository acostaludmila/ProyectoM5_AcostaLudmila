import {
  addDoc,
  collection,
  deleteField,
  doc,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore'
import { collections } from '../../../../config/collections'
import { db } from '../../../../config/firebase'
import type {
  ProductWriteInput,
} from '../types/adminProduct.types'

export async function saveProduct(
  productId: string | undefined,
  data: ProductWriteInput,
) {
  if (productId) {
    await updateDoc(
      doc(db, collections.products, productId),
      {
        ...data,
        imageUrl: deleteField(),
        subcategory: deleteField(),
        updatedAt: serverTimestamp(),
      },
    )

    return productId
  }

  const reference = await addDoc(
    collection(db, collections.products),
    {
      ...data,
      viewCount: 0,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    },
  )

  return reference.id
}
