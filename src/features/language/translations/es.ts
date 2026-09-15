import type { TranslationKey } from '../types/language.types'
import { esAdmin } from './es/admin'
import { esAuth } from './es/auth'
import { esCatalog } from './es/catalog'
import { esCore } from './es/core'
import { esDiscovery } from './es/discovery'
import { esOrders } from './es/orders'
import { esReorder } from './es/reorder'
import { esReviews } from './es/reviews'

export const es: Record<TranslationKey, string> = {
  ...esCore,
  ...esAuth,
  ...esCatalog,
  ...esOrders,
  ...esAdmin,
  ...esDiscovery,
  ...esReviews,
  ...esReorder,
}
