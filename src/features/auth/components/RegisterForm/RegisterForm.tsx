import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/ui/Button/Button'
import Input from '../../../../components/ui/Input/Input'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useAuthAction } from '../../hooks/useAuthAction'
import { loginWithGoogle } from '../../services/loginWithGoogle'
import { registerWithEmail } from '../../services/registerWithEmail'
import { hasValidationErrors, validateRegisterForm, type RegisterValidationErrors } from '../../utils/validateAuthForm'
import { authErrorTranslationKey, validationTranslationKey } from '../../utils/authTranslationKeys'
import AuthFormShell from '../AuthFormShell/AuthFormShell'
import styles from './RegisterForm.module.css'

function RegisterForm() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<RegisterValidationErrors>({})
  const { loading, errorKey, run, clearError } = useAuthAction()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearError()
    const nextErrors = validateRegisterForm(displayName, email, password)
    setErrors(nextErrors)
    if (hasValidationErrors(nextErrors)) return

    const success = await run(() =>
      registerWithEmail({ displayName, email, password }),
    )
    if (success) navigate('/')
  }

  const handleGoogle = () => {
    void run(loginWithGoogle)
  }

  return (
    <AuthFormShell
      title={t('auth.register.title')}
      description={t('auth.register.description')}
      googleLabel={t('auth.google')}
      dividerLabel={t('auth.or')}
      prompt={t('auth.register.prompt')}
      linkLabel={t('auth.register.link')}
      linkTo="/login"
      loading={loading}
      onGoogle={handleGoogle}
      onSubmit={(event) => void handleSubmit(event)}
      errorMessage={errorKey ? t(authErrorTranslationKey(errorKey)) : undefined}
    >
      <Input id="register-name" label={t('auth.displayName')} value={displayName}
        onChange={(event) => setDisplayName(event.target.value)}
        error={errors.displayName ? t(validationTranslationKey(errors.displayName)) : undefined} />
      <Input id="register-email" type="email" label={t('auth.email')} value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email ? t(validationTranslationKey(errors.email)) : undefined} />
      <Input id="register-password" type="password" label={t('auth.password')}
        value={password} onChange={(event) => setPassword(event.target.value)}
        error={errors.password ? t(validationTranslationKey(errors.password)) : undefined} />
      <Button className={styles.submit} type="submit" disabled={loading}>
        {t('auth.register.submit')}
      </Button>
    </AuthFormShell>
  )
}

export default RegisterForm
