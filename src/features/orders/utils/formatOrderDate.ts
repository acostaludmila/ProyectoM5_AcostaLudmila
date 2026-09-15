
import type { DateValue } from '../../../types/date.types'

export function formatOrderDate(
  value: DateValue | null,
  locale: string,
) {
  if (!value) return '—'

  return new Intl.DateTimeFormat(locale, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(value.toDate())
}
