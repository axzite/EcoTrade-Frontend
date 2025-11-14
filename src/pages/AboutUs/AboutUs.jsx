import React from "react";
import "./AboutUs.css";
import Card1 from "./AboutUsImg/card1.jpg";

const AboutUs = () => {
  return (
    <>
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <div className="about-main">
          <div className="about-content-wrapper">
            <div className="about-section">
              <h2 className="about-section-title">Our Story</h2>
              <p className="about-text">
                , where tradition meets technology in
                the heart of Indian agriculture. Our journey began with a simple
                goal — to deliver farm-fresh, pure, and high-quality agro
                products to homes across Maharashtra and PAN India.
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title">Our Mission</h2>
              <p className="about-text">
                 Khara AgroTech, our mission is to provide the healthiest and
                most authentic agro products online. We support sustainable
                agriculture, promote ethical farming, and ensure farm-to-fork
                freshness in every delivery. Our goal is to bring natural,
                chemical-free grains and pulses to Indian homes for a healthier
                lifestyle.
              </p>
            </div>

            <div className="about-section">
              <h2 className="about-section-title">Our Values</h2>
              <p className="about-text">
                 Khara AgroTech, we prioritize quality, authenticity, and
                customer trust through fresh, unadulterated agro products. Our
                transparent sourcing and reliable service support a healthier
                and more sustainable lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="image-content-container">
        <div className="image-content-wrapper">
          <div className="image-section">
            <img
              src={Card1} // Replace with your image path
              alt="About Our Store"
              className="content-image"
            />
          </div>

          <div className="content-section">
            <h2 className="content-title">Welcome to KHARA AGROTECH</h2>
            <div className="content-divider"></div>

            <p className="content-text">
              Ideal for Everyday Dishes: Bhogprada broken rice is a dream come
              true for busy cooks. Unlike whole rice varieties, it requires
              minimal soaking time, making it perfect for whipping up quick and
              delicious South Indian staples. Unlocking Flavorful Depths: The
              unique aging process enhances the inherent flavor of the rice,
              resulting in idlis and dosas that burst with taste in every bite.
              The broken rice absorbs spices and lentil batters more
              effectively, ensuring your favorite dishes are not just fluffy and
              crispy but also bursting with South Indian flavors.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
