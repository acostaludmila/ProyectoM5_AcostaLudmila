import { Link, type LinkProps } from 'react-router-dom'
import buttonStyles from '../Button/Button.module.css'

interface LinkButtonProps extends LinkProps {
  variant?: 'primary' | 'secondary'
}

function LinkButton({
  children,
  className = '',
  variant = 'secondary',
  ...props
}: LinkButtonProps) {
  const classes = [
    buttonStyles.button,
    buttonStyles[variant],
    className,
  ].filter(Boolean).join(' ')

  return (
    <Link className={classes} {...props}>
      {children}
    </Link>
  )
}

export default LinkButton
