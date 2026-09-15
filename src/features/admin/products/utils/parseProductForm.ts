import {
  MAX_PRODUCT_IMAGES,
} from '../../../products/constants/productLimits'
import type {
  ProductVariant,
} from '../../../products/types/productVariant.types'
import type {
  ProductFormValues,
  ProductWriteInput,
} from '../types/adminProduct.types'

function list(value: string) {
  return value
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean)
}

function parseVariants(
  value: string,
): ProductVariant[] {
  return value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean)
    .map((line) => {
      const [color, size, stock] =
        line.split('|')
          .map((item) => item.trim())

      return {
        color,
        size,
        stock: Number(stock),
      }
    })
}

export function parseProductForm(
  values: ProductFormValues,
): ProductWriteInput | null {
  const price = Number(values.price)
  const images = list(values.images)
  const variants = parseVariants(values.variants)

  const invalidVariant = variants.some(
    (variant) =>
      !variant.color
      || !variant.size
      || !Number.isInteger(variant.stock)
      || variant.stock < 0,
  )

  if (
    !values.name.trim()
    || !values.description.trim()
    || !Number.isFinite(price)
    || price <= 0
    || images.length === 0
    || images.length > MAX_PRODUCT_IMAGES
    || variants.length === 0
    || invalidVariant
  ) return null

  return {
    name: values.name.trim(),
    description: values.description.trim(),
    price,
    category: values.category,
    tags: list(values.tags),
    images,
    variants,
    active: values.active,
  }
}
