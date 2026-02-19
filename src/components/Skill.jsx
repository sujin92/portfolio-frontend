import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Skill.css";

gsap.registerPlugin(ScrollTrigger);

const INITIAL_TABS = [
  { id: "design", label: "Design", icon: "🎨" },
  { id: "frontend", label: "FrontEnd", icon: "💻" },
  { id: "backend", label: "BackEnd", icon: "⚙️" },
  { id: "deployment", label: "DevOps & Tools", icon: "🚀" },
];

const TAB_CONTENTS = {
  design: {
    title: "Skill Stack",
    highlight: "@Design",
    desc: "디자이너 출신의 감각을 살려, <strong>심미적이고 사용성 높은 UI</strong>를 직접 설계하고 구현합니다.",
    items: [
      {
        class: "ai",
        icon: "Ai",
        name: "Illustrator",
        desc: [
          "벡터 기반의 아이콘, 로고, SVG 그래픽 에셋을 직접 제작하여 웹에 최적화합니다.",
          "다양한 해상도에 대응하는 선명한 그래픽 요소를 설계합니다.",
        ],
      },
      {
        class: "ps",
        icon: "Ps",
        name: "Photoshop",
        desc: [
          "UI 디자인 시안 제작 및 이미지 리터칭, 최적화 작업을 능숙하게 수행합니다.",
          "웹 로딩 속도를 고려한 이미지 압축 및 포맷 변환을 진행합니다.",
        ],
      },
    ],
  },
  frontend: {
    title: "Skill Stack",
    highlight: "@FrontEnd",
    desc: "사용자 경험을 최우선으로 생각하며, 인터랙티브한 반응형 웹사이트를 구축합니다.",
    items: [
      {
        class: "html",
        icon: "H5",
        name: "HTML5 / CSS3",
        desc: [
          "시맨틱 마크업을 준수하며, Flexbox/Grid 및 미디어 쿼리를 활용해 완벽한 반응형 웹을 구현합니다.",
        ],
      },
      {
        class: "js",
        icon: "JS",
        name: "JavaScript (ES6+)",
        desc: [
          "비동기 통신(Async/Await) 처리와 DOM 조작, 이벤트 핸들링을 사용합니다.",
        ],
      },
      {
        class: "react",
        icon: "Re",
        name: "React Ecosystem",
        desc: [
          "Hooks를 활용한 함수형 컴포넌트 설계 및 상태 관리에 익숙합니다.",
          "Next.js: SSR/SEO 최적화 프로젝트 경험을 통해 렌더링 방식의 차이를 이해하고 있습니다.",
        ],
      },
      {
        class: "ts",
        icon: "TS",
        name: "TypeScript",
        desc: [
          "정적 타입 지정을 통해 코드의 안정성을 높이는 프로젝트를 수행하며 경험을 쌓고 있습니다.",
        ],
      },
      {
        class: "vite",
        icon: "Vi",
        name: "Build Tool (Vite)",
        desc: [
          "CRA 대비 빠른 빌드 속도의 이점을 이해하고 프로젝트 초기 세팅에 활용합니다.",
        ],
      },
    ],
  },
  backend: {
    title: "Skill Stack",
    highlight: "@BackEnd",
    desc: "프론트엔드 개발을 넘어, <strong>서버와의 데이터 통신 흐름을 이해</strong>하기 위해 백엔드 프로젝트를 직접 구축해 본 경험이 있습니다.",
    items: [
      {
        class: "node",
        icon: "No",
        name: "Node.js",
        desc: [
          "서버 환경을 구축하고 API를 개발하며 클라이언트-서버 간의 통신 구조를 익혔습니다.",
        ],
      },
      {
        class: "db",
        icon: "DB",
        name: "Database (MySQL / MongoDB)",
        desc: [
          "데이터베이스를 프로젝트에 연동하여 데이터를 저장하고 관리해 본 경험이 있습니다.",
        ],
      },
    ],
  },
  deployment: {
    title: "Skill Stack",
    highlight: "@DevOps & Tools",
    desc: "안정적인 프로젝트 관리와 배포를 위한 다양한 도구들을 적극적으로 활용합니다.",
    items: [
      {
        class: "git",
        icon: "Gi",
        name: "Git / GitHub",
        desc: [
          "형상 관리를 통해 코드의 변경 사항을 추적하고 협업 워크플로우를 경험했습니다.",
        ],
      },
      {
        class: "deploy",
        icon: "De",
        name: "Deployment (Vercel, Railway)",
        desc: ["프로젝트를 실제 웹 환경에 배포하고 운영해 본 경험이 있습니다."],
      },
      {
        class: "docker",
        icon: "Do",
        name: "Docker",
        desc: [
          "컨테이너 기반의 개발 환경 세팅과 배포 과정에 대해 학습하고 프로젝트에 적용해 보았습니다.",
        ],
      },
    ],
  },
};

const Skill = () => {
  const container = useRef(null);

  const [tabs, setTabs] = useState(INITIAL_TABS);
  const [activeTab, setActiveTab] = useState("design");
  const [history, setHistory] = useState(["design"]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [url, setUrl] = useState("https://sujin.dev/skills/design");
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSplitView, setIsSplitView] = useState(false);
  const [splitTab, setSplitTab] = useState("frontend");

  useGSAP(
    () => {
      gsap.from(".skill-header > *", {
        scrollTrigger: { trigger: ".skill-header", start: "top 80%" },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
      gsap.to(".window-container", {
        scrollTrigger: { trigger: ".window-container", start: "top 85%" },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container },
  );

  useGSAP(
    () => {
      if (!isSplitView && !isMinimized && activeTab) {
        gsap.fromTo(
          ".tab-content-inner",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            clearProps: "all",
          },
        );
      }
    },
    { dependencies: [activeTab, isSplitView, isMinimized], scope: container },
  );

  const handleTabChange = (id) => {
    if (id === activeTab) return;
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(id);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);

    setActiveTab(id);
    setUrl(`https://sujin.dev/skills/${id}`);

    if (isSplitView && id === splitTab) {
      const nextTab = tabs.find((t) => t.id !== id)?.id;
      if (nextTab) setSplitTab(nextTab);
    }

    if (isMinimized) setIsMinimized(false);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const prevId = history[historyIndex - 1];
      if (tabs.find((t) => t.id === prevId) || prevId === "contact") {
        setHistoryIndex(historyIndex - 1);
        setActiveTab(prevId);
        setUrl(`https://sujin.dev/skills/${prevId}`);
      }
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const nextId = history[historyIndex + 1];
      if (tabs.find((t) => t.id === nextId) || nextId === "contact") {
        setHistoryIndex(historyIndex + 1);
        setActiveTab(nextId);
        setUrl(`https://sujin.dev/skills/${nextId}`);
      }
    }
  };

  const handleAddTab = () => {
    const contactTabId = "contact";
    if (tabs.find((t) => t.id === contactTabId)) {
      handleTabChange(contactTabId);
      return;
    }
    const newTab = { id: "contact", label: "Together?", icon: "💌" };
    setTabs([...tabs, newTab]);
    setTimeout(() => handleTabChange("contact"), 50);
  };

  const handleCloseTab = (e, id) => {
    e.stopPropagation();
    const newTabs = tabs.filter((t) => t.id !== id);
    setTabs(newTabs);

    if (activeTab === id) {
      if (newTabs.length > 0) {
        const nextId = newTabs[newTabs.length - 1].id;
        setActiveTab(nextId);
        setUrl(`https://sujin.dev/skills/${nextId}`);
      } else {
        setActiveTab(null);
        setUrl("Error: Connection Lost");
      }
    }
  };

  const handleReboot = () => {
    setTabs(INITIAL_TABS);
    setActiveTab("design");
    setUrl("https://sujin.dev/skills/design");
    setHistory(["design"]);
    setHistoryIndex(0);
    setIsMinimized(false);
    setIsSplitView(false);

    gsap.fromTo(
      ".window-container",
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
    );
  };

  const handleRedBtn = () => {
    setTabs([]);
    setActiveTab(null);
    setUrl("Error: Connection Lost");
    setIsSplitView(false);
  };

  const handleYellowBtn = () => {
    if (tabs.length > 0) setIsMinimized(!isMinimized);
  };

  const handleGreenBtn = () => {
    if (tabs.length > 0) {
      setIsSplitView(!isSplitView);
      setIsMinimized(false);

      if (!isSplitView && activeTab === splitTab) {
        const nextTab = tabs.find((t) => t.id !== activeTab)?.id;
        if (nextTab) setSplitTab(nextTab);
      }
    }
  };

  const renderTabContent = (tabId) => {
    if (!tabId) return null;

    if (tabId === "contact") {
      return (
        <div className="tab-content-inner contact-tab">
          <h3 className="skill-detail-title">
            Want to work <span>Together?</span>
          </h3>
          <p className="skill-desc together-desc">
            디자인과 개발의 경계를 허물어 더 큰 시너지를 만듭니다.
            <br />
            저와 새로운 여정을 함께할 팀을 기다립니다.
          </p>
          <div className="contact-card">
            <div className="card-icon">📬</div>
            <div className="card-text">
              <strong>Email Me</strong>
              <p>920907v@naver.com</p>
            </div>
            <button
              className="copy-btn"
              onClick={() => {
                navigator.clipboard.writeText("920907v@naver.com");
                alert("이메일 주소가 복사되었습니다!");
              }}
            >
              Copy
            </button>
          </div>
        </div>
      );
    }

    const content = TAB_CONTENTS[tabId];
    if (!content) return null;

    return (
      <div className="tab-content-inner">
        <h3 className="skill-detail-title">
          {content.title} <span>{content.highlight}</span>
        </h3>
        <p
          className="skill-desc"
          dangerouslySetInnerHTML={{ __html: content.desc }}
        />

        {content.items.map((item, idx) => (
          <div className="tech-item" key={idx}>
            <div className="tech-header">
              <div className={`tech-icon-box ${item.class}`}>{item.icon}</div>
              <span className="tech-name">{item.name}</span>
            </div>
            <ul className="tech-desc-list">
              {item.desc.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="skill-section" ref={container}>
      <div className="skill-header">
        <span className="skill-label">SKILLS</span>
        <h2 className="skill-title">Hello, My Stack!</h2>
      </div>

      <div
        className={`window-container ${isSplitView ? "split-view" : ""} ${isMinimized ? "minimized" : ""}`}
      >
        <div
          className="window-head"
          onDoubleClick={() => setIsMinimized(false)}
        >
          <div className="window-buttons">
            <div
              className="win-btn red"
              onClick={handleRedBtn}
              title="Close All"
            ></div>
            <div
              className="win-btn yellow"
              onClick={handleYellowBtn}
              title={isMinimized ? "Expand" : "Minimize"}
            ></div>
            <div
              className="win-btn green"
              onClick={handleGreenBtn}
              title={isSplitView ? "Single View" : "Split View"}
            ></div>
          </div>
          <div className="tabs-group">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabChange(tab.id)}
              >
                <span className="tab-icon">{tab.icon}</span>
                {tab.label}
                <span
                  className="tab-close"
                  onClick={(e) => handleCloseTab(e, tab.id)}
                >
                  ✕
                </span>
              </div>
            ))}
            {tabs.length > 0 && !tabs.find((t) => t.id === "contact") && (
              <div
                className="tab add-btn"
                onClick={handleAddTab}
                title="Open Hidden Tab"
              >
                +
              </div>
            )}
          </div>
        </div>

        <div className="window-body-wrapper">
          <div className="window-toolbar">
            <div className="nav-arrows">
              <div
                className={`nav-arrow back ${historyIndex === 0 ? "disabled" : ""}`}
                onClick={goBack}
              ></div>
              <div
                className={`nav-arrow forward ${historyIndex === history.length - 1 ? "disabled" : ""}`}
                onClick={goForward}
              ></div>
            </div>

            <div className="address-bar-container">
              <span className="address-icon">🔒</span>
              <span className="url-text">{url}</span>
            </div>
          </div>

          <div className="window-content">
            {tabs.length === 0 ? (
              <div className="bsod-screen">
                <div className="bsod-face">:(</div>
                <h3 className="bsod-title">Your PC ran into a problem.</h3>
                <p className="bsod-desc">모든 스킬 탭이 닫혔습니다.</p>
                <p className="bsod-code">Stop code: SKILLS_ARE_IMPORTANT</p>
                <button className="reboot-btn" onClick={handleReboot}>
                  System Reboot (Restore Tabs)
                </button>
              </div>
            ) : (
              <div className="content-layout">
                <div className="panel left-panel">
                  {renderTabContent(activeTab)}
                </div>

                {isSplitView && (
                  <div className="panel right-panel">
                    <div className="panel-toolbar">
                      <span>Compare with: </span>
                      <select
                        value={splitTab}
                        onChange={(e) => setSplitTab(e.target.value)}
                        className="panel-select"
                      >
                        {tabs
                          .filter((t) => t.id !== activeTab)
                          .map((t) => (
                            <option key={t.id} value={t.id}>
                              {t.label}
                            </option>
                          ))}
                      </select>
                    </div>
                    {renderTabContent(splitTab)}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
