interface Pagination {
  page: number;
  pageSize: number;
  pageCount?: number;
  total?: number;
}

export interface CommonResponse<T> {
  data: T;
  meta?: { pagination: Pagination };
}

export interface SelectOption {
  label: string;
  value: string | number;
}
