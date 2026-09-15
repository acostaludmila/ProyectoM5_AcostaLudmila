import {
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore'
import { collections } from '../../../../config/collections'
import { db } from '../../../../config/firebase'
import type { Product } from '../../../products/types/product.types'
import { mapProductDocument } from '../../../products/utils/mapProductDocument'

export async function getAdminProducts(): Promise<Product[]> {
  const snapshot = await getDocs(
    query(
      collection(db, collections.products),
      orderBy('createdAt', 'desc'),
    ),
  )

  return snapshot.docs.map(mapProductDocument)
}
