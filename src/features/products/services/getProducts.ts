import {
  collection,
  getDocs,
  query,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore'
import { collections } from '../../../config/collections'
import { db } from '../../../config/firebase'
import type {
  Product,
  ProductPage,
  ProductQueryOptions,
} from '../types/product.types'
import { buildProductQuery } from '../utils/buildProductQuery'

const DEFAULT_PAGE_SIZE = 8

function mapProduct(
  snapshot: QueryDocumentSnapshot<DocumentData>,
): Product {
  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Product
}

export async function getProducts(
  options: ProductQueryOptions = {},
): Promise<ProductPage> {
  const pageSize = options.pageSize ?? DEFAULT_PAGE_SIZE
  const productsRef = collection(db, collections.products)
  const snapshot = await getDocs(
    query(productsRef, ...buildProductQuery(options)),
  )

  const visibleDocs = snapshot.docs.slice(0, pageSize)
  const lastDocument = visibleDocs.at(-1)

  return {
    products: visibleDocs.map(mapProduct),
    hasMore: snapshot.docs.length > pageSize,
    nextCursor: lastDocument
      ? {
          id: lastDocument.id,
          createdAt: lastDocument.data().createdAt,
        }
      : null,
  }
}
