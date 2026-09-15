
import ImageCarouselChevron from './ImageCarouselChevron'
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
            <ImageCarouselChevron previous />
          </button>

          <button
            type="button"
            className={styles.next}
            aria-label={nextLabel}
            onClick={onNext}
          >
            <ImageCarouselChevron />
          </button>
        </>
      )}
    </div>
  )
}

export default ImageCarousel
