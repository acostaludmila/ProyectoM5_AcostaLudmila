import type {
  DocumentData,
  DocumentSnapshot,
} from 'firebase/firestore'
import type {
  Product,
  ProductCategory,
} from '../types/product.types'
import { normalizeProductImages } from './normalizeProductImages'
import { normalizeProductVariants } from './normalizeProductVariants'

export function mapProductDocument(
  snapshot: DocumentSnapshot<DocumentData>,
): Product {
  const data = snapshot.data()

  if (!data) {
    throw new Error('Product document has no data')
  }

  return {
    id: snapshot.id,
    name: String(data.name ?? ''),
    description: String(data.description ?? ''),
    price: Number(data.price ?? 0),
    category: data.category as ProductCategory,
    images: normalizeProductImages(
      data.images,
      data.imageUrl,
    ),
    variants: normalizeProductVariants(data.variants),
    active: data.active === true,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  }
}
