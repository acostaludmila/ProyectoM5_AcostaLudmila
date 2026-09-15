import VariantOptionGroup from '../VariantOptionGroup/VariantOptionGroup'

interface ColorSelectorProps {
  label: string
  colors: string[]
  value: string
  onChange: (color: string) => void
}

function ColorSelector(props: ColorSelectorProps) {
  return (
    <VariantOptionGroup
      label={props.label}
      options={props.colors}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default ColorSelector
