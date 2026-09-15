import type {
  TranslationDiscoveryKey,
} from './translationDiscovery.types'
import type {
  TranslationLegacyKey,
} from './translationLegacy.types'
import type {
  TranslationReorderKey,
} from './translationReorder.types'
import type {
  TranslationReviewsKey,
} from './translationReviews.types'

export type TranslationKey =
  | TranslationLegacyKey
  | TranslationDiscoveryKey
  | TranslationReviewsKey
  | TranslationReorderKey
