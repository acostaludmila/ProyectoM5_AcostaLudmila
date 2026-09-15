import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../../auth/hooks/useAuth'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useFavorites } from '../../hooks/useFavorites'
import styles from './FavoriteButton.module.css'

interface Props {
  productId: string
  compact?: boolean
}

function FavoriteButton({
  productId,
  compact = false,
}: Props) {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  const {
    isFavorite,
    toggleFavorite,
  } = useFavorites()
  const { t } = useLanguage()
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)
  const favorite = isFavorite(productId)

  const click = async () => {
    if (!isAuthenticated) {
      navigate('/login')
      return
    }

    setBusy(true)
    setFailed(false)

    try {
      await toggleFavorite(productId)
    } catch {
      setFailed(true)
    } finally {
      setBusy(false)
    }
  }

  const label = failed
    ? t('favorites.error')
    : t(
        favorite
          ? 'favorites.remove'
          : 'favorites.add',
      )

  return (
    <button
      type="button"
      disabled={busy}
      title={label}
      aria-label={label}
      className={[
        styles.button,
        compact ? styles.compact : '',
        favorite ? styles.active : '',
      ].join(' ')}
      onClick={() => void click()}
    >
      {failed && compact
        ? '!'
        : compact
          ? (favorite ? '★' : '☆')
          : t(
              favorite
                ? 'favorites.saved'
                : 'favorites.save',
            )}
    </button>
  )
}

export default FavoriteButton
