

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
//import './Footer.css';
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
          <h3>AI Inventory</h3>
          <p>Manage, explore, and contribute to AI models for NLP, Vision, and more. Join our community and scale your AI workflow.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/models">Models</Link>
          <Link to="/add-model">Add Model</Link>
          <Link to="/register">Register</Link>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2025 AI Inventory. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
