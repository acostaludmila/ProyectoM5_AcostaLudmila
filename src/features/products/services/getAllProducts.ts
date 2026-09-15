import { getProducts } from './getProducts'
import type { Product } from '../types/product.types'
import type { ProductCursor } from '../types/productQuery.types'

export async function getAllProducts(): Promise<Product[]> {
  const products: Product[] = []
  let cursor: ProductCursor | null = null
  let hasMore = true

  while (hasMore) {
    const page = await getProducts({
      cursor,
      pageSize: 24,
    })

    products.push(...page.products)
    cursor = page.nextCursor
    hasMore = page.hasMore && Boolean(cursor)
  }

  return products
}
