import {
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from 'vitest'
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

describe('resolveReorderItem unavailable product', () => {
  beforeEach(() => {
    getProductMock.mockReset()
  })

  it('skips unavailable variants', async () => {
    getProductMock.mockResolvedValue(
      makeCurrentProduct({
        variants: [
          {
            color: 'Black',
            size: 'M',
            stock: 0,
          },
        ],
      }),
    )

    const result = await resolveReorderItem(
      oldOrderItem,
      [],
    )

    expect(result.item).toBeNull()
    expect(result.quantity).toBe(0)
    expect(result.skipped).toBe(4)
  })

  it('fails safely when loading fails', async () => {
    getProductMock.mockRejectedValue(
      new Error('Firestore unavailable'),
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
