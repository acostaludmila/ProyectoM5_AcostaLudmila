import styles from './StarRatingInput.module.css'

interface Props {
  value: number
  label: string
  onChange: (value: number) => void
}

function StarRatingInput({
  value,
  label,
  onChange,
}: Props) {
  return (
    <div
      className={styles.stars}
      role="group"
      aria-label={label}
    >
      {[1, 2, 3, 4, 5].map((rating) => (
        <button
          key={rating}
          type="button"
          className={rating <= value ? styles.active : ''}
          aria-label={`${rating}/5`}
          onClick={() => onChange(rating)}
        >
          {rating <= value ? '★' : '☆'}
        </button>
      ))}
    </div>
  )
}

export default StarRatingInput
