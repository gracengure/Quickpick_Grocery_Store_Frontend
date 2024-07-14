import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductSpecs() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: '',
    stock_quantity: '',
    description: '',
    supplier: ''
  });

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setFormData({
          name: data.name,
          price: data.price,
          category: data.category,
          stock_quantity: data.stock_quantity,
          description: data.description,
          supplier: data.supplier
        });
      })
      .catch((error) => console.error("Error fetching product details:", error));
  }, [productId]);

  const handleDelete = () => {
    const token = localStorage.getItem('access_token'); 
    fetch(`http://127.0.0.1:5000/products/${productId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${token}`, 
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product deleted successfully");
          window.location.href = "/"; 
        } else {
          throw new Error("Failed to delete product");
        }
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    fetch(`http://127.0.0.1:5000/products/${productId}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Product updated successfully");
          setIsEditing(false);
        } else {
          throw new Error("Failed to update product");
        }
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const goBack = () => {
    window.history.back();
  };

  // Check if user is an admin
  const isAdmin = localStorage.getItem('role') === 'admin'; // Example role check

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="property-specs-container">
      {isEditing ? (
        <div className="edit-form">
          <h2>Edit Product</h2>
          <form onSubmit={handleUpdate}>
            <div>
              <label>Name:</label>
              <br></br>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <label>Price:</label>
              <br></br>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <label>Category:</label>
              <br></br>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <label>Stock Quantity:</label>
              <br></br>
              <input
                type="number"
                name="stock_quantity"
                value={formData.stock_quantity}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <div>
              <label>Description:</label>
              <br></br>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div>
              <label>Supplier:</label>
              <br></br>
              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
              />
            </div>
            <br></br>
            <button type="button" onClick={handleUpdate}>Update Product</button>
          </form>
          <br></br>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div className="product-details">
          <h2 className="product-name">{product.name}</h2>
          <img src={product.image_url} alt={product.name} className="product-image" />
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
          {isAdmin && (
            <div>
              <button className="edit-btn" onClick={() => setIsEditing(true)}>
                Edit Product
              </button>
              <button className="delete-btn" onClick={handleDelete}>
                DELETE PRODUCT
              </button>
            </div>
          )}
          <button className="go-back-btn" onClick={goBack}>
            GO BACK
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductSpecs;
