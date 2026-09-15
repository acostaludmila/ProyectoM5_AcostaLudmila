import type {
  ProductFormValues,
} from '../../types/adminProduct.types'
import ProductCoreFields from './ProductCoreFields'
import ProductMediaFields from './ProductMediaFields'
import ProductSearchFields from './ProductSearchFields'

interface Props {
  values: ProductFormValues
  onChange: <K extends keyof ProductFormValues>(
    key: K,
    value: ProductFormValues[K],
  ) => void
}

function ProductFormFields({
  values,
  onChange,
}: Props) {
  return (
    <>
      <ProductCoreFields
        values={values}
        onChange={onChange}
      />
      <ProductSearchFields
        values={values}
        onChange={onChange}
      />
      <ProductMediaFields
        values={values}
        onChange={onChange}
      />
    </>
  )
}

export default ProductFormFields
