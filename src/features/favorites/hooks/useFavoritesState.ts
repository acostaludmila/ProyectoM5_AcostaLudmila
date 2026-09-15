import {
  useCallback,
  useMemo,
} from 'react'
import { useAuth } from '../../auth/hooks/useAuth'
import type {
  FavoritesContextValue,
} from '../types/favorite.types'
import { useFavoriteSubscription } from './useFavoriteSubscription'
import { useFavoriteToggle } from './useFavoriteToggle'

export function useFavoritesState():
FavoritesContextValue {
  const { user } = useAuth()
  const userId = user?.uid ?? ''

  const subscription =
    useFavoriteSubscription(userId)

  const {
    favoriteIds,
    ownerId,
  } = subscription

  const isFavorite = useCallback(
    (productId: string) =>
      ownerId === userId
      && favoriteIds.has(productId),
    [
      favoriteIds,
      ownerId,
      userId,
    ],
  )

  const toggleFavorite = useFavoriteToggle({
    userId,
    ownerId,
    favoriteIds,
    setFavoriteIds:
      subscription.setFavoriteIds,
    setOwnerId:
      subscription.setOwnerId,
  })

  return useMemo(() => ({
    favoriteIds:
      ownerId === userId
        ? favoriteIds
        : new Set<string>(),
    loading:
      Boolean(userId)
      && ownerId !== userId,
    isFavorite,
    toggleFavorite,
  }), [
    favoriteIds,
    ownerId,
    userId,
    isFavorite,
    toggleFavorite,
  ])
}
