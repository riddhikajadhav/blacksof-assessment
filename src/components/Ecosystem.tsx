import React from 'react';
import street_light_controler from '../assets/street_light_controler.png';
import gateway_png from '../assets/gateway_png.png';
import users_png from '../assets/users_png.png';
import evaluation_png from '../assets/evaluation_png.png'
import cloud_based_management from '../assets/cloud_based management.png' 

const EcosystemSection: React.FC = () => {
  return (
    <div className='container-ecosystem-section'>
  <div className="ecosystem-section text-start">
    <h2>Ecosystem</h2>
    <h1>How does a smart street <br /> light ecosystem work?</h1>

    <div className="row ecosystem-row mt-4">
      <div className="col-lg-6 col-md-6 col-sm-12 ecosystem-item mb-4">
        <div className="d-flex justify-content-center mb-3">
          <span className="icon-container-light">
            <img src={street_light_controler} alt="Icon 1" className="icon-light" />
          </span>
          <span className="icon-container-light">
            <img src={street_light_controler} alt="Icon 1" className="icon-light" />
          </span>
        </div>
        <h3>Street Light Controller</h3>
        <p>Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp.</p>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 ecosystem-item mb-4">
        <div className="d-flex justify-content-center mb-3">
          <span className="icon-container">
            <img src={gateway_png} alt="Icon 2" className="icon" />
          </span>
        </div>
        <h3>Gateway</h3>
        <p>Employed for interfacing between a Controller and the Lighting Management Software.</p>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 ecosystem-item mb-4">
        <div className="d-flex justify-content-center mb-3">
          <span className="icon-container">
            <img src={cloud_based_management} alt="Icon 3" className="icon" />
          </span>
        </div>
        <h3>Cloud-based Management System</h3>
        <p>Collects information from multiple gateways.</p>
      </div>
    </div>

    <div className="row ecosystem-row mt-4">
      <div className="col-lg-4 col-md-6 col-sm-12 ecosystem-item mb-4">
        <div className="d-flex justify-content-center mb-3">
          <span className="icon-container">
            <img src={users_png} alt="Icon 4" className="icon" />
          </span>
        </div>
        <h3>Users</h3>
        <p>Data from the cloud is used to monitor and control street lights by the System Managers.</p>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 ecosystem-item mb-4">
        <div className="d-flex justify-content-center mb-3">
          <span className="icon-container">
            <img src={evaluation_png} alt="Icon 5" className="icon" />
          </span>
        </div>
        <h3>Evaluation</h3>
        <p>Gathered insights are used to evaluate the performance of the lighting systems.</p>
      </div>
    </div>
  </div>
</div>

  );
};

export default EcosystemSection;
