export interface SelectMenuOption {
  value: string
  label: string
}

export interface SelectMenuProps {
  value: string
  options: SelectMenuOption[]
  ariaLabel: string
  onChange: (value: string) => void
}
