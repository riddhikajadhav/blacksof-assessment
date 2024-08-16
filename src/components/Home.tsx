import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: React.FC = () => {
  return (
    <section className="hero d-flex flex-column align-items-center text-center vh-100">
      <div className="container">
        <p className="lead">Smart Lighting Solutions</p>
        <h1 className="display-4">
          Bringing A New Perspective To Street Lights <br />
          And The Cities Of Tomorrow
        </h1>
        <button className="btn btn-primary mt-4 hero-button">Login</button>
      </div>
    </section>
  );
};

export default Home;
