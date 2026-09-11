import { useState } from 'react'
import { useLanguage } from '../../../features/language/hooks/useLanguage'
import type { Language } from '../../../features/language/types/language.types'
import HeaderControlButton from '../HeaderControlButton/HeaderControlButton'
import styles from './LanguageSelector.module.css'

const languages: Language[] = ['en', 'es']

function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const selectLanguage = (nextLanguage: Language) => {
    setLanguage(nextLanguage)
    setIsOpen(false)
  }

  return (
    <div className={styles.wrapper}>
      <HeaderControlButton
        className={styles.trigger}
        aria-label={t('language.label')}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className={styles.label}>{language.toUpperCase()}</span>
        <span
          className={`${styles.chevron} ${isOpen ? styles.open : ''}`}
          aria-hidden="true"
        />
      </HeaderControlButton>

      {isOpen && (
        <div className={styles.menu} role="menu">
          {languages.map((option) => (
            <button
              key={option}
              type="button"
              role="menuitemradio"
              aria-checked={language === option}
              className={`${styles.option} ${
                language === option ? styles.active : ''
              }`}
              onClick={() => selectLanguage(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageSelector
