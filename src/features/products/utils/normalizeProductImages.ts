import {
  MAX_PRODUCT_IMAGES,
  type ProductImage,
} from '../types/productImage.types'

export function normalizeProductImages(
  images: unknown,
  fallback: unknown,
): ProductImage[] {
  if (Array.isArray(images)) {
    return images
      .filter((image): image is string =>
        typeof image === 'string' && image.length > 0,
      )
      .slice(0, MAX_PRODUCT_IMAGES)
  }

  return typeof fallback === 'string' && fallback
    ? [fallback]
    : []
}
