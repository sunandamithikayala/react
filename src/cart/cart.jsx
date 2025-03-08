import React from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = ({ cartItems, onClearCart }) => {
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <button onClick={handleProceedToPayment} className="btn btn-primary">
            Proceed to Payment
          </button>
          <button onClick={onClearCart} className="btn btn-secondary">
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
