import React from "react";
import "../CSS/feature.css";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"

const Features = () => {
  const featureList = [
    {
      id: 1,
      title: "User-Friendly Interface",
      description:
        "Our platform offers seamless task management to boost your efficiency.",
      icon:logo1, 
    },
    {
      id: 2,
      title: "Collaborate & Share Effortlessly",
      description:
        "Invite team members to work together and achieve your goals faster.",
      icon: logo2, 
    },
    {
      id: 3,
      title: "Effortless Collaboration",
      description:
        "Invite team members to work together and achieve your goals faster.",
      icon: logo3, 
    },
    {
      id: 4,
      title: "Seamless Access",
      description:
        "Stay connected and manage your tasks on the go with ease.",
      icon: logo4, 
    },
  ];

  return (
    <section className="features-section">
      <h2 className="features-title">
        Transform Your Productivity with Our Innovative To-Do List Features
      </h2>
      <div className="features-container">
        {featureList.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="feature-icon">
              <img src={feature.icon} />
            </div>
            <div className="feature-number">{`0${feature.id}`}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
