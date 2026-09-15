import type { Product } from '../../../products/types/product.types'
import type {
  ProductFormValues,
  ProductWriteInput,
} from '../types/adminProduct.types'

export function toFormValues(
  product?: Product | null,
): ProductFormValues {
  return {
    name: product?.name ?? '',
    description: product?.description ?? '',
    price: product ? String(product.price) : '',
    category: product?.category ?? 'clothing',
    images: product?.images.join('\n') ?? '',
    variants: product?.variants
      .map(({ color, size, stock }) =>
        `${color} | ${size} | ${stock}`)
      .join('\n') ?? '',
    active: product?.active ?? true,
  }
}

export function parseProductForm(
  values: ProductFormValues,
): ProductWriteInput | null {
  const price = Number(values.price)
  const images = values.images
    .split('\n').map((value) => value.trim()).filter(Boolean)

  const lines = values.variants
    .split('\n').map((value) => value.trim()).filter(Boolean)

  const variants = lines.map((line) => {
    const [color, size, rawStock] =
      line.split('|').map((value) => value.trim())
    return { color, size, stock: Number(rawStock) }
  })

  const invalidVariant = variants.some((variant) =>
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
    || images.length > 5
    || variants.length === 0
    || invalidVariant
  ) return null

  return {
    ...values,
    name: values.name.trim(),
    description: values.description.trim(),
    price,
    images,
    variants,
  }
}
