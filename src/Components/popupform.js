import React, { useState } from "react";
import "../CSS/popupform.css";

const PopupForm = ({ onFormSubmit, onClose }) => {
  const [formValues, setFormValues] = useState({
    fullName: "",
    number: "",
    gender: "",
    email: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // State for Thank You message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(formValues); // Pass the form data to the parent component
    setIsSubmitted(true); // Show Thank You message
    setFormValues({
      fullName: "",
      number: "",
      gender: "",
      email: "",
    });
  };

  const handleCloseThankYou = () => {
    setIsSubmitted(false);
    onClose(); // Close the popup
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {!isSubmitted ? (
          <>
            <h2 className="form-title">Get Started Today!</h2>
            <p className="form-subtitle">
              Fill in your details and take control of your tasks.
            </p>
            <form onSubmit={handleSubmit} className="popup-form">
              <div className="form-row">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formValues.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <label>Phone Number:</label>
                <input
                  type="number"
                  name="number"
                  placeholder="Enter your phone number"
                  value={formValues.number}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="gender-options">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={formValues.gender === "Male"}
                    onChange={handleInputChange}
                    required
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={formValues.gender === "Female"}
                    onChange={handleInputChange}
                    required
                  />
                  Female
                </label>
              </div>
              <div className="email-field">
                <label>Email Address:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formValues.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="terms-container">
                <input type="checkbox" name="terms" required />
                <span>
                  I agree to the <a href="#">terms and conditions</a>
                </span>
              </div>
              <button type="submit" className="submit-btn">
                Done
              </button>
            </form>
          </>
        ) : (
          <div className="confirmation-message">
            <h2>Thank You!</h2>
            <p>Thank you for your interest! We'll get back to you soon.</p>
            <button className="submit-btn" onClick={handleCloseThankYou}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
