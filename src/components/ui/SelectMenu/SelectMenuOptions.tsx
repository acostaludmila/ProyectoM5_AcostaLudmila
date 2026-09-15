import type {
  SelectMenuOption,
} from './SelectMenu.types'
import styles from './SelectMenuOptions.module.css'

interface Props {
  value: string
  options: SelectMenuOption[]
  ariaLabel: string
  onSelect: (value: string) => void
}

function SelectMenuOptions({
  value,
  options,
  ariaLabel,
  onSelect,
}: Props) {
  return (
    <div
      className={styles.menu}
      role="listbox"
      aria-label={ariaLabel}
    >
      {options.map((option) => {
        const active =
          value === option.value

        return (
          <button
            key={option.value}
            type="button"
            role="option"
            aria-selected={active}
            className={[
              styles.option,
              active ? styles.active : '',
            ].join(' ')}
            onClick={() =>
              onSelect(option.value)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}

export default SelectMenuOptions
