import React, { useState } from "react";
import serviceData from "./Service";

import "./Services.css";

const Services = () => {
  const [flippedCard, setFlippedCard] = useState(null);

  const handleLearnMoreClick = (id) => {
    setFlippedCard((prev) => (prev === id ? null : id)); 
  };

  return (
    <div className="services">
      <h1>Our Services</h1>
      <p className="intro-text">
        Explore our wide range of services designed to help your business
        succeed in the digital world.
      </p>
      <div className="service-grid">
        {serviceData.map(({ id, logo: Icon, serviceName, description }) => (
          <div
            key={id}
            className={`service-card ${flippedCard === id ? "flipped" : ""}`}
          >
            <div className="card-front">
              <Icon size={40} className="service-icon" />
              <h3>{serviceName}</h3>
              <button
                className="learn-more-button"
                onClick={() => handleLearnMoreClick(id)}
              >
                Learn More
              </button>
            </div>
            <div className="card-back">
              <p>{description}</p>
              <button
                className="go-back-button"
                onClick={() => handleLearnMoreClick(id)}
              >
                Go Back
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
