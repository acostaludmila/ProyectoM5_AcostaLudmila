import {
  useCallback,
  type Dispatch,
  type SetStateAction,
} from 'react'
import { setFavorite } from '../services/setFavorite'
import { updateFavoriteSet } from '../utils/updateFavoriteSet'

interface Args {
  userId: string
  ownerId: string
  favoriteIds: Set<string>
  setFavoriteIds: Dispatch<SetStateAction<Set<string>>>
  setOwnerId: Dispatch<SetStateAction<string>>
}

export function useFavoriteToggle({
  userId,
  ownerId,
  favoriteIds,
  setFavoriteIds,
  setOwnerId,
}: Args) {
  return useCallback(
    async (productId: string) => {
      if (!userId) return

      const current =
        ownerId === userId
        && favoriteIds.has(productId)
      const next = !current

      setOwnerId(userId)
      setFavoriteIds((ids) =>
        updateFavoriteSet(
          ids,
          productId,
          next,
        ),
      )

      try {
        await setFavorite(
          userId,
          productId,
          next,
        )
      } catch (error) {
        setFavoriteIds((ids) =>
          updateFavoriteSet(
            ids,
            productId,
            current,
          ),
        )

        console.error(
          '[AURELLE favorites] Firestore rejected write:',
          error,
        )

        throw error
      }
    },
    [
      userId,
      ownerId,
      favoriteIds,
      setFavoriteIds,
      setOwnerId,
    ],
  )
}
