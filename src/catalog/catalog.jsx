import React from "react";
import "./catalog.css";

const products = [
  { id: 1, name: "Men's T-Shirt", price: "$25", image: "/images/men-fashion.jpg" },
  { id: 2, name: "Women's Dress", price: "$40", image: "/images/women-fashion.jpg" },
  { id: 3, name: "Kids' Jacket", price: "$30", image: "/images/kid-1.jpg" },
];

const Catalog = () => {
  return (
    <div className="catalog-container">
      <h2>Product Catalogue</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>{product.price}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
