import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../../../../components/ui/Button/Button'
import Input from '../../../../components/ui/Input/Input'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useAuthAction } from '../../hooks/useAuthAction'
import { loginWithEmail } from '../../services/loginWithEmail'
import { loginWithGoogle } from '../../services/loginWithGoogle'
import {
  hasValidationErrors,
  validateLoginForm,
  type LoginValidationErrors,
} from '../../utils/validateAuthForm'
import {
  authErrorTranslationKey,
  validationTranslationKey,
} from '../../utils/authTranslationKeys'
import AuthFormShell from '../AuthFormShell/AuthFormShell'
import styles from './LoginForm.module.css'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginValidationErrors>({})
  const { loading, errorKey, run, clearError } = useAuthAction()
  const { t } = useLanguage()
  const navigate = useNavigate()

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    clearError()
    const nextErrors = validateLoginForm(email, password)
    setErrors(nextErrors)

    if (hasValidationErrors(nextErrors)) return

    const success = await run(() => loginWithEmail({ email, password }))
    if (success) navigate('/')
  }

  const handleGoogle = () => {
    void run(loginWithGoogle)
  }

  return (
    <AuthFormShell
      title={t('auth.login.title')}
      description={t('auth.login.description')}
      googleLabel={t('auth.google')}
      dividerLabel={t('auth.or')}
      prompt={t('auth.login.prompt')}
      linkLabel={t('auth.login.link')}
      linkTo="/register"
      loading={loading}
      onGoogle={handleGoogle}
      onSubmit={(event) => void handleSubmit(event)}
      errorMessage={errorKey ? t(authErrorTranslationKey(errorKey)) : undefined}
    >
      <Input id="login-email" type="email" label={t('auth.email')}
        value={email} onChange={(event) => setEmail(event.target.value)}
        error={errors.email ? t(validationTranslationKey(errors.email)) : undefined} />
      <Input id="login-password" type="password" label={t('auth.password')}
        value={password} onChange={(event) => setPassword(event.target.value)}
        error={errors.password ? t(validationTranslationKey(errors.password)) : undefined} />
      <Button className={styles.submit} type="submit" disabled={loading}>
        {t('auth.login.submit')}
      </Button>
    </AuthFormShell>
  )
}

export default LoginForm
