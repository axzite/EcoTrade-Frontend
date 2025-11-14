import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* Top Section */}
      <div className="footer-content">
        {/* Left Section */}
        <div className="footer-content-left">
          <div className="FooterLogoDiv">
            <Link to="/">
              <img
                className="Footerlogo"
                src={assets.logo1}
                alt="Khara AgroTech Logo"
              />
            </Link>
            <p className="navbar-p">उत्तम स्वाद और गुणवत्ता की पहचान</p>
          </div>
          <p className="footer-description">
            Ideal for Everyday Dishes: Bhogprada broken rice is a dream come true
            for busy cooks. Unlike whole rice varieties, it requires minimal
            soaking time, making it perfect for quick South Indian dishes. The
            unique aging process enhances the flavor, resulting in idlis and
            dosas that are fluffy, crispy, and bursting with authentic taste.
          </p>
        </div>

        {/* Right Section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul className="footer-contact">
            <li>
              <MapPin size={25} className="footer-icon" />
              <span>
                RAMCHANDRA BADA, INFRONT OF GRAMPANCHAYAT, Village Khara, Tehsil
                KIRNAPUR, District Balaghat, MADHYA PRADESH, INDIA, Pin 481226
              </span>
            </li>
            <li>
              <Phone size={25} className="footer-icon" />
              <span>+91 9174207069</span>
            </li>
            <li>
              <Mail size={25} className="footer-icon" />
              <span>kharaagrotech@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />

      {/* Social Icons */}
      <div className="footer-social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=61575420719800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="social-icon" size={25} />
        </a>
        <Twitter className="social-icon" size={25} />
        <a
          href="https://www.linkedin.com/company/anorg-technologies-pvt-ltd/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="social-icon" size={25} />
        </a>
      </div>

      {/* Copyright */}
      <p className="footer-copyright">
        © {new Date().getFullYear()} 
        <a
          href="https://kharaagrotech.com"
          target="_blank"
          rel="noopener noreferrer"
          className="CopyRightKharaAgroTech"
        >
          KHARA AGROTECH                     
        </a>
      </p>
    </footer>
  );
};

export default Footer;
