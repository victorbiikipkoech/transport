// src/components/Features.js

import React from 'react';
import './Features.css';  // Create styles for the features section

function Features() {
  return (
    <section className="features-section" id="features">
      <h2>Why Choose Us?</h2>
      <div className="features-grid">
        <div className="feature">
          <h3>Fast Booking</h3>
          <p>Book a ride in just a few clicks. No waiting, no hassle.</p>
        </div>
        <div className="feature">
          <h3>Safe Rides</h3>
          <p>All drivers are vetted and vehicles are regularly checked for safety.</p>
        </div>
        <div className="feature">
          <h3>Affordable Prices</h3>
          <p>Get the best value for your money with competitive pricing.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
