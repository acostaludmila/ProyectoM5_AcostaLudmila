import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
import type {
  CartItem,
} from '../../../cart/types/cart.types'
import {
  getProductById,
} from '../../../products/services/getProductById'
import {
  makeCurrentProduct,
  oldOrderItem,
} from '../../../../test/fixtures/reorderFixture'
import { resolveReorderItem } from '../resolveReorderItem'

vi.mock(
  '../../../products/services/getProductById',
  () => ({
    getProductById: vi.fn(),
  }),
)

const getProductMock = vi.mocked(getProductById)

describe('resolveReorderItem current product', () => {
  beforeEach(() => {
    getProductMock.mockReset()
  })

  it('uses current price and stock', async () => {
    getProductMock.mockResolvedValue(
      makeCurrentProduct(),
    )
    const cartItems = [
      {
        productId: 'p1',
        color: 'Black',
        size: 'M',
        quantity: 1,
      },
    ] as CartItem[]

    const result = await resolveReorderItem(
      oldOrderItem,
      cartItems,
    )

    expect(result.quantity).toBe(2)
    expect(result.skipped).toBe(2)
    expect(result.item?.price).toBe(99)
    expect(result.item?.name).toBe('Current Dress')
    expect(result.item?.stock).toBe(3)
  })

  it('skips inactive products', async () => {
    getProductMock.mockResolvedValue(
      makeCurrentProduct({ active: false }),
    )

    const result = await resolveReorderItem(
      oldOrderItem,
      [],
    )

    expect(result.item).toBeNull()
    expect(result.quantity).toBe(0)
    expect(result.skipped).toBe(4)
  })
})
