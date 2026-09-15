import { useState } from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import { deleteReview } from '../services/deleteReview'
import { saveReview } from '../services/saveReview'
import type {
  Review,
} from '../types/review.types'

export function useReviewEditor(
  productId: string,
  reviews: Review[],
  onSaved: () => void,
) {
  const { user, profile } = useAuth()
  const [saving, setSaving] = useState(false)

  const own = reviews.find(
    (review) => review.userId === user?.uid,
  )

  const save = async (
    rating: number,
    comment: string,
  ) => {
    if (!user) return

    setSaving(true)

    try {
      await saveReview({
        productId,
        userId: user.uid,
        userName:
          profile?.displayName
          || user.email
          || 'AURELLE',
        rating,
        comment,
      })

      onSaved()
    } finally {
      setSaving(false)
    }
  }

  const remove = async () => {
    if (!user) return

    setSaving(true)

    try {
      await deleteReview(
        productId,
        user.uid,
      )

      onSaved()
    } finally {
      setSaving(false)
    }
  }

  return {
    user,
    own,
    saving,
    save,
    remove,
  }
}
