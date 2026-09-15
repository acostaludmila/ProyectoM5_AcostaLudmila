import { useLanguage } from '../../../features/language/hooks/useLanguage'
import { useTheme } from '../../../features/theme/hooks/useTheme'
import HeaderControlButton from '../HeaderControlButton/HeaderControlButton'
import styles from './ThemeToggle.module.css'

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const nextTheme = theme === 'light' ? 'dark' : 'light'
  const themeKey =
    nextTheme === 'light' ? 'theme.light' : 'theme.dark'
  const label = `${t('theme.switchTo')} ${t(themeKey)}`

  return (
    <HeaderControlButton
      aria-label={label}
      title={label}
      className={styles.button}
      onClick={toggleTheme}
    >
      {nextTheme === 'light' ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path
            d={
              'M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41' +
              'M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41'
            }
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.2 15.1A8.5 8.5 0 0 1 8.9 3.8 8.5 8.5 0 1 0 20.2 15.1Z" />
        </svg>
      )}
    </HeaderControlButton>
  )
}

export default ThemeToggle
