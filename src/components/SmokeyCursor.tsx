"use client";

import { useEffect } from "react";

export default function SmokeyCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "smokey-cursor";
    document.body.appendChild(cursor);

    const sparkles: HTMLDivElement[] = [];

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      const sparkle = document.createElement("div");
      sparkle.className = "sparkle";
      sparkle.style.left = e.clientX + "px";
      sparkle.style.top = e.clientY + "px";
      document.body.appendChild(sparkle);
      sparkles.push(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 600);
    };

    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
      cursor.remove();
      sparkles.forEach((s) => s.remove());
    };
  }, []);

  return (
    <style>{`
      .smokey-cursor {
        position: fixed;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255,105,180,0.7), rgba(255,105,180,0.2));
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        box-shadow: 0 0 20px rgba(255, 105, 180, 0.9);
        mix-blend-mode: screen;
        animation: neon-pulse 1.5s infinite;
      }

      .sparkle {
        position: fixed;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 182, 193, 0));
        box-shadow: 0 0 10px rgba(255, 192, 203, 0.7);
        pointer-events: none;
        transform: translate(-50%, -50%) scale(1);
        animation: sparkle-fade 0.6s ease-out forwards;
        z-index: 9998;
      }

      @keyframes sparkle-fade {
        0% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        100% {
          opacity: 0;
          transform: translate(-50%, -50%) scale(1.8);
        }
      }

      @keyframes neon-pulse {
        0%, 100% {
          box-shadow: 0 0 20px rgba(255,105,180,0.8), 0 0 40px rgba(255,105,180,0.5);
        }
        50% {
          box-shadow: 0 0 30px rgba(255,20,147,0.9), 0 0 60px rgba(255,20,147,0.7);
        }
      }
    `}</style>
  );
}
