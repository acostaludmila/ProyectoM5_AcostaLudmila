import type { Product } from '../../features/products/types/product.types'

export function makeDateValue(value: number) {
  return {
    toDate: () => new Date(value),
    toMillis: () => value,
  } as Product['createdAt']
}

export function makeProduct(
  id = 'p1',
  overrides: Partial<Product> = {},
): Product {
  return {
    id,
    name: 'Satin Dress',
    description: 'Fluid evening silhouette',
    price: 120,
    category: 'clothing',
    images: ['dress.jpg'],
    tags: ['satin', 'evening'],
    variants: [
      {
        color: 'Black',
        size: 'M',
        stock: 4,
      },
    ],
    active: true,
    viewCount: 0,
    createdAt: makeDateValue(1),
    updatedAt: makeDateValue(1),
    ...overrides,
  }
}
