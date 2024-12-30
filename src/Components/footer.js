import React from "react";
import "../CSS/footer.css";
import image from '../assets/todolist.png'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-logo-section">
          <div className="footer-logo">
            <img
              src={image}
              alt="doList Logo"
              className="logo-image"
            />
            
          </div>
          <p className="footer-description">
            Subscribe to our newsletter for the latest features and updates
            delivered to you.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              className="newsletter-input"
              placeholder="Your email here"
            />
            <button className="newsletter-button">Join</button>
          </div>
          <p className="privacy-notice">
            By subscribing, you consent to our Privacy Policy and agree to
            receive updates.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3 className="column-heading">Useful Links</h3>
            <ul className="link-list">
              <li>Home Page</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="column-heading">Resources</h3>
            <ul className="link-list">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="column-heading">Connect With Us</h3>
            <ul className="social-links">
              <li>📘 Facebook</li>
              <li>📷 Instagram</li>
              <li>❌ X</li>
              <li>🔗 LinkedIn</li>
              <li>▶️ YouTube</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Quamura. All rights reserved.</p>
        <ul className="footer-bottom-links">
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Settings</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
