// CategoryProducts.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function CategoryPage() {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${category}`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, [category]);
    
    return (
        <div>
            {/* <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1> */}
            <div className="product-container">
      {products.map(product => (
        <div key={product.id} className="product-card">
         
          <h3 className='product-name'>{product.name}</h3>
          <img  className="product-img"src={product.image_url} alt={product.name} /> 
          <div className='product-details'>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>In Stock: {product.stock_quantity}</p>
          </div>
        </div>
      ))}
    </div>

        </div>
    );
}

export default CategoryPage;
