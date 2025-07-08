// components/BackgroundDecor.tsx
"use client";

export default function BackgroundDecor() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 top-[-10%] left-[-10%] animate-float-slow" />
      <div className="absolute w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-20 bottom-[-10%] right-[-10%] animate-float-medium" />
    </div>
  );
}
