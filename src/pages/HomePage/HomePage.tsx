import { Link } from 'react-router-dom'
import { useLanguage } from '../../features/language/hooks/useLanguage'
import styles from './HomePage.module.css'

function HomePage() {
  const { t } = useLanguage()

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('home.tagline')}</p>

        <h1 className={styles.title}>AURELLE</h1>

        <p className={styles.description}>
          {t('home.description')}
        </p>

        <Link to="/collections" className={styles.cta}>
          {t('home.cta')}
        </Link>
      </div>
    </section>
  )
}

export default HomePage
