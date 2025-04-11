export default function PaginationSearch({
  totalProducts,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalProducts / 5);

  return (
    <>
      <button
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      <button
        onClick={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </>
  );
}
