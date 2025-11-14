import React from 'react';
import { Truck, Leaf, Award, Headphones } from 'lucide-react';
import './BestFeatures.css';

const BestFeatures = () => {
  const features = [
    {
      icon: <Truck size={32} />,
      title: "Free Shipping",
      description: "On order over ₹ 1000"
    },
    {
      icon: <Leaf size={32} />,
      title: "Always Fresh",
      description: "Product well package"
    },
    {
      icon: <Award size={32} />,
      title: "Superior Quality",
      description: "Quality Products"
    },
    {
      icon: <Headphones size={32} />,
      title: "Support",
      description: "24/7 Support"
    }
  ];

  return (
    <div className="BestFeatures-container">
      <div className="BestFeatures-wrapper">
        {features.map((feature, index) => (
          <div key={index} className="BestFeatures-card">
            <div className="BestFeatures-iconWrapper">
              {feature.icon}
            </div>
            <h3 className="BestFeatures-title">
              {feature.title}
            </h3>
            <p className="BestFeatures-description">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestFeatures;