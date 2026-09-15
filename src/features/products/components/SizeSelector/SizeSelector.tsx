import VariantOptionGroup from '../VariantOptionGroup/VariantOptionGroup'

interface SizeSelectorProps {
  label: string
  sizes: string[]
  value: string
  onChange: (size: string) => void
}

function SizeSelector(props: SizeSelectorProps) {
  return (
    <VariantOptionGroup
      label={props.label}
      options={props.sizes}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default SizeSelector
