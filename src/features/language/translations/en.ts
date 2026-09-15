import type { TranslationKey } from '../types/language.types'
import { enCore } from './en/core'
import { enAuth } from './en/auth'
import { enCatalog } from './en/catalog'
import { enOrders } from './en/orders'
import { enAdmin } from './en/admin'

export const en: Record<TranslationKey, string> = {
  ...enCore,
  ...enAuth,
  ...enCatalog,
  ...enOrders,
  ...enAdmin,
}
