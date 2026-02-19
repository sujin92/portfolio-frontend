import React, { useState, useEffect } from "react";
import "../styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <span className="scroll-text">Move top</span>
      <div className="scroll-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.7 165.7">
          <line
            x1="21.7"
            y1="165.7"
            x2="21.7"
            y2="0.6"
            fill="none"
            stroke="#0000cc"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <line
            x1="21.7"
            y1="0.6"
            x2="0.8"
            y2="25.9"
            fill="none"
            stroke="#0000cc"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
        </svg>
      </div>
    </button>
  );
};

export default ScrollToTop;
