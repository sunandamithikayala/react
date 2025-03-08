import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./ThemeLazy/styles.css";

const Home = () => (
  <div className="page home">
    <h1>Welcome to the Home Page!</h1>
    <p>This is a dynamic React application.</p>
  </div>
);

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    <p>This page contains information about our app.</p>
  </div>
);

const Contact = () => (
  <div className="page contact">
    <h1>Contact Us</h1>
    <p>Reach out to us anytime!</p>
  </div>
);

const NotFound = () => (
  <div className="page">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
