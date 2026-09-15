import { useState } from 'react'
import { Link } from 'react-router-dom'
import ConfirmDialog from '../../../../components/ui/ConfirmDialog/ConfirmDialog'
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
  const [confirming, setConfirming] = useState(false)

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
    setConfirming(false)
    onNavigate?.()
  }

  return (
    <>
      <button
        type="button"
        className={styles.action}
        onClick={() => setConfirming(true)}
      >
        {t('auth.logout')}
      </button>

      <ConfirmDialog
        open={confirming}
        title={t('auth.logoutConfirm.title')}
        description={t('auth.logoutConfirm.description')}
        cancelLabel={t('common.cancel')}
        confirmLabel={t('auth.logout')}
        onCancel={() => setConfirming(false)}
        onConfirm={() => void handleLogout()}
      />
    </>
  )
}

export default AuthNavAction
