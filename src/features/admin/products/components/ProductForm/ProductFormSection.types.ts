import type {
  ProductFormValues,
} from '../../types/adminProduct.types'

export type ProductFormChange =
  <K extends keyof ProductFormValues>(
    key: K,
    value: ProductFormValues[K],
  ) => void

export interface ProductFormSectionProps {
  values: ProductFormValues
  onChange: ProductFormChange
}
