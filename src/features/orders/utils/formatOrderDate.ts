import type { Timestamp } from 'firebase/firestore'

export function formatOrderDate(
  value: Timestamp | null,
  locale: string,
) {
  if (!value) return '—'

  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(value.toDate())
}
