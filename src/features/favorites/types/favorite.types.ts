export interface FavoritesContextValue {
  favoriteIds: Set<string>
  loading: boolean
  isFavorite: (productId: string) => boolean
  toggleFavorite: (productId: string) => Promise<void>
}
