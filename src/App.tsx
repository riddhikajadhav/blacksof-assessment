// src/app.tsx
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import EcosystemSection from './components/Ecosystem';
import Products from './components/Products';
import Platform from './components/Platform';
import Footer from './components/Footer'
import './App.css';

const App: React.FC = () => {
  return (
    <>
    <div className="header-hero-container">
        <Header />
        <Home />
      </div>
      <EcosystemSection /> 
      <Products />
      <Platform />
      <Footer />
      </>
  );
};

export default App;
