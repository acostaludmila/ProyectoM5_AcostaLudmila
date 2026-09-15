import type { TranslationKey } from '../../language/types/language.types'
import type { AuthErrorKey } from './authErrors'
import type { ValidationErrorKey } from './validateAuthForm'

export function authErrorTranslationKey(
  key: AuthErrorKey,
): TranslationKey {
  return `auth.error.${key}`
}

export function validationTranslationKey(
  key: ValidationErrorKey,
): TranslationKey {
  return `auth.validation.${key}`
}
