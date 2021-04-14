export interface PaginationResponse<T> {
  list: T[];
  isLastPage: boolean;
}
