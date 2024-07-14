import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Snackbar from './snackbar';

function CartModal({ isOpen, onClose, cartItems, removeFromCart, updateCartItemQuantity, handleCheckout }) {
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleOrderSuccess = () => {
    setOrderSuccess(true);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        <h2>Cart Items</h2>
        {cartItems.length > 0 ? (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td><img src={item.image_url} alt={item.name} width="50" height="50" /></td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateCartItemQuantity(item.id, parseInt(e.target.value))}
                      />
                    </td>
                    <td><button onClick={() => removeFromCart(item.id)}>Remove</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="total-section">
              <p>Total Price: ${totalPrice.toFixed(2)}</p>
              <button className="checkout-button" onClick={() => { handleCheckout(); handleOrderSuccess(); }}>Checkout</button>
            </div>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>

      {/* Snackbar for success message */}
      {orderSuccess && (
        <Snackbar message="Order was created successfully!" onClose={() => setOrderSuccess(false)} />
      )}
    </div>
  );
}

export default CartModal;
