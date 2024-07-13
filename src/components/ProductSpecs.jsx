import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductSpecs() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="property-specs-container">
      <h2 className="product-name">{product.name}</h2>
      <img src={product.image_url} alt={product.name} className="product-img" />
      <div className="product-details">
        <div className="property-spec">
          <span className="spec-label">Description:</span>
          <span className="spec-value">{product.description}</span>
        </div>
        <div className="property-spec">
          <span className="spec-label">Category:</span>
          <span className="spec-value">{product.category}</span>
        </div>
        <div className="property-spec">
          <span className="spec-label">Price:</span>
          <span className="spec-value">${product.price}</span>
        </div>
        <div className="property-spec">
          <span className="spec-label">Stock Quantity:</span>
          <span className="spec-value">{product.stock_quantity}</span>
        </div>
        <div className="property-spec">
          <span className="spec-label">Supplier:</span>
          <span className="spec-value">{product.supplier}</span>
        </div>
        <button className="go-back-btn" onClick={goBack}>
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default ProductSpecs;