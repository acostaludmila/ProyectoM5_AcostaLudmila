import { Link } from 'react-router-dom'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useAuth } from '../../hooks/useAuth'
import { logoutUser } from '../../services/logoutUser'
import styles from './AuthNavAction.module.css'

interface AuthNavActionProps {
  onNavigate?: () => void
}

function AuthNavAction({ onNavigate }: AuthNavActionProps) {
  const { isAuthenticated, loading } = useAuth()
  const { t } = useLanguage()

  if (loading) return null

  if (!isAuthenticated) {
    return (
      <Link
        to="/login"
        className={styles.action}
        onClick={onNavigate}
      >
        {t('auth.login.submit')}
      </Link>
    )
  }

  const handleLogout = async () => {
    await logoutUser()
    onNavigate?.()
  }

  return (
    <button
      type="button"
      className={styles.action}
      onClick={() => void handleLogout()}
    >
      {t('auth.logout')}
    </button>
  )
}

export default AuthNavAction
