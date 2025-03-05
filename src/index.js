import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GreetingForm from "./Greeting/GreetingForm"; // Importing Greeting Component
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GreetingForm /> {/* Directly calling the component here */}
  </React.StrictMode>
);

reportWebVitals();