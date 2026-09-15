import type { ProductVariant } from '../types/productVariant.types'

function unique(values: string[]) {
  return [...new Set(values)]
}

export function getProductColors(
  variants: ProductVariant[],
) {
  return unique(variants.map((variant) => variant.color))
}

export function getProductSizes(
  variants: ProductVariant[],
  color: string,
) {
  return unique(
    variants
      .filter((variant) => variant.color === color)
      .map((variant) => variant.size),
  )
}

export function getVariantStock(
  variants: ProductVariant[],
  color: string,
  size: string,
) {
  return variants.find(
    (variant) =>
      variant.color === color && variant.size === size,
  )?.stock ?? 0
}
