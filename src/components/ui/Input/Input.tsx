import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

function Input({ id, label, error, ...props }: InputProps) {
  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>

      <input
        id={id}
        className={`${styles.input} ${error ? styles.invalid : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />

      {error && (
        <span id={`${id}-error`} className={styles.error}>
          {error}
        </span>
      )}
    </label>
  )
}

export default Input
