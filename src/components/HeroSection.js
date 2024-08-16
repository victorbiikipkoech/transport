// src/components/HeroSection.js

import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DistanceMatrixService } from '@react-google-maps/api';
import './HeroSection.css';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

function HeroSection() {
  const [location, setLocation] = useState({ lat: -3.745, lng: -38.523 });
  const [destination, setDestination] = useState({ lat: null, lng: null });
  const [distance, setDistance] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error('Error fetching location');
        }
      );
    }
  }, []);

  const handleDestinationChange = (e) => {
    const [lat, lng] = e.target.value.split(',').map(Number);
    setDestination({ lat, lng });
  };

  const handleDistanceCalculation = (response) => {
    if (response && response.rows[0].elements[0].status === "OK") {
      setDistance(response.rows[0].elements[0].distance.text);
    } else {
      console.error("Error calculating distance");
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Ride, On Demand</h1>
        <p>Get a ride within minutes, wherever you are. Fast, convenient, and affordable.</p>
        <a href="#sign-up" className="cta-button">Get Started</a>
        <div className="destination-form">
          <label htmlFor="destination">Select a Destination:</label>
          <select id="destination" onChange={handleDestinationChange}>
            <option value="">--Select--</option>
            <option value="-3.7038, -38.5726">Location 1</option>
            <option value="-3.7438, -38.523">Location 2</option>
            <option value="-3.745, -38.523">Location 3</option>
          </select>
          {distance && <p>Distance to destination: {distance}</p>}
        </div>
      </div>
      <div className="hero-map">
        <LoadScript googleMapsApiKey="AIzaSyAhtYMDXEySUgExuCdmAzNjRI-eEkkxZdk ">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
            {destination.lat && destination.lng && (
              <>
                <Marker position={destination} />
                <DistanceMatrixService
                  options={{
                    origins: [location],
                    destinations: [destination],
                    travelMode: 'DRIVING',
                  }}
                  callback={handleDistanceCalculation}
                />
              </>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
}

export default HeroSection;
