import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [supplier, setSupplier] = useState("");
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin role
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in (example: check localStorage, auth tokens, etc.)
    const userLoggedIn = localStorage.getItem('access_token') !== null; // Example check
    setIsLoggedIn(userLoggedIn);

    // Check if user is admin (example: check role in localStorage)
    const userIsAdmin = localStorage.getItem('role') === 'admin'; // Example role check
    setIsAdmin(userIsAdmin);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      name,
      image,
      price,
      category,
      stock_quantity: stockQuantity,
      description,
      supplier,
    };

    try {
      const response = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      console.log("Product created successfully");
      setProducts([...products, formData]);
      navigate("/");

      // Clear form fields after submission
      clearFormFields();
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  const clearFormFields = () => {
    setName("");
    setImage("");
    setPrice("");
    setCategory("");
    setStockQuantity("");
    setDescription("");
    setSupplier("");
  };

  return (
    <div className="create-product">
      {isLoggedIn && isAdmin && (
        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            textAlign: "center",
            height: "34px",
            color: "white",
            backgroundColor: "green",
            borderRadius: "5px",
            border: "transparent",
            marginBottom: "10px", // Add some space below the button
          }}
        >
          {showForm ? "Hide Form" : "Add Product"}
        </button>
      )}

      {showForm && (
        <div>
          <div className="cardBar">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>
                  Name:
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Image Url:
                  <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Price:
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Category:
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Stock Quantity:
                  <input
                    type="number"
                    value={stockQuantity}
                    onChange={(e) => setStockQuantity(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Description:
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </label>
                <label>
                  Supplier:
                  <input
                    type="text"
                    value={supplier}
                    onChange={(e) => setSupplier(e.target.value)}
                    required
                  />
                </label>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <h2 className="product-name">{product.name}</h2>
            <img className="product-img" src={product.image} alt={product.name} />
            <div className="product-details">
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock Quantity: {product.stock_quantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateProduct;
