import type { TranslationKey } from '../types/language.types'
import { esCore } from './es/core'
import { esAuth } from './es/auth'
import { esCatalog } from './es/catalog'
import { esOrders } from './es/orders'
import { esAdmin } from './es/admin'

export const es: Record<TranslationKey, string> = {
  ...esCore,
  ...esAuth,
  ...esCatalog,
  ...esOrders,
  ...esAdmin,
}
