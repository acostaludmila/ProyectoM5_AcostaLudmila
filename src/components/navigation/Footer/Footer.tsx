import { useLanguage } from '../../../features/language/hooks/useLanguage'
import styles from './Footer.module.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>AURELLE</p>

        <p className={styles.copy}>
          © {currentYear} AURELLE. {t('footer.tagline')}.
        </p>
      </div>
    </footer>
  )
}

export default Footer
