import { useState } from 'react'
import SelectMenuOptions from './SelectMenuOptions'
import SelectMenuTrigger from './SelectMenuTrigger'
import type {
  SelectMenuProps,
} from './SelectMenu.types'
import styles from './SelectMenu.module.css'

function SelectMenu({
  value,
  options,
  ariaLabel,
  onChange,
}: SelectMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selected =
    options.find(
      (option) => option.value === value,
    )

  const select = (nextValue: string) => {
    onChange(nextValue)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <SelectMenuTrigger
        label={selected?.label ?? ''}
        isOpen={isOpen}
        ariaLabel={ariaLabel}
        onToggle={() =>
          setIsOpen((current) => !current)}
      />

      {isOpen && (
        <SelectMenuOptions
          value={value}
          options={options}
          ariaLabel={ariaLabel}
          onSelect={select}
        />
      )}
    </div>
  )
}

export default SelectMenu
