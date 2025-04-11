import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import PaginationSearch from "./PaginationSearch";

export default function SearchProduct() {
  const [inputVal, setInputVal] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 5;
  const lastItemIdx = currentPage * limit;
  const {
    data: products,
    loading,
    error,
  } = useFetch(
    searchTerm
      ? `https://dummyjson.com/products/search?q=${searchTerm}&limit=${limit}&skip=${lastItemIdx}`
      : null
  );
  const handleSubmit = () => {
    setSearchTerm(inputVal);
  };

  return (
    <>
      {/* <form action=""> */}
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleSubmit}>Search</button>
      {/* </form> */}
      {loading && <div>Searching...</div>}
      {products && (
        <div>
          {products.products.map((product) => {
            return <h5 key={product.id}>{product.title}</h5>;
          })}
        </div>
      )}
      <PaginationSearch
        totalProducts={products && products.total}
        onPageChange={setCurrentPage}
        currentPage={currentPage}
      />
    </>
  );
}
