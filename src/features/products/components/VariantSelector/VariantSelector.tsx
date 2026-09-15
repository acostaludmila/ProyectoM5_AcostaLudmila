import { useState } from 'react'
import type { ProductVariant } from '../../types/productVariant.types'
import {
  getProductColors,
  getProductSizes,
  getVariantStock,
} from '../../utils/productStock'
import ColorSelector from '../ColorSelector/ColorSelector'
import SizeSelector from '../SizeSelector/SizeSelector'
import StockIndicator from '../StockIndicator/StockIndicator'
import styles from './VariantSelector.module.css'

interface VariantSelectorProps {
  variants: ProductVariant[]
  colorLabel: string
  sizeLabel: string
  stockLabel: string
  outOfStockLabel: string
}

function VariantSelector({
  variants,
  colorLabel,
  sizeLabel,
  stockLabel,
  outOfStockLabel,
}: VariantSelectorProps) {
  const colors = getProductColors(variants)
  const [color, setColor] = useState(colors[0] ?? '')
  const initialSizes = getProductSizes(variants, color)
  const [size, setSize] = useState(initialSizes[0] ?? '')

  if (variants.length === 0) return null

  const sizes = getProductSizes(variants, color)
  const stock = getVariantStock(variants, color, size)

  const selectColor = (nextColor: string) => {
    const nextSizes = getProductSizes(variants, nextColor)
    setColor(nextColor)
    setSize(nextSizes[0] ?? '')
  }

  return (
    <div className={styles.selector}>
      <ColorSelector
        label={colorLabel}
        colors={colors}
        value={color}
        onChange={selectColor}
      />
      <SizeSelector
        label={sizeLabel}
        sizes={sizes}
        value={size}
        onChange={setSize}
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
