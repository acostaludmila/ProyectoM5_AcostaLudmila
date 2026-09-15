import type { TranslationKey } from '../types/language.types'
import { enAdmin } from './en/admin'
import { enAuth } from './en/auth'
import { enCatalog } from './en/catalog'
import { enCore } from './en/core'
import { enDiscovery } from './en/discovery'
import { enOrders } from './en/orders'
import { enReorder } from './en/reorder'
import { enReviews } from './en/reviews'

export const en: Record<TranslationKey, string> = {
  ...enCore,
  ...enAuth,
  ...enCatalog,
  ...enOrders,
  ...enAdmin,
  ...enDiscovery,
  ...enReviews,
  ...enReorder,
}
