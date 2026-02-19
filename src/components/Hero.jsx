import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Hero.css";
import Signature from "./Signature";

const Hero = () => {
  const container = useRef();

  const scrollToNext = () => {
    const nextSection = document.getElementById("about");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 3.2 });

      tl.addLabel("heroStart")
        .to(
          ".hero-text-line",
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power3.out" },
          "heroStart",
        )
        .to(
          ".hero__bottom-left",
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "heroStart",
        )
        .to(
          ".hero__scroll",
          { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "heroStart",
        )
        .to(
          ".signature-stroke-layer path",
          { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" },
          "heroStart",
        )
        .set(".signature-fill-layer path", { opacity: 1 }, "heroStart")
        .to(
          ".signature-fill-layer",
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 2.5,
            ease: "power2.inOut",
          },
          "heroStart+=0.2",
        );
    },
    { scope: container },
  );

  return (
    <section id="hero" className="hero" ref={container}>
      <div className="hero__inner">
        <h1 className="hero__title">
          <div className="hero-text-line">WEB DESIGNER &</div>
          <div className="hero-text-line">FRONTEND DEVELOPER</div>
          <div className="hero-text-line bottom-line">
            <span className="year">2026</span>
            <span className="hero__signature">
              <Signature />
            </span>
          </div>
        </h1>

        <div className="hero__bottom-left">
          <span className="hello-world-text">Hello, World!</span>

          <svg
            className="hello-world-underline"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 157.7 19.7"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M45.5,9.7c-1.9.1-4.4,1.1-6,.9-3.2,1.7-2.4-.3-5.2,1.4-1.1.1-2.8.2-3.9.4l-4.3,1c-1,.2-1.8.7-2.9.9l-5.8,1-2.7,1.1c-1.4.6-2.6.7-4.3,1s-4.1,1.8-5.9,2.3c-2.4-2.3-2.2,0-4.6-3.7l3.9-1.6,5.2-2.1,5.6-1.5c6.8-1.9,15.3-4.2,22.2-5.3l9.3-1.4,3.9-.5,4.4-.5,2.6-.3,3.4-.4,9.4-.9,2.8-.2,6.1-.4,8.9-.4,8.2-.3h3.8c0-.1,18.6-.2,18.6-.2h5.9c0,.1,3.6.2,3.6.2,4.9.1,8.7.9,12,1h4.5c0,.1,12.3,1,12.3,1,.4,0,1,.6,1.1.9.5,1.7-3.9,1.3-5,1-2.8-.6-6.2-.5-9-.5l-24.6.3-5.4.2-6.4.4h-3.7c-.8,0-1.9,0-2.7,0l-5.3.4-4.4.3-3.1.2-3,.2c-1.5.1-2.8,0-4.3,0s-2.3.3-3.4.4l-8,.8-2.7.3-3.1.3c-5.5.6-6.5.2-11.9,1.2s-4,.6-6.1.8Z"
              fill="#a0ea00"
            />
          </svg>
        </div>

        <div className="hero__scroll" onClick={scrollToNext}>
          <span className="scroll-text">scroll</span>

          <svg
            className="scroll-mark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22.7 165.7"
            aria-hidden="true"
            focusable="false"
          >
            <line
              x1="1"
              x2="1"
              y2="165"
              fill="none"
              stroke="#00c"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
            <line
              x1="1"
              y1="165"
              x2="21.9"
              y2="139.8"
              fill="none"
              stroke="#00c"
              strokeMiterlimit="10"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
