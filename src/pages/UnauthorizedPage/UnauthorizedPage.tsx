import { Link } from 'react-router-dom'
import { useLanguage } from '../../features/language/hooks/useLanguage'
import styles from './UnauthorizedPage.module.css'

function UnauthorizedPage() {
  const { t } = useLanguage()

  return (
    <section className={styles.page}>
      <span className={styles.code}>403</span>
      <h1>{t('unauthorized.title')}</h1>
      <p>{t('unauthorized.description')}</p>

      <Link to="/" className={styles.link}>
        {t('unauthorized.returnHome')}
      </Link>
    </section>
  )
}

export default UnauthorizedPage
