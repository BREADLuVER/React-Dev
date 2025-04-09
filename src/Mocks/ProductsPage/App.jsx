import React, { useEffect, useState } from "react";
import "./ProductList.css";

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  function handleProductClick(productId) {
    const product = products.find((p) => p.id === productId);
    setSelectedProduct(product);
  }

  function handleCloseModal() {
    setSelectedProduct(null);
  }

  return (
    <div className="product-list">
      <h1>Product List</h1>
      <ul className="product-grid">
        {products.map((product) => (
          <li
            key={product.id}
            className="product-item"
            onClick={() => handleProductClick(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">{product.price}</p>
          </li>
        ))}
      </ul>

      {selectedProduct && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="modal-image"
            />
            <h2>{selectedProduct.title}</h2>
            <p className="modal-price">${selectedProduct.price}</p>
            <button className="close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
