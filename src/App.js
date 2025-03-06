import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./hooks/Login";        // Login component in src/hooks/Login.jsx
import Catalog from "./catalog/catalog";    // Catalog component in src/catalog/catalog.jsx
import Cart from "./cart/cart";             // Cart component in src/cart/cart.jsx
import Payment from "./payment/payment";    // Payment component in src/payment/payment.jsx

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Handle login success
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCartItems([]); // Optionally clear cart on logout
  };

  // Add product to cart
  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Clear the cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/catalog"
        element={
          isAuthenticated ? (
            <Catalog onLogout={handleLogout} onAddToCart={handleAddToCart} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/cart"
        element={
          isAuthenticated ? (
            <Cart cartItems={cartItems} onClearCart={handleClearCart} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/payment"
        element={isAuthenticated ? <Payment /> : <Navigate to="/" />}
      />
      <Route path="*" element={<div><h4>404: Not Found</h4></div>} />
    </Routes>
  );
}

export default App;
