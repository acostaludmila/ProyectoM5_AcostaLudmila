import { useState } from 'react'
import {
  DEFAULT_DISCOVERY_FILTERS,
  DEFAULT_PRODUCT_SORT,
} from '../constants/discovery'
import type {
  ProductDiscoveryFilters,
  ProductSort,
} from '../types/productDiscovery.types'
import type {
  ProductCategory,
} from '../types/product.types'

export function useProductDiscoveryControls(
  resetVisible: () => void,
) {
  const [search, setSearchState] = useState('')
  const [filters, setFiltersState] =
    useState<ProductDiscoveryFilters>(
      DEFAULT_DISCOVERY_FILTERS,
    )
  const [sort, setSortState] =
    useState<ProductSort>(DEFAULT_PRODUCT_SORT)

  const update = (
    action: () => void,
  ) => {
    action()
    resetVisible()
  }

  const setSearch = (value: string) => {
    update(() => setSearchState(value))
  }

  const setFilters = (
    value: ProductDiscoveryFilters,
  ) => {
    update(() => setFiltersState(value))
  }

  const setSort = (value: ProductSort) => {
    update(() => setSortState(value))
  }

  const setCategory = (
    category: ProductCategory | 'all',
  ) => {
    setFilters({
      ...filters,
      category,
    })
  }

  return {
    search,
    filters,
    sort,
    setSearch,
    setFilters,
    setSort,
    setCategory,
  }
}
