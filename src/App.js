import React from "react";
import { Route, Routes, Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./ThemeLazy/styles.css";

// Home Page
import { Carousel } from "react-bootstrap";

const Home = () => (
  <div className="page-home">
    <h1>Welcome to the Home Page!</h1>
    <p>This is a dynamic React application.</p>

    {/* Bootstrap Carousel */}
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/men-1.jpg"}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Experience seamless navigation.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/women-5.jpg"}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Discover new features and updates.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={process.env.PUBLIC_URL + "/images/wome-3.jpg"}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Stay connected with us!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
);

// About Page


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



// Contact Page
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

// Fetching Product from FakeStore API
const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Product not found");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Product not found...</div>;

  return (
    <div className="page post">
      <h1>{post.title}</h1>
      <img src={post.image} alt={post.title} style={{ maxWidth: "200px" }} />
      <p>{post.description}</p>
      <p><strong>Price:</strong> ${post.price}</p>
      <p><strong>Category:</strong> {post.category}</p>
    </div>
  );
};

// 404 Page
const NotFound = () => (
  <div className="not-found">
    <h1>404 - Page Not Found</h1>
    <p>Sorry, the page you're looking for doesn't exist.</p>
    <img src="/images/404-error.png" alt="Page Not Found" className="not-found-image" />
    <br />
    <a href="/" className="btn btn-primary">Go to Home</a>
  </div>
);
// Main App Component
const App = () => {
  return (
    <>
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
          <Route path="/post/:id" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
