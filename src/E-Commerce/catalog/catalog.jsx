import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./catalog.css";

const products = [
  { id: 1, name: "Men's T-Shirt", price: "$25", image: "/images/men-fashion.jpg" },
  { id: 2, name: "Women's Dress", price: "$40", image: "/images/women-fashion.jpg" },
  { id: 3, name: "Kids' Jacket", price: "$30", image: "/images/kid-1.jpg" },
];

const Catalog = ({ onLogout, onAddToCart }) => {
  const navigate = useNavigate();

  // Local state to track products that have been added to cart
  const [addedProducts, setAddedProducts] = useState([]);

  // Handles Logout
  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate("/");
  };

  // When user clicks "Add to Cart"
  const handleAddToCartClick = (product) => {
    // Call the parent’s function to add item to global cart
    onAddToCart(product);
    // Record this product ID as "added" locally
    setAddedProducts([...addedProducts, product.id]);
  };

  return (
    <div className="catalog-container">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
        <button onClick={() => navigate("/cart")} className="btn btn-secondary">Go to Cart</button>
      </div>
      <h2>Product Catalogue</h2>
      <div className="product-grid">
        {products.map((product) => {
          const isAdded = addedProducts.includes(product.id);
          return (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h4>{product.name}</h4>
              <p>{product.price}</p>
              <button
                className="btn btn-primary"
                onClick={() => handleAddToCartClick(product)}
                disabled={isAdded}
              >
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
