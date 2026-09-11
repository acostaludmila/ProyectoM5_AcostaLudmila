import { useLanguage } from '../../features/language/hooks/useLanguage'
import styles from './AboutPage.module.css'

function AboutPage() {
  const { t } = useLanguage()

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('about.eyebrow')}</p>

        <h1 className={styles.title}>
          {t('about.title')}
        </h1>

        <div className={styles.copy}>
          <p>{t('about.paragraphOne')}</p>
          <p>{t('about.paragraphTwo')}</p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
