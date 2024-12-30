import React, { useState } from "react";
import "../CSS/hero.css";
import PopupForm from "./popupform.js";
import TableComponent from "./tablecomponent.js"; // Import TableComponent
import Google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import pint from "../assets/pint.png";
import twitch from "../assets/twitch.png";
import profile from "../assets/profile.jpg";

const Hero = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState([]); // State to store submitted data

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  const handleFormSubmit = (data) => {
    setFormData((prevData) => [...prevData, data]); // Append new data
    console.log(formData); // Check if the data is being updated
    setFormOpen(false); // Close the form
  };
  

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Simplify Your Life with Our Todo App</h1>
        <p className="hero-description">
          Stay organized and boost your productivity with our intuitive todo website. Experience a modern approach to task management that fits your lifestyle.
        </p>
        <div className="hero-buttons">
          <button className="hero-btn get-started-btn" onClick={handleOpenForm}>
            Start Organizing
          </button>
          <button className="hero-btn learn-more-btn">Learn more</button>
        </div>
      </div>

      <div className="features-section">
        <div className="features-text">
          <h2>Organize.<br />Achieve.<br />Relax.</h2>
          <p>
            Turn clutter into clarity, chaos into control, and dreams into done. Bold visions into market success.
          </p>
          <div className="features-buttons">
            <button className="features-btn" onClick={handleOpenForm}>Start Organizing Today</button>
            <button className="features-btn">Discover Features</button>
          </div>
        </div>
        <div className="features-image">
          <div className="image-container">
            <img src={profile} alt="Profile" className="profile-image" /> 
            <div className="profile-caption">
              <p>Your Tasks. Our Tools.</p>
              <p className="profile-name">Freddie Halvorson</p>
              <p className="profile-title">Chief Productivity Enthusiast</p>
            </div>
          </div>
        </div>
      </div>

      <div className="partners-section">
        <img src={Google} alt="Google" className="partner-logo" /> 
        <img src={facebook} alt="Facebook" className="partner-logo" />
        <img src={youtube} alt="YouTube" className="partner-logo" />
        <img src={pint} alt="Pinterest" className="partner-logo" />
        <img src={twitch} alt="Twitch" className="partner-logo" />
      </div>

      {isFormOpen && <PopupForm onFormSubmit={handleFormSubmit} onClose={handleCloseForm} />}

      {/* Render TableComponent if there is form data */}
      {formData.length > 0 && <TableComponent data={formData} />}

    </section>
  );
};

export default Hero;
