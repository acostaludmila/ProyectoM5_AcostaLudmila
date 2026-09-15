import { useState } from 'react'
import Button from '../../../../components/ui/Button/Button'
import { useLanguage } from '../../../language/hooks/useLanguage'
import { useReorder } from '../../hooks/useReorder'
import type { OrderItem } from '../../types/order.types'
import styles from './ReorderButton.module.css'

interface Props {
  items: OrderItem[]
}

function ReorderButton({ items }: Props) {
  const { reorder, loading } = useReorder()
  const { t } = useLanguage()
  const [message, setMessage] = useState('')

  const click = async () => {
    const result = await reorder(items)

    if (result.added === 0) {
      setMessage(t('orders.reorderUnavailable'))
    } else if (result.skipped > 0) {
      setMessage(t('orders.reorderPartial'))
    } else {
      setMessage(t('orders.reorderSuccess'))
    }
  }

  return (
    <div className={styles.wrapper}>
      <Button disabled={loading} onClick={() => void click()}>
        {loading
          ? t('orders.reordering')
          : t('orders.reorder')}
      </Button>
      {message && (
        <span className={styles.message}>{message}</span>
      )}
    </div>
  )
}

export default ReorderButton
