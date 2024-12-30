import React from "react";
import "../CSS/bottom.css";
import phone from "../assets/phone.png"

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src={phone}
            alt="Hand holding phone"
            className="responsive-image"
          />
        </div>
        <div className="hero-text">
          <h1 className="hero-heading">Start Organizing Your Life Today</h1>
          <p className="hero-description">
            Join us now and transform your productivity with our intuitive to-do
            list platform!
          </p>
          <div className="hero-buttons">
            <button className="primary-button">Sign Up</button>
            <button className="secondary-button">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
