import type { Product } from '../types/product.types'

export function filterProducts(
  products: Product[],
  search: string,
) {
  const normalized = search.trim().toLocaleLowerCase()

  if (!normalized) return products

  return products.filter((product) =>
    `${product.name} ${product.description}`
      .toLocaleLowerCase()
      .includes(normalized),
  )
}
