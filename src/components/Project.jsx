import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import "../styles/Project.css";

export default function Project() {
  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "디자인 에이전시 웹사이트",
        subtitle: "Agency Branding & Interactive Platform",
        year: "2024",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["React", "GSAP", "Node.js", "Vercel", "Railway"],
        image: "/images/project01.png",
        modalBg: "/images/project-modal01.jpg",
        concept:
          "GSAP 인터랙티브 모션으로 에이전시의 창의성을 표현한 인터랙티브 웹사이트",
        detail:
          "브랜드 아이덴티티의 핵심인 레드를 포인트 컬러로 채택하고 깊이감 있는 블랙과 조화시켜 강렬한 시각적 대비를 구현한 디자인 에이전시 사이트입니다. 단순한 정보 전달을 넘어, GSAP ScrollTrigger를 활용한 인터렉티브 모션을 통해 에이전시의 창의성을 시각적으로 증명하는 데 주력했습니다. 프론트엔드는 React로 구성하여 컴포넌트 기반의 효율적인 인터페이스를 구축했으며, Node.js 백엔드를 Railway로, 프론트엔드를 Vercel로 각각 배포하여 안정적인 환경을 구현했습니다.",
        link: "https://koad-frontend.vercel.app/",
      },
      {
        id: 2,
        title: "한형석자유아동극장",
        subtitle: "Public Reservation & Cultural Platform",
        year: "2024",
        contribution: "Design 100%, Front-End 100%",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["Vanilla JS", "LottieFiles", "CSS3", "HTML5"],
        image: "/images/project02.png",
        modalBg: "/images/project-modal02.jpg",
        concept:
          "Lottie 애니메이션과 다채로운 컬러로 구현한 아동 친화적 예약 플랫폼",
        detail:
          "부산 서구청의 한형석자유아동극장을 위해 제작된 인터랙티브 웹 플랫폼입니다. 아동극장이라는 공간의 특수성을 고려하여 LottieFiles 애니메이션을 곳곳에 배치해 생기 넘치는 사용자 경험을 제공합니다. 핑크를 중심으로 오렌지, 그린, 청록색을 조화롭게 사용하여 시각적인 즐거움을 극대화했습니다. 외부 API 연동을 통해 실시간 공연 좌석 예약 및 결제 시스템을 순수 자바스크립트로 구현하여, 화려한 디자인뿐만 아니라 복잡한 비즈니스 로직을 처리하는 프론트엔드 역량을 보여드립니다.",
        link: "https://sgjayutheater.com/",
      },
      {
        id: 3,
        title: "기업 브랜드 웹사이트",
        subtitle: "Corporate Identity & Business Introduction Platform",
        year: "2025",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["React", "Node.js", "GSAP", "Vercel", "Railway"],
        image: "/images/project03.png",
        modalBg: "/images/project-modal03.jpg",
        concept:
          "신뢰를 상징하는 블루 컬러와 GSAP 모션으로 기업의 비전을 시각화한 브랜드 플랫폼",
        detail:
          "기업의 신뢰도와 전문성을 강조하기 위해 블루 컬러를 기조로 구축된 브랜드 홍보 웹사이트입니다. 로고 드로잉 인트로와 스크롤 애니메이션을 통해 사업 영역에 대한 몰입도를 높였으며, 단순한 홍보를 넘어 관리자 페이지에서 실시간 통계 및 문의 현황을 관리할 수 있는 실무 최적화 기능을 통합했습니다.",
        link: "https://www.sunin.co.kr/",
      },
      {
        id: 4,
        title: "공유형 공장 예약 플랫폼",
        subtitle: "Shared Factory Reservation & Safety Management System",
        year: "2026(개발 진행중)",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["Vite", "TypeScript", "React", "Node.js"],
        image: "/images/project04.png",
        modalBg: "/images/project-modal04.jpg",
        concept: "고도화된 예약 시스템 및 AI 기반 풀스택 플랫폼",
        detail:
          "기업 내 유휴 공장을 공유형으로 전환하여 운영하기 위한 통합 예약 사이트입니다. 예약 시 산재보험 가입 여부를 검증하는 로직을 포함해 결제, 관리자 대시보드, 마이페이지 등 복합적인 기능이 구현되었습니다. 대규모 데이터 타입을 안전하게 관리하기 위해 TypeScript와 Vite를 채택하여 개발 생산성을 높였으며, Gemini AI를 백엔드 로직 설계 파트너로 활용하여 풀스택 개발 효율을 극대화했습니다. 복잡한 절차 설명이 필요한 섹션에는 GSAP 모션을 적용하여 사용자의 몰입도를 유지하도록 설계했습니다.",
        link: "",
      },
      {
        id: 5,
        title: "코드하우스(CODE HOUSE)",
        subtitle: "IT Education Platform Design & Publishing",
        year: "2023",
        contribution: "Design 100%, Publishing 100% (Team of 5)",
        role: "UI/UX Designer & Lead Publisher",
        stack: ["HTML5", "CSS3", "JavaScript"],
        image: "/images/project05.png",
        modalBg: "/images/project-modal05.jpg",
        concept:
          "정보의 위계와 학습 몰입도를 최우선으로 설계한 개발 교육 플랫폼 디자인 및 퍼블리싱",
        detail:
          "학습 목적에 충실한 개발 강의 교육 사이트로, 정보의 명확한 전달과 사용자 편의성에 집중한 디자인 및 퍼블리싱 프로젝트입니다. 애니메이션을 최소화하여 콘텐츠 가독성을 높였으며, 관리자와 사용자 모두를 고려한 수강 이력 관리 및 승인 시스템의 복잡한 레이아웃을 컴포넌트 단위로 정교하게 설계했습니다. 5인 협업 프로젝트에서 개발 효율성을 높이기 위한 시멘틱 마크업과 일관된 디자인 가이드를 구축하며 퍼블리싱 리드 역할을 수행했습니다.",
        link: "https://www.codehows.com/",
      },
      {
        id: 6,
        title: "IT 기업 브랜드 사이트",
        subtitle: "Corporate Identity & Business Showcase",
        year: "2023",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["React", "CSS3", "EmailJS", "Vercel"],
        image: "/images/project06.png",
        modalBg: "/images/project-modal06.jpg",
        concept:
          "직관적인 UI와 효율적인 정보 설계로 비즈니스 가치를 전달하는 브랜드 웹사이트",
        detail:
          "IT 기업의 정체성을 보여주기 위한 단일 브랜딩 웹사이트로, 사업 영역 소개와 고객 문의 확보에 집중했습니다. AI 산업의 혁신성을 상징하는 배경 그래픽과 정돈된 타이포그래피를 사용해 신뢰감을 주는 디자인을 완성했습니다. 별도의 백엔드 서버 없이 React와 이메일 연동 기능을 활용해 실용적인 문의 시스템을 구축했으며, 사용자 여정에 맞춘 매끄러운 레이아웃 설계로 기업의 핵심 메시지를 효과적으로 전달합니다.",
        link: "http://www.bestco.kr/",
      },
      {
        id: 7,
        title: "거북선마을 웹사이트",
        subtitle: "Village Community & Experience Introduction Platform",
        year: "2025",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developerr",
        stack: ["React", "Node.js", "Vercel", "Railway"],
        image: "/images/project07.png",
        modalBg: "/images/project-modal07.jpg",
        concept:
          "마을의 정체성을 담은 디자인과 실무자 편의를 극대화한 페이지 편집 시스템",
        detail:
          "지역 마을의 축제와 체험 프로그램을 홍보하기 위해 제작된 웹사이트입니다. 마을 로고를 활용한 브랜딩으로 정체성을 확립하고, 풍부한 콘텐츠를 탭(Tab) 방식의 UI로 구성하여 가독성을 높였습니다. 특히 유지보수 편의를 최우선으로 하여, 별도의 관리자 페이지 없이 로그인 후 웹페이지 상에서 직접 게시글을 작성하고 관리할 수 있는 사용자 직관적 백엔드 시스템을 설계 및 구현했습니다.",
        link: "https://www.xn--v69a26wxzc7vev0j.com/",
      },
      {
        id: 8,
        title: "경관 조명 기업 브랜드 웹사이트",
        subtitle: "Landscape Lighting Design & Installation Showcase",
        year: "2023",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["React", "Styled-Components", "Framer Motion", "Gabia"],
        image: "/images/project08.png",
        modalBg: "/images/project-modal08.jpg",
        concept:
          "빛의 역동성을 담은 영상 배너와 정교한 포트폴리오를 갖춘 조명 브랜드 플랫폼",
        detail:
          "경관 조명 전문 기업의 가치를 높이기 위한 브랜드 사이트입니다. 로고 색상인 오렌지를 테마로 잡고, 메인 배너에 실제 조명 시공 영상을 적용하여 현장감과 시각적 몰입도를 극대화했습니다. 수많은 시공 사례를 효과적으로 노출하기 위해 갤러리형 설치 사례 게시판을 구현했으며, 직관적인 이메일 문의 기능을 연동하여 실제 비즈니스 전환이 이루어지도록 설계했습니다. React 기반으로 제작하여 빠른 페이지 전환과 가비아 환경에서의 안정적인 운영 환경을 구축했습니다.",
        link: "hklighting.co.kr",
      },
      {
        id: 9,
        title: "사천시 항공적성 테스트",
        subtitle: "Aviation Aptitude Assessment Experience Program",
        year: "2025",
        contribution: "100% (Solo Project)",
        role: "UI/UX Designer & Front-End Developer",
        stack: ["React", "Custom Hook", "CSS Animation", "E-mail Service"],
        image: "/images/project09.png",
        modalBg: "/images/project-modal09.jpg",
        concept:
          "게이미피케이션 요소와 정교한 로컬 로직으로 구현한 체험형 적성 검사 플랫폼",
        detail:
          "사천시 방문객들을 위해 제작된 항공적성 체험 프로그램입니다. 별도의 DB 없이 클라이언트 로직만으로 답변 데이터를 취합하고 정교하게 점수를 환산하는 로컬 알고리즘을 직접 설계했습니다. 사천시 캐릭터를 활용한 역동적인 GIF와 상황별 사운드, 애니메이션을 조화시켜 테스트 도중 이탈을 방지하는 몰입형 경험을 제공합니다. 가상 키보드를 통한 결과 메일 발송 기능을 구현하였으며, 전송되는 리포트 메일에도 고유의 CSS 디자인을 적용하여 사용자 경험을 메일까지 확장시켰습니다.",
        link: "https://aviation-test-frontend.vercel.app/",
      },
      {
        id: 10,
        title: "성교육 버스 퀴즈 프로그램",
        subtitle: "Interactive Kiosk & Mobile Canvas Integration",
        year: "2025",
        contribution: "100% (Solo Project)",
        role: "Interaction Designer & Frontend Developer",
        stack: ["React", "Canvas API", "QR Integration", "Node.js"],
        image: "/images/project10.png",
        modalBg: "/images/project-modal10.jpg",
        concept:
          "QR 모바일 캔버스를 활용한 사용자 참여형 인터랙티브 교육 플랫폼",
        detail:
          "성체험 버스 내 터치스크린과 사용자의 스마트폰을 연동한 교육용 프로그램으로, 3840*2160 고해상도 환경에 최적화 되었습니다. 사용자가 QR 코드를 스캔해 모바일 웹 캔버스에서 답을 작성하고 전송하면, 별도의 실시간 소켓 없이 HTTP 통신 로직을 통해 메인 화면에 결과가 즉시 표시되도록 구현했습니다. OX 퀴즈와 3x3 빙고 게임에 카운트다운 등 게이미피케이션 요소를 가미했으며, 관리자 페이지를 통해 현장에서 실시간으로 퀴즈 내용을 제어할 수 있도록 설계했습니다.",
        link: "http://gnsay1388.co.kr/",
      },
    ],
    [],
  );

  const sectionRef = useRef(null);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [overlayBox, setOverlayBox] = useState({ top: 0, height: 0 });

  useEffect(() => {
    console.log(
      "%c✨ 이스터에그를 찾아보세요! 👀",
      "color: #a0ea00; font-size: 16px; font-weight: bold; background: #333; padding: 8px 12px; border-radius: 8px;",
    );
  }, []);

  const handleVisitSite = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      alert("해당 프로젝트의 라이브 사이트가 준비 중입니다.");
    }
  };

  const closeModal = () => {
    const tl = gsap.timeline();
    tl.to(".animate-item", {
      x: -30,
      opacity: 0,
      duration: 0.3,
      stagger: 0.05,
      ease: "power2.in",
    })
      .to(
        ".project-modal",
        { x: -50, opacity: 0, duration: 0.4, ease: "power2.in" },
        "-=0.2",
      )
      .to(
        ".project-modal-overlay",
        {
          opacity: 0,
          duration: 0.3,
          onComplete: () => {
            setSelected(null);
            gsap.to(["#header", ".scroll-to-top-btn"], {
              opacity: 1,
              duration: 0.3,
            });
          },
        },
        "-=0.2",
      );
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selected) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  useEffect(() => {
    if (selected) {
      gsap.to(["#header", ".scroll-to-top-btn"], { opacity: 0, duration: 0.3 });

      const tl = gsap.timeline();
      tl.fromTo(
        ".project-modal-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
      )
        .fromTo(
          ".project-modal",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          ".animate-item",
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: "power2.out" },
          "-=0.4",
        );
    }
  }, [selected]);

  useEffect(() => {
    if (!hovered) return;
    const SAFE_TOP = 72;
    let raf = 0;
    const updateOverlay = () => {
      raf = 0;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      const visibleTop = Math.max(rect.top, SAFE_TOP);
      const visibleBottom = Math.min(rect.bottom, vh);
      const height = Math.max(0, visibleBottom - visibleTop);
      setOverlayBox({ top: Math.max(0, visibleTop), height });
    };
    const onScrollOrResize = () => {
      if (raf) return;
      raf = requestAnimationFrame(updateOverlay);
    };
    updateOverlay();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hovered]);

  return (
    <section
      ref={sectionRef}
      className="project-wrap"
      id="project"
      data-cursor-exclude="true"
    >
      <div className="section-fluid-main">
        <div className="project-header">
          <h2 className="project-label">Projects</h2>
          <p className="project-title">Hello, My Creations!</p>
        </div>

        <div className="section-row">
          {projects.map((p) => (
            <div
              key={p.id}
              className="section-col"
              onMouseEnter={() => setHovered(p)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                type="button"
                className="section"
                onClick={() => setSelected(p)}
                aria-label={`${p.title} 상세 보기`}
              >
                <div className="section-in">
                  <img src={p.image} alt={p.title} />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {hovered && overlayBox.height > 0 && (
        <div
          className="hover-text-global"
          aria-hidden="true"
          data-cursor-exclude="true"
          style={{
            top: `${overlayBox.top}px`,
            height: `${overlayBox.height}px`,
          }}
        >
          <div className="hover-text-content">
            <span className="hover-subtitle">{hovered.subtitle}</span>
            <h2 className="hover-title">{hovered.title}</h2>
          </div>
        </div>
      )}

      {selected && (
        <div
          className="project-modal-overlay"
          data-cursor-exclude="true"
          onMouseDown={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div
            className="project-modal full-bg-modal"
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-background-img">
              <img src={selected.modalBg} alt="Project Detail" />
              <div className="modal-overlay-gradient"></div>
            </div>

            <button
              type="button"
              className="project-modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="project-modal-content-inner">
              <div className="modal-left-info">
                <span className="info-tag animate-item">{selected.year}</span>
                <h3 className="modal-main-title animate-item">
                  {selected.title}
                </h3>
                <p className="modal-main-subtitle animate-item">
                  {selected.subtitle}
                </p>

                <div className="info-grid-container">
                  <div className="info-group animate-item">
                    <label>CONTRIBUTION</label>
                    <p>{selected.contribution}</p>
                  </div>
                  <div className="info-group animate-item">
                    <label>TECH STACK</label>
                    <p>{selected.stack.join(", ")}</p>
                  </div>
                  <div className="info-group animate-item">
                    <label>DESIGN CONCEPT</label>
                    <p>{selected.concept}</p>
                  </div>
                  <div className="info-group animate-item">
                    <label>DESCRIPTION</label>
                    <p className="desc-text">{selected.detail}</p>
                  </div>
                </div>

                <div className="modal-footer-btns animate-item">
                  <button
                    className="btn-visit"
                    onClick={() => handleVisitSite(selected.link)}
                  >
                    Visit Site ↗
                  </button>
                  <button className="btn-close-text" onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
