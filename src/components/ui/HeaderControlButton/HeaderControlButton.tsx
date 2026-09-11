import type {
  ButtonHTMLAttributes,
  PropsWithChildren,
} from 'react'
import styles from './HeaderControlButton.module.css'

type HeaderControlButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

function HeaderControlButton({
  children,
  className = '',
  ...props
}: HeaderControlButtonProps) {
  const classes = `${styles.control} ${className}`.trim()

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}

export default HeaderControlButton
