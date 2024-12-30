import React from "react";
import "../CSS/testimonial.css";
import test from "../assets/test.png"

const CustomerTestimonials = () => {
  return (
    <div className="testimonial-container">
      <h2 className="testimonial-heading">Customer Testimonials</h2>
      <p className="testimonial-subheading">
        This tool has transformed my productivity and organization!
      </p>
      <div className="testimonial-content">
        <div className="testimonial-quote">
          <p className="quote-text">
            "Using this website has made my tasks so much easier! I can't
            imagine my day without it."
          </p>
          <div className="quote-author">
            <div className="author-icon"></div>
            <div>
              <p className="author-name">Sheri Cronin</p>
              <p className="author-title">Project Manager, TechCorp</p>
            </div>
          </div>
          <div className="navigation-buttons">
            <button className="nav-button">&lt;</button>
            <button className="nav-button">&gt;</button>
          </div>
        </div>
        <div className="testimonial-image">
          <img
            src={test}
            alt="Sheri Cronin"
            className="profile-image"
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;
