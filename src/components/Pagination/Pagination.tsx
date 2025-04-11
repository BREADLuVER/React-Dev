import React from "react";
import usePagination from "./usePagination.tsx";
import "./styles.css";

interface PaginationProps<T> {
  data: T[];
  page: number;
  pageSize: number;
  onPageChange: (newPage: number) => void;
  renderItem: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string | number;
}

function Pagination<T>({
  data = [],
  page = 1,
  pageSize = 10,
  onPageChange,
  renderItem,
  keyExtractor,
}: PaginationProps<T>) {
  const { paginatedData, totalPages } = usePagination(data, page, pageSize);

  return (
    <div className="pagination">
      <div className="items">
        {paginatedData.map((item) => (
          <div key={keyExtractor(item)}>{renderItem(item)}</div>
        ))}
      </div>

      <div className="controls">
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1}>
          Prev
        </button>

        <span className="page">
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
