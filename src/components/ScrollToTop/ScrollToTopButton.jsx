import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const { pathname } = useLocation(); // Get current route

  // Reset visibility when route changes
  useEffect(() => {
    setVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FiArrowUp size={24} />
      </button>
    )
  );
};

export default ScrollToTopButton;
