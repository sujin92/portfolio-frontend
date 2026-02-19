import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Header.css";

gsap.registerPlugin(ScrollTrigger);

const Header = ({ isOpen, onToggleMenu }) => {
  const btnRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 3.2 });
      tl.addLabel("start")
        .to(
          ".header__nav-btn",
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "start",
        )
        .to(
          ".header__text",
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "start",
        );
    },
    { scope: btnRef },
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: "body",
        start: "50px top",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(".header__text", {
            opacity: 0,
            y: -20,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        },

        onLeaveBack: () => {
          gsap.to(".header__text", {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: true,
          });
        },
      });
    },
    { scope: btnRef },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { duration: 0.4, ease: "power3.inOut" },
      });

      if (isOpen) {
        tl.to(
          ".nav-btn__top-row span:nth-child(1), .nav-btn__bottom-row span:nth-child(2)",
          {
            width: 0,
            opacity: 0,
          },
          0,
        )
          .to(
            ".nav-btn__top-row span:nth-child(2)",
            {
              width: 54,
              rotation: 45,
              y: 7,
            },
            "<",
          )
          .to(
            ".nav-btn__bottom-row span:nth-child(1)",
            {
              width: 54,
              rotation: -45,
              y: -7,
            },
            "<",
          );
      } else {
        tl.to(
          ".nav-btn__top-row span:nth-child(2)",
          {
            width: 30,
            rotation: 0,
            y: 0,
          },
          0,
        )
          .to(
            ".nav-btn__bottom-row span:nth-child(1)",
            {
              width: 35,
              rotation: 0,
              y: 0,
            },
            0,
          )
          .to(
            ".nav-btn__top-row span:nth-child(1)",
            {
              width: 12,
              opacity: 1,
            },
            0.2,
          )
          .to(
            ".nav-btn__bottom-row span:nth-child(2)",
            {
              width: 7,
            },
            0.2,
          );
      }
    },
    { scope: btnRef, dependencies: [isOpen] },
  );

  return (
    <header id="header" role="banner" ref={btnRef}>
      <div className="header__inner">
        <div
          className={`header__nav-btn ${isOpen ? "is-open" : ""}`}
          onClick={onToggleMenu}
        >
          <div className="nav-btn__top-row">
            <span></span>
            <span></span>
          </div>
          <div className="nav-btn__bottom-row">
            <span></span>
            <span></span>
          </div>
        </div>

        <div className="header__text">DESIGN. DEVELOP. DEPLOY.</div>
      </div>
    </header>
  );
};

export default Header;
