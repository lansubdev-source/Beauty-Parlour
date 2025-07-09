"use client";

import { useEffect } from "react";

export default function SmokeyCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "smokey-cursor";
    document.body.appendChild(cursor);

    const sparkles: HTMLDivElement[] = [];
    let timeoutId: NodeJS.Timeout;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";

      cursor.style.opacity = "1";
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cursor.style.opacity = "0";
      }, 150);

      // Create multiple sparkles around the cursor
      for (let i = 0; i < 3; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        const offsetX = (Math.random() - 0.5) * 30;
        const offsetY = (Math.random() - 0.5) * 30;
        const scale = 0.6 + Math.random() * 1.4;

        sparkle.style.left = `${e.clientX + offsetX}px`;
        sparkle.style.top = `${e.clientY + offsetY}px`;
        sparkle.style.transform = `translate(-50%, -50%) scale(${scale})`;
        document.body.appendChild(sparkle);
        sparkles.push(sparkle);

        setTimeout(() => {
          sparkle.remove();
        }, 800);
      }
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
        background: radial-gradient(circle, rgba(230, 60, 130, 0.25), rgba(230, 60, 130, 0.05));
        pointer-events: none;
        transform: translate(-50%, -50%);
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.2s ease;
        filter: blur(4px);
      }

      .sparkle {
        position: fixed;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 180, 200, 0.5), rgba(230, 60, 130, 0));
        box-shadow: 0 0 15px rgba(230, 60, 130, 0.3);
        pointer-events: none;
        animation: sparkle-fade 0.8s ease-out forwards;
        z-index: 9998;
        filter: blur(3px);
      }

      @keyframes sparkle-fade {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(2.5);
        }
      }
    `}</style>
  );
}
