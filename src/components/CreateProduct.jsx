import React, { useState } from "react";
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
  const navigate = useNavigate();

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

      setName("");
      setImage("")
      setPrice("");
      setCategory("");
      setStockQuantity("");
      setDescription("");
      setSupplier("");
    } catch (error) {
      console.error("Error creating product:", error.message);
    }
  };

  return (
    <div className="create-product">
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          textAlign: "center",
          height: "34px",
          color: "white",
          backgroundColor: "green",
          borderRadius: "5px",
          border: "transparent",
        }}
      >
        {showForm ? "Hide Form" : "Add Product"}
      </button>

      {showForm && (
        <div>
          <div className="cardBar">
            <h2>Create Product</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Name:
                <br />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <label>
                Image Url:
                <br />
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
              <br></br>
              <label>
                Price:
                <br />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <br />
              <label>
                Category:
                <br />
                <input
                  type="text"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </label>
              <br />
              <label>
                Stock Quantity:
                <br />
                <input
                  type="number"
                  value={stockQuantity}
                  onChange={(e) => setStockQuantity(e.target.value)}
                />
              </label>
              <br />
              <label>
                Description:
                <br />
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <br />
              <label>
                Supplier:
                <br />
                <input
                  type="text"
                  value={supplier}
                  onChange={(e) => setSupplier(e.target.value)}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="card">
            <h2 className="product-name">{product.name}</h2>
            <img className="product-img" src={product.image_url} alt={product.name} />
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
