import React from "react";
import { FaHtml5, FaUnity, FaJava, FaFigma, FaJs, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiC } from "react-icons/si"; // C icon

export default function OrbitAnimation() {
  return (
    <div className="portfolio10-me">
      <div className="portfolio10-orbit">
        <span className="portfolio10-icon portfolio10-html"><FaHtml5 /></span>
        <span className="portfolio10-icon portfolio10-unity"><FaUnity /></span>
        <span className="portfolio10-icon portfolio10-java"><FaJava /></span>
        <span className="portfolio10-icon portfolio10-C"><SiC /></span>
        <span className="portfolio10-icon portfolio10-figma"><FaFigma /></span>
        <span className="portfolio10-icon portfolio10-js"><FaJs /></span>
        <span className="portfolio10-icon portfolio10-css"><FaCss3Alt /></span>
        <span className="portfolio10-icon portfolio10-react"><FaReact /></span>
      </div>
      <div className="portfolio10-img-wrapper">
        <video 
          src="/robo.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <style>{`
        .portfolio10-me {
          position: relative;
          width: 470px;
          height: 470px;
          margin: 0 auto;
        }

        .portfolio10-img-wrapper {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 340px;
          height: 340px;
          border-radius: 50%;
          border: 3px solid #E5E4E2;
          z-index: 2;
          overflow: hidden;
        }

        .portfolio10-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        /* Hide Spline Watermark */
        a[href^="https://spline.design"] { display: none !important; }
        .spline-watermark { display: none !important; }

        .portfolio10-orbit {
          position: absolute;
          width: 470px;
          height: 470px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          animation: portfolio10-spin 18s linear infinite;
          z-index: 1;
        }

        .portfolio10-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 46px;
          height: 46px;
          background: #0b0b0b;
          border: 1px solid #E5E4E2;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #ffffff;
          cursor: pointer;
          transform-origin: 0 0;
          transition: 0.3s ease;
        }

        .portfolio10-icon:hover {
          background: #E5E4E2;
          box-shadow: 0 0 15px #E5E4E2;
        }

        .portfolio10-html   { transform: rotate(0deg)   translate(235px); }
        .portfolio10-unity  { transform: rotate(45deg)  translate(235px); }
        .portfolio10-java   { transform: rotate(90deg)  translate(235px); }
        .portfolio10-C      { transform: rotate(135deg) translate(235px); }
        .portfolio10-figma  { transform: rotate(180deg) translate(235px); }
        .portfolio10-js     { transform: rotate(225deg) translate(235px); }
        .portfolio10-css    { transform: rotate(270deg) translate(235px); }
        .portfolio10-react  { transform: rotate(315deg) translate(235px); }

        .portfolio10-html svg { color: #e34f26; }
        .portfolio10-css svg  { color: #1572b6; }
        .portfolio10-js svg   { color: #f7df1e; }
        .portfolio10-java svg { color: #007396; }
        .portfolio10-unity svg{ color: #ffffff; }
        .portfolio10-figma svg{ color: #f24e1e; }
        .portfolio10-C svg    { color: #a8b9cc; }
        .portfolio10-react svg{ color: #61DAFB; }

        @keyframes portfolio10-spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
        
        /* Mobile overrides to prevent overflow issues */
        @media (max-width: 600px) {
          .portfolio10-me {
            width: 200px;
            height: 200px;
          }
          .portfolio10-img-wrapper {
            width: 145px;
            height: 145px;
          }
          .portfolio10-orbit {
            width: 200px;
            height: 200px;
            animation-duration: 32s;
          }
          .portfolio10-icon {
            width: 26px;
            height: 26px;
            font-size: 12px;
          }
          .portfolio10-html   { transform: rotate(0deg)   translate(100px); }
          .portfolio10-unity  { transform: rotate(45deg)  translate(100px); }
          .portfolio10-java   { transform: rotate(90deg)  translate(100px); }
          .portfolio10-C      { transform: rotate(135deg) translate(100px); }
          .portfolio10-figma  { transform: rotate(180deg) translate(100px); }
          .portfolio10-js     { transform: rotate(225deg) translate(100px); }
          .portfolio10-css    { transform: rotate(270deg) translate(100px); }
          .portfolio10-react  { transform: rotate(315deg) translate(100px); }
        }
      `}</style>
    </div>
  );
}
