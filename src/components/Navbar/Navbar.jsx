import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import { FiSearch, FiShoppingCart, FiUser, FiLogOut } from "react-icons/fi";
import { FaBoxOpen } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="navbar">
      <div className="navbar-logoDiv">
        <Link to="/">
          <img className="logo" src={assets.logo1} alt="" />
        </Link>
        <p className="navbar-p">उत्तम स्वाद और गुणवत्ता की पहचान</p>
      </div>

      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={`${menu === "home" ? "active" : ""}`}
        >
          Home
        </Link>
        {/* <Link
          to="/#explore-menu"
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active" : ""}`}
        >
          Healthy Pantry
        </Link> */}
        {/* <a href='#app-download' onClick={() => setMenu("mob-app")} className={`${menu === "mob-app" ? "active" : ""}`}>mobile app</a> */}
        <a
          href="#footer"
          onClick={() => setMenu("contact")}
          className={`${menu === "contact" ? "active" : ""}`}
        >
          Get in Touch
        </a>

        <li
          onClick={() => {
            setMenu("about");
          }}
          className={`${menu === "about" ? "active" : ""}`}
        >
          <Link to="/about-us">About Us</Link>
        </li>

        <li
          onClick={() => {
            setMenu("contactUs");
          }}
          className={`${menu === "contactUs" ? "active" : ""}`}
        >
          <Link to="/ContactUs">Contact Us</Link>
        </li>
      </ul>
      <div className="navbar-right">
  {/* 💬 Message Icon */}
  <Link to="/messages" className="navbar-message-link">
    <FiMessageSquare className="navbar-icon" size={25} />
  </Link>

  {/* 🛒 Cart Icon */}
  <Link to="/cart" className="navbar-search-icon">
    <FiShoppingCart className="navbar-icon" size={25} />
    <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
  </Link>

  {/* 👤 Profile / Login */}
  {!token ? (
    <button onClick={() => setShowLogin(true)}>Sign in</button>
  ) : (
    <div className="navbar-profile">
      <FiUser className="navbar-icon" size={25} />
      <ul className="navbar-profile-dropdown">
        <li onClick={() => navigate('/myorders')}>
          <FaBoxOpen size={25} /> <p>Orders</p>
        </li>
        <hr />
        <li onClick={logout}>
          <FiLogOut size={25} /> <p>Logout</p>
        </li>
      </ul>
    </div>
  )}
</div>

    </div>
  );
};

export default Navbar;
