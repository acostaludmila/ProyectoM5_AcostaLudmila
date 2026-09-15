import { Link, Navigate, Outlet } from 'react-router-dom'
import LanguageSelector from '../../components/ui/LanguageSelector/LanguageSelector'
import ThemeToggle from '../../components/ui/ThemeToggle/ThemeToggle'
import { useAuth } from '../../features/auth/hooks/useAuth'
import styles from './AuthLayout.module.css'

function AuthLayout() {
  const { isAuthenticated, loading } = useAuth()

  if (loading) return null
  if (isAuthenticated) return <Navigate to="/" replace />

  return (
    <main className={styles.layout}>
      <header className={styles.header}>
        <Link to="/" className={styles.brand}>
          AURELLE
        </Link>

        <div className={styles.actions}>
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </header>

      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  )
}

export default AuthLayout
