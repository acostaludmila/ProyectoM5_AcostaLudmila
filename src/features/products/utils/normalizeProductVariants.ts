import type { ProductVariant } from '../types/productVariant.types'

function isProductVariant(value: unknown): value is ProductVariant {
  if (!value || typeof value !== 'object') return false

  const variant = value as Record<string, unknown>

  return (
    typeof variant.color === 'string'
    && typeof variant.size === 'string'
    && typeof variant.stock === 'number'
    && variant.stock >= 0
  )
}

export function normalizeProductVariants(
  variants: unknown,
): ProductVariant[] {
  if (!Array.isArray(variants)) return []

  return variants.filter(isProductVariant)
}
