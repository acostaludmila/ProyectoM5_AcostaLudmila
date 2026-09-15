import type {
  Product,
} from '../../../products/types/product.types'
import type {
  ProductFormValues,
} from '../types/adminProduct.types'

export function toFormValues(
  product?: Product | null,
): ProductFormValues {
  return {
    name: product?.name ?? '',
    description: product?.description ?? '',
    price: product ? String(product.price) : '',
    category: product?.category ?? 'clothing',
    tags: product?.tags.join(', ') ?? '',
    images: product?.images.join('\n') ?? '',
    variants: product?.variants
      .map(({ color, size, stock }) =>
        [color, size, stock].join(' | '))
      .join('\n') ?? '',
    active: product?.active ?? true,
  }
}
