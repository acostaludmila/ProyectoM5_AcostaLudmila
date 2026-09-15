import { getProductById } from '../../products/services/getProductById'
import type { Product } from '../../products/types/product.types'

export async function getFavoriteProducts(
  ids: string[],
): Promise<Product[]> {
  const products = await Promise.all(
    ids.map(async (id) => {
      try {
        return await getProductById(id)
      } catch {
        return null
      }
    }),
  )

  return products.filter(
    (product): product is Product =>
      Boolean(product?.active),
  )
}
