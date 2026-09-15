import type {
  ProductFormSectionProps,
} from './ProductFormSection.types'
import ProductCommerceFields from './ProductCommerceFields'
import ProductIdentityFields from './ProductIdentityFields'

function ProductCoreFields(
  props: ProductFormSectionProps,
) {
  return (
    <>
      <ProductIdentityFields {...props} />
      <ProductCommerceFields {...props} />
    </>
  )
}

export default ProductCoreFields
