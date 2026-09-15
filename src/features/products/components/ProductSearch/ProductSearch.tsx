import styles from './ProductSearch.module.css'

interface ProductSearchProps {
  value: string
  label: string
  onChange: (value: string) => void
}

function ProductSearch({
  value,
  label,
  onChange,
}: ProductSearchProps) {
  return (
    <label className={styles.search}>
      <span className={styles.srOnly}>{label}</span>
      <input
        type="search"
        value={value}
        placeholder={label}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  )
}

export default ProductSearch
