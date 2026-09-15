import { describe, expect, it } from 'vitest'
import { makeProduct } from '../../../../test/fixtures/productFixture'
import type {
  ProductDiscoveryFilters,
} from '../../types/productDiscovery.types'
import { filterProducts } from '../filterProducts'

const filters: ProductDiscoveryFilters = {
  category: 'all',
  minPrice: '0',
  maxPrice: '',
  inStock: false,
}

describe('filterProducts', () => {
  it('searches product data case-insensitively', () => {
    const products = [
      makeProduct(),
      makeProduct('p2', {
        name: 'Pearl Necklace',
        category: 'jewelry',
        tags: ['pearl'],
        variants: [
          {
            color: 'Gold',
            size: 'One Size',
            stock: 5,
          },
        ],
      }),
    ]

    expect(
      filterProducts(products, 'SATIN', filters)
        .map(({ id }) => id),
    ).toEqual(['p1'])

    expect(
      filterProducts(products, 'black', filters)
        .map(({ id }) => id),
    ).toEqual(['p1'])
  })

  it('filters by category and price range', () => {
    const products = [
      makeProduct('p1', { price: 80 }),
      makeProduct('p2', {
        price: 150,
        category: 'jewelry',
      }),
    ]
    const result = filterProducts(products, '', {
      category: 'clothing',
      minPrice: '50',
      maxPrice: '100',
      inStock: false,
    })

    expect(result.map(({ id }) => id))
      .toEqual(['p1'])
  })

  it('removes products without stock', () => {
    const unavailable = makeProduct('p2', {
      variants: [
        {
          color: 'White',
          size: 'S',
          stock: 0,
        },
      ],
    })
    const result = filterProducts(
      [makeProduct(), unavailable],
      '',
      { ...filters, inStock: true },
    )

    expect(result.map(({ id }) => id))
      .toEqual(['p1'])
  })
})
