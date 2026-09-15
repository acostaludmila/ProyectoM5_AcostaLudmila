import type {
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import styles from './Button.module.css'

interface ButtonProps
  extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  variant?: 'primary' | 'secondary'
}

function Button({
  children,
  className = '',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    className,
  ].filter(Boolean).join(' ')

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
