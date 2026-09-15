
import styles from './ImageCarousel.module.css'

interface ImageCarouselChevronProps {
  previous?: boolean
}

function ImageCarouselChevron({
  previous = false,
}: ImageCarouselChevronProps) {
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

export default ImageCarouselChevron
