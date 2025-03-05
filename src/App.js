import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./hooks/Login";
import Catalog from "./catalog/catalog";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to update authentication state
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route
        path="/catalog"
        element={isAuthenticated ? <Catalog /> : <Navigate to="/" />}
      />
    </Routes>
  );
};

export default App;
