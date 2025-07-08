import "./globals.css";
import { ReactNode } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata = {
  title: "The Beauty Lounge",
  description: "Experience elegance and rejuvenation at The Beauty Lounge — where beauty meets luxury.",
  icons: {
    icon: "/images/logo.png", // or use "/favicon.ico"
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          />

        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-30 top-[-10%] left-[-10%] animate-float-slow"></div>
        <div className="absolute w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-20 bottom-[-10%] right-[-10%] animate-float-medium"></div>
      </div>
        {children}
      </body>
    </html>
  );
}
