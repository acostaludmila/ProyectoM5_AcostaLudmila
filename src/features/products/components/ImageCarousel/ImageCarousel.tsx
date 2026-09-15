import styles from './ImageCarousel.module.css'

interface ImageCarouselProps {
  image: string
  alt: string
  multiple: boolean
  previousLabel: string
  nextLabel: string
  onPrevious: () => void
  onNext: () => void
}

function Chevron({ previous = false }: { previous?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={previous ? styles.reverse : undefined}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function ImageCarousel({
  image,
  alt,
  multiple,
  previousLabel,
  nextLabel,
  onPrevious,
  onNext,
}: ImageCarouselProps) {
  return (
    <div className={styles.carousel}>
      <img src={image} alt={alt} />

      {multiple && (
        <>
          <button
            type="button"
            className={styles.previous}
            aria-label={previousLabel}
            onClick={onPrevious}
          >
            <Chevron previous />
          </button>

          <button
            type="button"
            className={styles.next}
            aria-label={nextLabel}
            onClick={onNext}
          >
            <Chevron />
          </button>
        </>
      )}
    </div>
  )
}

export default ImageCarousel
