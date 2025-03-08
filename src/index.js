import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import bootstrap from 'bootstrap';

// If using React 18, you might consider removing StrictMode if you experience issues:
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Removing StrictMode can help avoid double-render issues with react-beautiful-dnd
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);