import styles from './VariantOptionGroup.module.css'

interface VariantOptionGroupProps {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function VariantOptionGroup({
  label,
  options,
  value,
  onChange,
}: VariantOptionGroupProps) {
  return (
    <fieldset className={styles.group}>
      <legend>{label}</legend>

      <div className={styles.options}>
        {options.map((option) => (
          <button
            key={option}
            type="button"
            aria-pressed={value === option}
            className={value === option ? styles.active : ''}
            onClick={() => onChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </fieldset>
  )
}

export default VariantOptionGroup
