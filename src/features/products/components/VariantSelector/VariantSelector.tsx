import ColorSelector from '../ColorSelector/ColorSelector'
import SizeSelector from '../SizeSelector/SizeSelector'
import StockIndicator from '../StockIndicator/StockIndicator'
import styles from './VariantSelector.module.css'

interface VariantSelectorProps {
  colors: string[]
  sizes: string[]
  color: string
  size: string
  stock: number
  colorLabel: string
  sizeLabel: string
  stockLabel: string
  outOfStockLabel: string
  onColorChange: (color: string) => void
  onSizeChange: (size: string) => void
}

function VariantSelector({
  colors,
  sizes,
  color,
  size,
  stock,
  colorLabel,
  sizeLabel,
  stockLabel,
  outOfStockLabel,
  onColorChange,
  onSizeChange,
}: VariantSelectorProps) {
  return (
    <div className={styles.selector}>
      <ColorSelector
        label={colorLabel}
        colors={colors}
        value={color}
        onChange={onColorChange}
      />
      <SizeSelector
        label={sizeLabel}
        sizes={sizes}
        value={size}
        onChange={onSizeChange}
      />
      <StockIndicator
        stock={stock}
        stockLabel={stockLabel}
        outOfStockLabel={outOfStockLabel}
      />
    </div>
  )
}

export default VariantSelector
