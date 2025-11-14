import React from 'react';
import './ServiceImages.css';
import category1 from "./ServiceImg_IMG/category-1.jpg"
import category2 from "./ServiceImg_IMG/category-2.jpg"
import category from "./ServiceImg_IMG/category.jpg"
import category3 from "./ServiceImg_IMG/category-3.jpg"
import category4 from "./ServiceImg_IMG/category-4.jpg"

const ServiceImages = () => {
  return (
    <div className="ServiceImg-container">
      {/* Left Column */}
      <div className="ServiceImg-column">
        <img 
          src={category1}
          alt="Service 1" 
          className="ServiceImg-image"
        />
        <img 
          src={category2} 
          alt="Service 2" 
          className="ServiceImg-image"
        />
      </div>

      {/* Middle Column */}
      <div className="ServiceImg-centerColumn">
        <img 
          src={category} 
          alt="Main Service" 
          className="ServiceImg-mainImage"
        />
      </div>

      {/* Right Column */}
      <div className="ServiceImg-column">
        <img 
          src={category3}
          alt="Service 3" 
          className="ServiceImg-image"
        />
        <img 
          src={category4} 
          alt="Service 4" 
          className="ServiceImg-image"
        />
      </div>
    </div>
  );
};

export default ServiceImages;