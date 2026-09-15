import type {
  FormEventHandler,
  PropsWithChildren,
} from 'react'
import { Link } from 'react-router-dom'
import GoogleLoginButton from '../GoogleLoginButton/GoogleLoginButton'
import styles from './AuthFormShell.module.css'

interface AuthFormShellProps extends PropsWithChildren {
  title: string
  description: string
  googleLabel: string
  dividerLabel: string
  prompt: string
  linkLabel: string
  linkTo: string
  errorMessage?: string
  loading: boolean
  onGoogle: () => void
  onSubmit: FormEventHandler<HTMLFormElement>
}

function AuthFormShell({
  children,
  title,
  description,
  googleLabel,
  dividerLabel,
  prompt,
  linkLabel,
  linkTo,
  errorMessage,
  loading,
  onGoogle,
  onSubmit,
}: AuthFormShellProps) {
  return (
    <section className={styles.shell} aria-busy={loading}>
      <header className={styles.header}>
        <h1>{title}</h1>
        <p>{description}</p>
      </header>

      <GoogleLoginButton
        label={googleLabel}
        onClick={onGoogle}
      />

      <div className={styles.divider}>
        <span>{dividerLabel}</span>
      </div>

      <form className={styles.form} onSubmit={onSubmit}>
        {children}
      </form>

      {errorMessage && (
        <p className={styles.error} role="alert">
          {errorMessage}
        </p>
      )}

      <p className={styles.prompt}>
        {prompt}{' '}
        <Link to={linkTo}>{linkLabel}</Link>
      </p>
    </section>
  )
}

export default AuthFormShell
