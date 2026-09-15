import {
  documentId,
  limit,
  orderBy,
  startAfter,
  where,
  type QueryConstraint,
} from 'firebase/firestore'
import type { ProductQueryOptions } from '../types/productQuery.types'

const DEFAULT_PAGE_SIZE = 8

export function buildProductQuery({
  category = 'all',
  cursor,
  pageSize = DEFAULT_PAGE_SIZE,
}: ProductQueryOptions) {
  const constraints: QueryConstraint[] = [
    where('active', '==', true),
  ]

  if (category !== 'all') {
    constraints.push(where('category', '==', category))
  }

  constraints.push(
    orderBy('createdAt', 'desc'),
    orderBy(documentId()),
  )

  if (cursor) {
    constraints.push(
      startAfter(cursor.createdAt, cursor.id),
    )
  }

  constraints.push(limit(pageSize + 1))

  return constraints
}
