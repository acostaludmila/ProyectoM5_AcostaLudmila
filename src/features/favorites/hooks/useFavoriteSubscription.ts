import {
  useEffect,
  useState,
} from 'react'
import { subscribeFavorites } from '../services/subscribeFavorites'

export function useFavoriteSubscription(
  userId: string,
) {
  const [favoriteIds, setFavoriteIds] =
    useState<Set<string>>(new Set())
  const [ownerId, setOwnerId] = useState('')

  useEffect(() => {
    if (!userId) return

    return subscribeFavorites(
      userId,
      (ids) => {
        setFavoriteIds(ids)
        setOwnerId(userId)
      },
      () => {
        setFavoriteIds(new Set())
        setOwnerId(userId)
      },
    )
  }, [userId])

  return {
    favoriteIds,
    ownerId,
    setFavoriteIds,
    setOwnerId,
  }
}
