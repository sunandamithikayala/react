import React, { useState, useEffect } from "react";
import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import "./ThemeLazy/styles.css";
import { Carousel } from "react-bootstrap";

// Existing Components
const Home = () => (
  <div className="page-home">
    <h1>Welcome to the Home Page!</h1>
    <p>This is a dynamic React application.</p>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/images/men-1.jpg"} alt="First slide" />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Experience seamless navigation.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/images/women-5.jpg"} alt="Second slide" />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Discover new features and updates.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={process.env.PUBLIC_URL + "/images/wome-3.jpg"} alt="Third slide" />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Stay connected with us!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

const About = () => (
  <div className="aboutpage">
    <div className="about-container">
      <img src="/images/men-fashion.jpg" alt="E-Commerce Left" className="about-image left" />
      <div className="about-content">
        <h1>About Us</h1>
        <p>Welcome to our e-commerce platform! We are committed to providing the best online shopping experience.</p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of quality products</li>
          <li>Secure payment gateways</li>
          <li>Fast and reliable delivery</li>
          <li>24/7 customer support</li>
        </ul>
        <h3>Shop with Confidence!</h3>
        <p>We strive to make online shopping easy, safe, and enjoyable for all our customers.</p>
      </div>
      <img src="/images/kids-fashion.jpg" alt="E-Commerce Right" className="about-image right" />
    </div>
  </div>
);

const Contact = () => (
  <div className="page contact">
    <h1 className="text-white">Contact Us</h1>
    <form className="contact-form">
      <div className="my-3">
        <label className="text-white px-3 fs-5 fw-bold">Name:</label>
        <input type="text" name="name" required />
      </div>
      <div className="my-3">
        <label className="text-white px-3 fs-5 fw-bold">Email:</label>
        <input type="email" name="email" required />
      </div>
      <div>
        <label className="text-white px-3 fs-5 fw-bold">Message:</label>
        <textarea name="message" required></textarea>
      </div>
      <div className="send my-3">
        <button className="btn btn-success bi bi-phone">Contact Us</button>
      </div>
    </form>
  </div>
);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate("/");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="auth-page">
      <h1>Login</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>New user? <Link to="/signup">Sign up</Link></p>
    </div>
  );
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    localStorage.setItem("user", JSON.stringify({ email, password }));
    navigate("/login");
  };

  return (
    <div className="auth-page">
      <h1>Signup</h1>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

const App = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
