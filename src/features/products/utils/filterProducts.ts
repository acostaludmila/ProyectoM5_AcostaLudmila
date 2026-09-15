import type {
  ProductDiscoveryFilters,
} from '../types/productDiscovery.types'
import type { Product } from '../types/product.types'

function matchesSearch(
  product: Product,
  search: string,
) {
  const text = [
    product.name,
    product.description,
    product.category,
    ...product.tags,
    ...product.variants.flatMap(
      ({ color, size }) => [
        color,
        size,
      ],
    ),
  ]
    .join(' ')
    .toLocaleLowerCase()

  return text.includes(search)
}

export function filterProducts(
  products: Product[],
  search: string,
  filters: ProductDiscoveryFilters,
) {
  const query = search.trim().toLocaleLowerCase()
  const minPrice = Number(filters.minPrice)
  const maxPrice = Number(filters.maxPrice)

  return products.filter((product) => {
    if (
      query
      && !matchesSearch(product, query)
    ) return false

    if (
      filters.category !== 'all'
      && product.category !== filters.category
    ) return false

    if (
      filters.minPrice !== ''
      && Number.isFinite(minPrice)
      && product.price < minPrice
    ) return false

    if (
      filters.maxPrice !== ''
      && Number.isFinite(maxPrice)
      && product.price > maxPrice
    ) return false

    if (
      filters.inStock
      && !product.variants.some(
        (variant) => variant.stock > 0,
      )
    ) return false

    return true
  })
}
