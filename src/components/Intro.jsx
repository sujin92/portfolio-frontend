import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "../styles/Intro.css";

const Intro = () => {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set(".char", { opacity: 0, y: 20 });
      gsap.set(".underline-wrapper", { clipPath: "inset(0 100% 0 0)" });

      tl.to(".text-hello .char", {
        opacity: 1,
        y: 0,
        duration: 0.1,
        stagger: 0.12,
        ease: "power2.out",
      })
        .to(
          ".text-world .char",
          {
            opacity: 1,
            y: 0,
            duration: 0.1,
            stagger: 0.12,
            ease: "power2.out",
          },
          "-=0.1",
        )
        .to(".underline-wrapper", {
          clipPath: "inset(0 0% 0 0)",
          duration: 0.3,
          ease: "power3.inOut",
        })
        .to(container.current, {
          yPercent: -100,
          duration: 1,
          ease: "power4.inOut",
          delay: 1,
        });
    },
    { scope: container },
  );

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char" style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section className="intro-section" ref={container}>
      <div className="intro-inner">
        <h1 className="intro-title">
          <div className="text-hello">{splitText("Hello,")}</div>

          <div className="text-world">
            {splitText("World!")}

            <div className="underline-wrapper">
              <svg
                className="underline-svg"
                viewBox="0 0 300.3 37.5"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M86.7,18.4c-3.5.2-8.3,2.2-11.4,1.6-6.1,3.3-4.5-.6-9.8,2.6-2.2.2-5.3.3-7.5.8l-8.1,2c-1.9.5-3.5,1.3-5.5,1.7l-11,1.9-5.2,2.1c-2.7,1.1-5,1.4-8.2,2-3.6.7-7.9,3.4-11.2,4.4-4.5-4.3-4.3.2-8.8-7.1l7.4-3,9.9-4,10.6-2.9c12.9-3.5,29.1-8.1,42.3-10.1l17.8-2.7,7.5-1,8.5-1,5-.6,6.4-.8,17.8-1.8,5.4-.3,11.7-.7,16.9-.7,15.6-.6,7.3-.2h35.4c0,0,11.2.1,11.2.1l6.9.2c9.2.2,16.6,1.7,22.8,1.9l8.5.3,23.4,1.7c.8,0,1.9,1.2,2.1,1.7,1,3.3-7.4,2.4-9.6,2-5.3-1.1-11.8-1-17.2-1l-46.9.5-10.3.4-12.2.7h-7.1c-1.5.2-3.7,0-5.1.2l-10.1.8-8.4.5-5.8.4-5.7.5c-2.8.2-5.3.1-8.2.2-1.6,0-4.5.7-6.4.8l-15.3,1.5-5.1.5-5.9.6c-10.5,1.1-12.5.3-22.7,2.3-4,.8-7.6,1.2-11.7,1.5Z"
                  fill="#a0ea00"
                />
              </svg>
            </div>
          </div>
        </h1>
      </div>
    </section>
  );
};

export default Intro;
