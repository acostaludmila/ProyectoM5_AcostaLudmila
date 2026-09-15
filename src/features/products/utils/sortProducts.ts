import type {
  RatingsByProduct,
} from '../../reviews/types/review.types'
import type {
  ProductSort,
} from '../types/productDiscovery.types'
import type { Product } from '../types/product.types'

function availableSizes(product: Product) {
  return new Set(
    product.variants
      .filter((variant) => variant.stock > 0)
      .map((variant) => variant.size),
  ).size
}

export function sortProducts(
  products: Product[],
  sort: ProductSort,
  ratings: RatingsByProduct,
) {
  return [...products].sort((a, b) => {
    if (sort === 'views') {
      return b.viewCount - a.viewCount
    }

    if (sort === 'rating') {
      return (ratings[b.id]?.average ?? 0)
        - (ratings[a.id]?.average ?? 0)
    }

    if (sort === 'priceAsc') return a.price - b.price
    if (sort === 'priceDesc') return b.price - a.price

    if (sort === 'availability') {
      return availableSizes(b) - availableSizes(a)
    }

    return b.createdAt.toMillis() - a.createdAt.toMillis()
  })
}
