import styles from './StockIndicator.module.css'

interface StockIndicatorProps {
  stock: number
  stockLabel: string
  outOfStockLabel: string
}

function StockIndicator({
  stock,
  stockLabel,
  outOfStockLabel,
}: StockIndicatorProps) {
  return (
    <p className={styles.stock}>
      {stock > 0
        ? `${stockLabel}: ${stock}`
        : outOfStockLabel}
    </p>
  )
}

export default StockIndicator
