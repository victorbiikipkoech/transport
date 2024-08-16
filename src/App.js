// src/App.js

import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import './App.css';  // Global styles

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
