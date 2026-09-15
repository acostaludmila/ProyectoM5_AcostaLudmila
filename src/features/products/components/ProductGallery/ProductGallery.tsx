import { useState } from 'react'
import { MAX_PRODUCT_IMAGES } from '../../constants/productLimits'
import type { ProductImage } from '../../types/productImage.types'
import ImageCarousel from '../ImageCarousel/ImageCarousel'
import styles from './ProductGallery.module.css'

interface ProductGalleryProps {
  images: ProductImage[]
  alt: string
  previousLabel: string
  nextLabel: string
}

function ProductGallery({
  images,
  alt,
  previousLabel,
  nextLabel,
}: ProductGalleryProps) {
  const safeImages = images.slice(0, MAX_PRODUCT_IMAGES)
  const [activeIndex, setActiveIndex] = useState(0)

  if (safeImages.length === 0) {
    return <div className={styles.placeholder}>AURELLE</div>
  }

  const previous = () => {
    setActiveIndex((current) =>
      current === 0 ? safeImages.length - 1 : current - 1,
    )
  }

  const next = () => {
    setActiveIndex((current) =>
      current === safeImages.length - 1 ? 0 : current + 1,
    )
  }

  return (
    <div className={styles.gallery}>
      <ImageCarousel
        image={safeImages[activeIndex]}
        alt={`${alt} ${activeIndex + 1}`}
        multiple={safeImages.length > 1}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        onPrevious={previous}
        onNext={next}
      />

      {safeImages.length > 1 && (
        <div className={styles.thumbnails}>
          {safeImages.map((image, index) => (
            <button
              key={image}
              type="button"
              className={index === activeIndex ? styles.active : ''}
              onClick={() => setActiveIndex(index)}
            >
              <img src={image} alt={`${alt} ${index + 1}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGallery
