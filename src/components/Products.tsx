import React from 'react';
import image_31 from '../assets/image_31.png'
import icon_png from '../assets/icon_png.png'
const Products: React.FC = () => {
  return (
    <section className='container-products'>
      <div className="products-section">
        <div className="products-intro">
          <h2>Products</h2>
          <h3><span>Cutting-edge hardware,</span> offerings<br /> helping cities optimize resources and <br />achieve smart development goals</h3>
        </div>

        <div className="product-buttons">
          <button className="product-btn active">Centralized Control & Monitoring System</button>
          <button className="product-btn">NEMA-Mounted VOLC 1160</button>
          <button className="product-btn">Retrofit Street Light Controller VOLC 2160</button>
          <button className="product-btn">Retrofit Street Light Controller VOLC 2180</button>
          <button className="product-btn">Retrofit Street Light Controller VOLC 4180</button>
        </div>

        <div className="product-content">
  <div className="row g-0">
    <div className="col-lg-6 col-md-12 product-image">
      <img src={image_31} alt="Street Lights" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 product-details">
      <span>Products 1/5</span>
      <h4>Centralized Control & Monitoring System</h4>
      <p>Designed indigenously for street lighting projects, the CCMS offers a complete feeder panel for a group of 30-50 street lights.</p>
      <a href="#" className="know-more">
        Know More
        <img src={icon_png} alt="icon" className="know-more-icon" />
      </a>
    </div>
  </div>
</div>

      </div>
    </section>

  );
};

export default Products;
