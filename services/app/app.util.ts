export interface Pagination {
  page: number
  total?: number
  pageSize?: number
  pageCount?: number
}

export interface ListState<T> extends Pagination {
  data: T[]
  isLoading?: boolean
}
