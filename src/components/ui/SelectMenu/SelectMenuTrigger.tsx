import styles from './SelectMenuTrigger.module.css'

interface Props {
  label: string
  isOpen: boolean
  ariaLabel: string
  onToggle: () => void
}

function SelectMenuTrigger({
  label,
  isOpen,
  ariaLabel,
  onToggle,
}: Props) {
  return (
    <button
      type="button"
      className={styles.trigger}
      aria-label={ariaLabel}
      aria-haspopup="listbox"
      aria-expanded={isOpen}
      onClick={onToggle}
    >
      <span>{label}</span>

      <span
        className={[
          styles.chevron,
          isOpen ? styles.open : '',
        ].join(' ')}
        aria-hidden="true"
      />
    </button>
  )
}

export default SelectMenuTrigger
