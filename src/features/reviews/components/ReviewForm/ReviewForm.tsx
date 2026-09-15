import { useState, type FormEvent } from 'react'
import Button from '../../../../components/ui/Button/Button'
import { useLanguage } from '../../../language/hooks/useLanguage'
import StarRatingInput from '../StarRatingInput/StarRatingInput'
import styles from './ReviewForm.module.css'

interface Props {
  initialRating?: number
  initialComment?: string
  saving: boolean
  editing: boolean
  onSave: (rating: number, comment: string) => Promise<void>
}

function ReviewForm({
  initialRating = 5,
  initialComment = '',
  saving,
  editing,
  onSave,
}: Props) {
  const { t } = useLanguage()
  const [rating, setRating] = useState(initialRating)
  const [comment, setComment] = useState(initialComment)

  const submit = (event: FormEvent) => {
    event.preventDefault()
    if (!comment.trim()) return
    void onSave(rating, comment)
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <StarRatingInput
        value={rating}
        label={t('reviews.rating')}
        onChange={setRating}
      />
      <textarea
        value={comment}
        placeholder={t('reviews.comment')}
        onChange={(event) => setComment(event.target.value)}
      />
      <Button type="submit" disabled={saving}>
        {saving
          ? t('reviews.saving')
          : t(editing ? 'reviews.update' : 'reviews.save')}
      </Button>
    </form>
  )
}

export default ReviewForm
