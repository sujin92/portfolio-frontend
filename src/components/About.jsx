import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/About.css";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef(null);
  const textRef = useRef(null);

  const splitText = (text) => {
    return text.split("").map((char, index) => <span key={index}>{char}</span>);
  };

  useGSAP(
    () => {
      if (!container.current) return;

      gsap.from(".about-text > *", {
        scrollTrigger: {
          trigger: ".about-top",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(".profile-card", {
        scrollTrigger: {
          trigger: ".about-top",
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.utils.toArray(".resume-col h4").forEach((header) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: "top 90%",
          },
          y: 30,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      gsap.set(".resume-item", { y: 50, opacity: 0 });

      ScrollTrigger.batch(".resume-item", {
        start: "top 90%",
        onEnter: (batch) => {
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });

      const fullText = "Future Partner!";
      const textObj = { length: 0 };

      const typingTl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

      typingTl
        .to(textObj, {
          length: fullText.length,
          duration: 1.5,
          ease: "none",
          onUpdate: () => {
            textRef.current.innerText = fullText.slice(
              0,
              Math.ceil(textObj.length),
            );
          },
        })
        .to({}, { duration: 1.5 })
        .to(textObj, {
          length: 0,
          duration: 1,
          ease: "none",
          onUpdate: () => {
            textRef.current.innerText = fullText.slice(
              0,
              Math.ceil(textObj.length),
            );
          },
        })
        .to({}, { duration: 0.5 });
    },
    { scope: container },
  );

  return (
    <section className="about-section" ref={container}>
      <div className="about-top">
        <div className="about-text">
          <span className="section-label">ABOUT</span>
          <h2 className="about-headline">
            Hello,&nbsp;
            <span ref={textRef}> </span>
            <span className="blinking-cursor">|</span>
          </h2>
          <div className="about-desc">
            <p className="desc-point">
              디자이너로 시작해 개발자로 진화한, 임수진입니다.
            </p>
            <br />
            <p>
              웹디자이너로 시작해 프론트엔드 개발까지,
              <br />
              <span>디자인의 의도를 완벽하게 이해</span>하고&nbsp;
              <span>코드로 구현</span>해 내는
              <br />
              <span>디자이너&개발자로서 최상의 사용자 경험</span>을 만듭니다.
            </p>
          </div>

          <a href="/resume.pdf" download className="resume-btn">
            <div>{splitText("이력서 다운로드")}</div>
          </a>
        </div>

        <div className="profile-card">
          <div className="profile-img-box">
            <img
              src="/images/profile.jpg"
              alt="Profile"
              className="profile-img"
            />
          </div>
          <div className="profile-info">
            <h3>
              LIM SUJIN <span>She/her</span>
            </h3>
            <div className="info-row">
              <span className="info-label">BIRTH</span>
              <span className="info-value">1992.09.07</span>
            </div>
            <div className="info-row">
              <span className="info-label">PHONE</span>
              <span className="info-value">010.5149.0409</span>
            </div>
            <div className="info-row">
              <span className="info-label">MAIL</span>
              <span className="info-value">920907v@naver.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-grid">
        <div className="resume-col">
          <h4>
            학력/교육 <span>EDUCATION</span>
          </h4>
          <div className="resume-list">
            <div className="resume-item">
              <div className="resume-date">2011.03 ~ 2013.02</div>
              <div className="resume-content">
                <h5>용인송담대학</h5>
                <p>스타일리스트과</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2008.03 ~ 2011.02</div>
              <div className="resume-content">
                <h5>한일전산여자고등학교</h5>
                <p>컴퓨터공학</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2022.03 ~ 2022.08</div>
              <div className="resume-content">
                <h5>아이티에듀넷</h5>
                <p>
                  클라우드(AWS)기반 Java/Spring 융합 개발자 양성 교육 과정 수료
                </p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2015.03 ~ 2015.07</div>
              <div className="resume-content">
                <h5>고용노동부</h5>
                <p>웹디자인 과정 수료</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2022.08 ~ 2022.09</div>
              <div className="resume-content">
                <h5>팀스파르타주식회사</h5>
                <p>나만의 수익성 앱, 앱개발 종합반</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2022.08 ~ 2022.10</div>
              <div className="resume-content">
                <h5>패스트캠퍼스</h5>
                <p>React&Redux로 시작하는 웹 프로그래밍</p>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-col">
          <h4>
            경력 <span>CAREER</span>
          </h4>
          <div className="resume-list">
            <div className="resume-item">
              <div className="resume-date">2023.10 ~ </div>
              <div className="resume-content">
                <h5>주식회사 리컴퍼니</h5>
                <p>웹사이트 기획 및 디자인, 웹 개발</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2023.08 ~ 2023.10</div>
              <div className="resume-content">
                <h5>더컴퍼니</h5>
                <p>자사 홈페이지 관리 및 앱 디자인</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2022.10 ~ 2023.07</div>
              <div className="resume-content">
                <h5>주식회사 위미르</h5>
                <p>웹사이트 기획 및 디자인, 프론트엔드</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2019.09 ~ 2022.02</div>
              <div className="resume-content">
                <h5>비츠로</h5>
                <p>제품 개발 및 패키지 디자인, 웹사이트 디자인 및 퍼블리싱</p>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2015.09 ~ 2019.03</div>
              <div className="resume-content">
                <h5>주식회사 상진</h5>
                <p>제품 개발 및 패키지 디자인, 웹사이트 관리</p>
              </div>
            </div>
          </div>

          <h4 style={{ marginTop: "3rem" }}>
            자격 <span>QUALIFICATION</span>
          </h4>
          <div className="resume-list qualification-list">
            <div className="resume-item">
              <div className="resume-date">2010.04</div>
              <div className="resume-content">
                <h5>정보기기운용기능사</h5>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2010.09</div>
              <div className="resume-content">
                <h5>컴퓨터활용능력2급</h5>
              </div>
            </div>
            <div className="resume-item">
              <div className="resume-date">2009.06</div>
              <div className="resume-content">
                <h5>워드프로세서2급</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
