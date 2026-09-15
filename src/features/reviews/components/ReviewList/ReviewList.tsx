import type { Review } from '../../types/review.types'
import styles from './ReviewList.module.css'

interface Props {
  reviews: Review[]
}

function ReviewList({ reviews }: Props) {
  return (
    <div className={styles.list}>
      {reviews.map((review) => (
        <article
          key={review.userId}
          className={styles.review}
        >
          <strong>{review.userName}</strong>
          <span className={styles.rating}>
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </span>
          <p>{review.comment}</p>
        </article>
      ))}
    </div>
  )
}

export default ReviewList
