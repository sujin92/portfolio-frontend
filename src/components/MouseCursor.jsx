import React, { useRef, useEffect } from "react";
import "../styles/MouseCursor.css";

const MouseCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const params = {
      pointsNumber: 30,
      widthFactor: 20,
      spring: 0.4,
      friction: 0.5,
    };

    const trail = new Array(params.pointsNumber).fill().map(() => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      dx: 0,
      dy: 0,
    }));

    const pointer = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };

    const handleTouchMove = (e) => {
      pointer.x = e.touches[0].clientX;
      pointer.y = e.touches[0].clientY;
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;

        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;

        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);

        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);

        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);

        const gradient = ctx.createRadialGradient(
          xc,
          yc,
          0,
          xc,
          yc,
          ctx.lineWidth / 1.5,
        );

        gradient.addColorStop(0, "rgba(0, 104, 183, 1)");

        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(xc, yc);
      }

      animationFrameId = requestAnimationFrame(update);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    update();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" />;
};

export default MouseCursor;
