import Button from '../../../../components/ui/Button/Button'
import LinkButton from '../../../../components/ui/LinkButton/LinkButton'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useReviewEditor } from '../../hooks/useReviewEditor'
import type {
  Review,
} from '../../types/review.types'
import ReviewForm from '../ReviewForm/ReviewForm'
import styles from './ReviewEditor.module.css'

interface Props {
  productId: string
  reviews: Review[]
  onSaved: () => void
}

function ReviewEditor({
  productId,
  reviews,
  onSaved,
}: Props) {
  const { t } = useLanguage()
  const editor = useReviewEditor(
    productId,
    reviews,
    onSaved,
  )

  if (!editor.user) {
    return (
      <LinkButton to="/login">
        {t('reviews.signIn')}
      </LinkButton>
    )
  }

  return (
    <>
      <ReviewForm
        key={editor.own?.updatedAt?.toMillis() ?? 'new'}
        initialRating={editor.own?.rating}
        initialComment={editor.own?.comment}
        saving={editor.saving}
        editing={Boolean(editor.own)}
        onSave={editor.save}
      />

      {editor.own && (
        <Button
          className={styles.delete}
          disabled={editor.saving}
          onClick={() => void editor.remove()}
        >
          {t('reviews.delete')}
        </Button>
      )}
    </>
  )
}

export default ReviewEditor
