import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CreateProduct() {
  const [showModal, setShowModal] = useState(false); // State for modal visibility
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
    const userLoggedIn = localStorage.getItem("access_token") !== null; // Example check
    setIsLoggedIn(userLoggedIn);

    // Check if user is admin (example: check role in localStorage)
    const userIsAdmin = localStorage.getItem("role") === "admin"; // Example role check
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

    const token = localStorage.getItem("access_token");

    try {
      const response = await fetch("http://127.0.0.1:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
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
      setShowModal(false); // Close the modal after submission
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
        <Button variant="success"style={{
          textAlign: "center",
          height: "34px",
          color: "white",
          width:"100px",
          backgroundColor: "green",
          borderRadius: "5px",
          border: "transparent",
          marginBottom: "10px", // Add some space below the button
        }} onClick={() => setShowModal(true)}>
          Add Product
        </Button>
      )}

      <Modal className="" show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label">
                Name:
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                Image Url:
                <input
                  type="text"
                  className="form-control"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                Price:
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                Category:
                <input
                  type="text"
                  className="form-control"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                Stock Quantity:
                <input
                  type="number"
                  className="form-control"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                Description:
                <textarea
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </label>
              <label className="form-label">
                Supplier:
                <input
                  type="text"
                  className="form-control"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                  required
                />
              </label>
            </div>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </form>
        </Modal.Body>
      </Modal>

      <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <h2 className="product-name">{product.name}</h2>
            <img
              className="product-img"
              src={product.image}
              alt={product.name}
            />
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
