import React from 'react';
import image_32 from '../assets/image_32.png'

const EcosystemSection: React.FC = () => {
  return (
    <section className="platform-benefits">
  <h2>The platform assists city managers on multiple fronts</h2>
  <div className='container-platform'>
    <div className='benefits-section'>
      
      {/* <!-- First Grid Row --> */}
      <div className="benefits-grid row">
        <div className="benefit-item item-1 col-lg-6 col-md-12">
          <img src={image_32} alt="Icon 1" className="icon-platform" />
          <p>Saves on power consumption & related costs</p>
        </div>
        <div className="benefit-item item-2 col-lg-6 col-md-12">
          <img src={image_32} alt="Icon 2" className="icon-platform" />
          <p>Lowers downtimes</p>
        </div>
      </div>

      {/* <!-- Second Grid Row --> */}
      <div className="benefits-grid row">
        <div className="benefit-item item-3 col-lg-6 col-md-12">
          <img src={image_32} alt="Icon 1" className="icon-platform" />
          <p>Saves on power consumption & related costs</p>
        </div>
        <div className="benefit-item item-4 col-lg-6 col-md-12">
          <img src={image_32} alt="Icon 2" className="icon-platform" />
          <p>Lowers downtimes</p>
        </div>
      </div>

      {/* <!-- Third Grid Row --> */}
      <div className="benefits-grid row">
        <div className="benefit-item item-5 col-lg-6 col-md-12">
          <img src={image_32} alt="Icon 1" className="icon-platform" />
          <p>Saves on power consumption & related costs</p>
        </div>
        <div className="benefit-item item-6 col-lg-6 col-md-12">
          <img src={image_32} alt="Icon 2" className="icon-platform" />
          <p>Lowers downtimes</p>
        </div>
      </div>

    </div>
  </div>
</section>


  );
};

export default EcosystemSection;
