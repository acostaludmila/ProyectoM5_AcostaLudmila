export function updateFavoriteSet(
  current: Set<string>,
  productId: string,
  favorite: boolean,
) {
  const next = new Set(current)

  if (favorite) {
    next.add(productId)
  } else {
    next.delete(productId)
  }

  return next
}
