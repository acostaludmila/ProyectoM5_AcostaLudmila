import type { PropsWithChildren } from 'react'
import { useFavoritesState } from '../hooks/useFavoritesState'
import { FavoritesContext } from './FavoritesContext'

export function FavoritesProvider({
  children,
}: PropsWithChildren) {
  const value = useFavoritesState()

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}
