import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/OverlayMenu.css";

const OverlayMenu = ({ isOpen, onClose }) => {
  const container = useRef();

  const handleNavigation = (id) => {
    onClose();
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 1000);
  };

  useGSAP(
    () => {
      if (!container.current) return;
      const items = gsap.utils.toArray(".menu__item");
      const texts = gsap.utils.toArray(".mainmenu__item, .info-group");

      if (isOpen) {
        gsap.set(container.current, { visibility: "visible" });
        container.current.classList.add("menu--open");

        items.forEach((el, index) => {
          const inner = el.querySelector(".menu__item-inner");
          const direction = el.dataset.direction;

          let startX = 0,
            startY = 0;
          let innerStartX = 0,
            innerStartY = 0;

          if (direction === "bt") {
            startY = "100%";
            innerStartY = "-100%";
          }
          if (direction === "tb") {
            startY = "-100%";
            innerStartY = "100%";
          }
          if (direction === "lr") {
            startX = "-100%";
            innerStartX = "100%";
          }
          if (direction === "rl") {
            startX = "100%";
            innerStartX = "-100%";
          }

          gsap.set(el, { x: startX, y: startY });
          gsap.set(inner, { x: innerStartX, y: innerStartY });

          gsap.to([el, inner], {
            x: "0%",
            y: "0%",
            duration: 1,
            ease: "expo.out",
            delay: index * 0.05,
          });
        });

        gsap.to(texts, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out",
        });
      } else {
        gsap.to(texts, { opacity: 0, duration: 0.3 });

        items.forEach((el) => {
          const inner = el.querySelector(".menu__item-inner");
          const direction = el.dataset.direction;

          let targetX = 0,
            targetY = 0;
          let innerTargetX = 0,
            innerTargetY = 0;

          if (direction === "bt") {
            targetY = "100%";
            innerTargetY = "-100%";
          }
          if (direction === "tb") {
            targetY = "-100%";
            innerTargetY = "100%";
          }
          if (direction === "lr") {
            targetX = "-100%";
            innerTargetX = "100%";
          }
          if (direction === "rl") {
            targetX = "100%";
            innerTargetX = "-100%";
          }

          gsap.to(el, {
            x: targetX,
            y: targetY,
            duration: 0.8,
            ease: "expo.inOut",
          });
          gsap.to(inner, {
            x: innerTargetX,
            y: innerTargetY,
            duration: 0.8,
            ease: "expo.inOut",
          });
        });

        setTimeout(() => {
          if (container.current) {
            container.current.classList.remove("menu--open");
            gsap.set(container.current, { visibility: "hidden" });
          }
        }, 800);
      }
    },
    { scope: container, dependencies: [isOpen] },
  );

  return (
    <nav className="overlay-menu" ref={container}>
      <div className="menu__item menu__item--3" data-direction="lr">
        <div className="menu__item-inner">
          <div>
            <div className="info-group">
              <span className="info-title">VISUAL DESIGN</span>
              <span className="info-desc">Illustrator, Photoshop</span>
            </div>
            <div className="info-group">
              <span className="info-title">FRONT-END DEV</span>
              <span className="info-desc">HTML, CSS, JS, React</span>
            </div>
          </div>
        </div>
      </div>
      <div className="menu__item menu__item--2" data-direction="tb">
        <div className="menu__item-inner">
          <a
            href="https://github.com/sujin-lim"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            GitHub Link
          </a>
        </div>
      </div>
      <div className="menu__item menu__item--1" data-direction="rl">
        <div className="menu__item-inner">
          <div className="label-vertical left">Table of Contents</div>
          <div className="nav-links">
            <div
              className="mainmenu__item"
              onClick={() => handleNavigation("about")}
            >
              <span>01</span> ABOUT
            </div>
            <div
              className="mainmenu__item"
              onClick={() => handleNavigation("skill")}
            >
              <span>02</span> SKILLS
            </div>
            <div
              className="mainmenu__item"
              onClick={() => handleNavigation("project")}
            >
              <span>03</span> PROJECT
            </div>
            <div
              className="mainmenu__item"
              onClick={() => handleNavigation("contact")}
            >
              <span>04</span> CONTACT
            </div>
          </div>
          <div className="label-vertical right">Inside This Portfolio</div>
        </div>
      </div>
      <div className="menu__item menu__item--4" data-direction="bt">
        <div className="menu__item-inner">
          <p className="slogan-text">
            Strategic Thinking,
            <br />
            Creative Execution
          </p>
        </div>
      </div>
      <div className="menu__item menu__item--5" data-direction="bt">
        <div className="menu__item-inner">
          <p className="contact-label">Get in Touch</p>
          <div className="phone-number">
            <span>010</span>
            <span>5149</span>
            <span>0409</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OverlayMenu;
