import React, { useState, useEffect, useRef } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const API_URL = "http://localhost:5001/api";

  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [commentInput, setCommentInput] = useState("");
  const [comments, setComments] = useState([]);
  const [visualEffects, setVisualEffects] = useState([]);
  const chatScrollRef = useRef(null);

  const triggerEffect = (effectClass, emojiChar) => {
    const id = Date.now() + Math.random();
    const newEffect = {
      id,
      className: effectClass,
      emoji: emojiChar,
      left: Math.random() * 70 + 15 + "%",
    };
    setVisualEffects((prev) => [...prev, newEffect]);
    setTimeout(() => {
      setVisualEffects((prev) => prev.filter((eff) => eff.id !== id));
    }, 2000);
  };

  useEffect(() => {
    fetch(`${API_URL}/data`)
      .then((res) => res.json())
      .then((data) => {
        setLikes(data.likes);
        setComments([...(data.comments || [])].reverse());
        if (chatScrollRef.current) chatScrollRef.current.scrollTop = 0;
      })
      .catch((err) => console.error("Load error:", err));
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true);
      fetch(`${API_URL}/like`, { method: "POST" })
        .then((res) => res.json())
        .then((data) => setLikes(data.likes))
        .catch((err) => console.error("Like error:", err));
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const text = commentInput.trim();
    if (!text) return;

    try {
      const res = await fetch(`${API_URL}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        const msg =
          data?.message ||
          data?.error ||
          "등록에 실패했습니다. 잠시 후 다시 시도해주세요.";
        alert(msg);
        return;
      }

      const effectGroups = [
        {
          keys: ["좋아", "조아", "짱", "사랑"],
          effect: { class: "anim-heart", emoji: "❤️" },
        },
        {
          keys: ["최고", "굿", "추천"],
          effect: { class: "anim-thumb", emoji: "👍" },
        },
        {
          keys: ["응원", "화이팅", "파이팅"],
          effect: { class: "anim-fire", emoji: "🔥" },
        },
        {
          keys: ["대박", "멋지다", "멋진", "멋져"],
          effect: { class: "anim-sparkle", emoji: "✨" },
        },
        {
          keys: ["연락", "전화", "커피", "메일"],
          effect: { class: "anim-call", emoji: "💌" },
        },
      ];

      effectGroups.forEach((group) => {
        if (group.keys.some((key) => text.includes(key))) {
          setTimeout(
            () => triggerEffect(group.effect.class, group.effect.emoji),
            200,
          );
        }
      });

      setComments((prev) => [...prev, data.comment]);
      setCommentInput("");

      setTimeout(() => {
        if (chatScrollRef.current) {
          chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
        }
      }, 100);
    } catch (err) {
      console.error("Comment submit error:", err);
      alert("네트워크 오류가 발생했습니다..");
    }
  };

  return (
    <section className="contact-wrap" id="contact">
      <div className="section-fluid-main">
        <div className="project-header">
          <h2 className="project-label">CONTACT</h2>
          <p className="project-title">Hello, Future Partner!</p>
        </div>

        <div className="contact-content-inner">
          <div className="chat-like-box">
            <button
              className={`chat-like-btn ${hasLiked ? "liked" : ""}`}
              onClick={handleLike}
            >
              {hasLiked ? "❤️" : "🤍"}
            </button>
            <span>{likes}명이 이 포트폴리오를 응원합니다!</span>
          </div>

          <div className="kakao-chat-window">
            <div className="effect-layer">
              {visualEffects.map((eff) => (
                <span
                  key={eff.id}
                  className={`anim-element ${eff.className}`}
                  style={{ left: eff.left }}
                >
                  {eff.emoji}
                </span>
              ))}
            </div>

            <div className="chat-messages-area" ref={chatScrollRef}>
              <div className="message-row me">
                <div className="bubble">
                  포트폴리오는 어떠셨나요? 😎
                  <br />
                  저와 함께 즐거운 프로젝트를 시작해볼 분들의 연락을
                  기다립니다!❣️
                </div>
                <span className="msg-time">방금 전</span>
              </div>

              {comments.map((c) => (
                <div key={c.id} className="message-row visitor">
                  <div className="visitor-profile">
                    <svg
                      viewBox="0 0 24 24"
                      fill="#d1d1d1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.33 4 18V20H20V18C20 15.33 14.67 14 12 14Z" />
                    </svg>
                  </div>
                  <div className="visitor-content">
                    <span className="visitor-name">방문자</span>
                    <div className="bubble">{c.text}</div>
                  </div>
                  <span className="msg-time">{c.date}</span>
                </div>
              ))}
            </div>

            <form className="chat-input-bar" onSubmit={handleSubmitComment}>
              <input
                type="text"
                placeholder="메시지 입력"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <button
                type="submit"
                className={commentInput.trim() ? "active" : ""}
              >
                전송
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
