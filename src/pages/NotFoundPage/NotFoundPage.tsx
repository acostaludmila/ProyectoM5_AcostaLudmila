import { Link } from 'react-router-dom'
import { useLanguage } from '../../features/language/hooks/useLanguage'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  const { t } = useLanguage()

  return (
    <section className={styles.section}>
      <div>
        <p className={styles.code}>404</p>
        <h1 className={styles.title}>{t('notFound.title')}</h1>

        <p className={styles.description}>
          {t('notFound.description')}
        </p>

        <Link to="/" className={styles.link}>
          {t('notFound.returnHome')}
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
