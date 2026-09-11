import { useLanguage } from '../../features/language/hooks/useLanguage'
import styles from './CollectionsPage.module.css'

const collections = [
  {
    name: 'collections.clothing.name',
    description: 'collections.clothing.description',
  },
  {
    name: 'collections.jewelry.name',
    description: 'collections.jewelry.description',
  },
  {
    name: 'collections.essentials.name',
    description: 'collections.essentials.description',
  },
] as const

function CollectionsPage() {
  const { t } = useLanguage()

  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('collections.eyebrow')}</p>
        <h1 className={styles.title}>{t('collections.title')}</h1>

        <div className={styles.grid}>
          {collections.map(({ name, description }) => (
            <article key={name} className={styles.card}>
              <h2>{t(name)}</h2>
              <p>{t(description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsPage
