import { useState } from 'react'
import Button from '../../../../components/ui/Button/Button'
import { useCart } from '../../../cart/hooks/useCart'
import { useLanguage } from '../../../language/hooks/useLanguage'
import type { Product } from '../../types/product.types'
import {
  getProductColors,
  getProductSizes,
  getVariantStock,
} from '../../utils/productStock'
import VariantSelector from '../VariantSelector/VariantSelector'
import styles from './ProductPurchasePanel.module.css'

interface ProductPurchasePanelProps {
  product: Product
}

function ProductPurchasePanel({
  product,
}: ProductPurchasePanelProps) {
  const { addItem } = useCart()
  const { t } = useLanguage()
  const colors = getProductColors(product.variants)
  const [color, setColor] = useState(colors[0] ?? '')
  const [size, setSize] = useState(
    getProductSizes(product.variants, colors[0] ?? '')[0] ?? '',
  )

  if (product.variants.length === 0) return null

  const sizes = getProductSizes(product.variants, color)
  const stock = getVariantStock(product.variants, color, size)

  const selectColor = (nextColor: string) => {
    setColor(nextColor)
    setSize(getProductSizes(product.variants, nextColor)[0] ?? '')
  }

  const addToCart = () => {
    if (stock <= 0) return

    addItem({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0] ?? '',
      color,
      size,
      stock,
    })
  }

  return (
    <div className={styles.panel}>
      <VariantSelector
        colors={colors}
        sizes={sizes}
        color={color}
        size={size}
        stock={stock}
        colorLabel={t('product.color')}
        sizeLabel={t('product.size')}
        stockLabel={t('product.stock')}
        outOfStockLabel={t('product.outOfStock')}
        onColorChange={selectColor}
        onSizeChange={setSize}
      />

      <Button disabled={stock <= 0} onClick={addToCart}>
        {t('product.addToCart')}
      </Button>
    </div>
  )
}

export default ProductPurchasePanel
