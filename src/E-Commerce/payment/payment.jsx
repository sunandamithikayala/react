import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./payment.css";

const Payment = () => {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Simulate payment processing or call your payment API here
    setOrderPlaced(true);

    // After a short delay, redirect back to the catalog
    setTimeout(() => {
      navigate("/catalog");
    }, 3000);
  };

  // If order is placed, show confirmation message
  if (orderPlaced) {
    return (
      <div className="payment-container">
        <h2>Order Placed!</h2>
        <p>Thank you for your purchase. You will be redirected to the catalog shortly...</p>
      </div>
    );
  }

  // Otherwise, display the payment form
  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handlePaymentSubmit}>
        <div className="form-group">
          <label>Card Number:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default Payment;
