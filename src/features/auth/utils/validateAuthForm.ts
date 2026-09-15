export type ValidationErrorKey =
  | 'required'
  | 'invalidEmail'
  | 'shortPassword'
  | 'shortName'

export interface LoginValidationErrors {
  email?: ValidationErrorKey
  password?: ValidationErrorKey
}

export interface RegisterValidationErrors
  extends LoginValidationErrors {
  displayName?: ValidationErrorKey
}

function validateEmail(email: string): ValidationErrorKey | undefined {
  if (!email.trim()) return 'required'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return 'invalidEmail'
  }
}

function validatePassword(
  password: string,
): ValidationErrorKey | undefined {
  if (!password) return 'required'
  if (password.length < 6) return 'shortPassword'
}

export function validateLoginForm(
  email: string,
  password: string,
): LoginValidationErrors {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
  }
}

export function validateRegisterForm(
  displayName: string,
  email: string,
  password: string,
): RegisterValidationErrors {
  const errors: RegisterValidationErrors = {
    ...validateLoginForm(email, password),
  }

  if (!displayName.trim()) errors.displayName = 'required'
  else if (displayName.trim().length < 2) {
    errors.displayName = 'shortName'
  }

  return errors
}

export function hasValidationErrors(
  errors: LoginValidationErrors,
) {
  return Object.values(errors).some(Boolean)
}
