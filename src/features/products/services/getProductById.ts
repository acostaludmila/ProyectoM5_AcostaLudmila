import { doc, getDoc } from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'
import type { Product } from '../types/product.types'
import { mapProductDocument } from '../utils/mapProductDocument'

export async function getProductById(
  productId: string,
): Promise<Product | null> {
  const productRef = doc(
    db,
    collections.products,
    productId,
  )
  const snapshot = await getDoc(productRef)

  if (!snapshot.exists()) {
    return null
  }

  return mapProductDocument(snapshot)
}
