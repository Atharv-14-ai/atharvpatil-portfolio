import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import favicon from "/favicon.ico";

import heroEye from "@/assets/hero-eye.png";

import WelcomeScreen from "@/components/WelcomeScreen";
import FrontendDeveloperSection from "@/components/FrontendDeveloperSection";
import Showcase from "./components/Showcase";
import ContactSection from "@/components/ContactSection";
import { Routes, Route, Navigate } from "react-router-dom";
import AboutSection from "@/components/AboutSection";
import CustomCursor from "@/components/CustomCursor";
import Hero3D from "@/components/Hero3D";
import Lenis from "lenis";


const logos = ["ATHARV", "PATIL", "FULL STACK", "DEVELOPER", "UI/UX", "DESIGNER"];

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [time, setTime] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const text = "ATHARV";
  const [displayed, setDisplayed] = useState("");
  const [colorMode, setColorMode] = useState(0);

  const colors = [
    "bg-gradient-to-b from-white via-gray-200 via-gray-500 to-black text-transparent bg-clip-text",
    "text-white",
    "bg-gradient-to-b from-black via-gray-500 via-gray-200 to-white text-transparent bg-clip-text",
  ];

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showWelcome || mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showWelcome, mobileMenu]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    function type() {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i < text.length) setTimeout(type, 200);
    }
    type();
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <CustomCursor />
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white overflow-clip">
            <AnimatePresence>{showWelcome && <WelcomeScreen />}</AnimatePresence>

            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 backdrop-blur-xl bg-black/20 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.jpg"
                  alt="Logo"
                  className="w-12 h-12 rounded-full object-cover shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />

                <span className="text-[10px] md:text-xs tracking-[0.3em] text-white/70 uppercase font-medium">
                  ATHARV · PATIL
                </span>
              </div>
              <ul className="hidden md:flex items-center gap-10 text-xs tracking-widest text-white/70 uppercase">
                <li
                  onClick={() =>
                    document.getElementById("Home")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Home
                </li>

                <li
                  onClick={() =>
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  About
                </li>

                <li
                  onClick={() =>
                    document.getElementById("showcase")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Showcase
                </li>

                <li
                  onClick={() =>
                    document.getElementById("certificates")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Certificates
                </li>

                <li
                  onClick={() =>
                    document.getElementById("techstack")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Tech Stack
                </li>

                <li
                  onClick={() =>
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                  className="relative hover:text-white transition-colors cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact
                </li>
              </ul>

              <div className="hidden md:block text-[10px] tracking-[0.3em] text-white/70 uppercase">
                {time}
              </div>

              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden text-white z-50"
              >
                {mobileMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </nav>


            {mobileMenu && (
              <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 text-white uppercase tracking-[0.3em] text-sm md:hidden">

                <div className="absolute top-30 text-center">
                  <p className="text-[10px] text-white/40 tracking-[0.3em] mb-2">
                    TIME
                  </p>

                  <h2 className="text-2xl tracking-widest font-semibold">
                    {time}
                  </h2>
                </div>

                <button
                  onClick={() => {
                    document.getElementById("Home")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  Home
                </button>

                <button
                  onClick={() => {
                    document.getElementById("about")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  About
                </button>

                <button
                  onClick={() => {
                    document.getElementById("showcase")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  Showcase
                </button>

                <button
                  onClick={() => {
                    document.getElementById("certificates")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  Certificates
                </button>

                <button
                  onClick={() => {
                    document.getElementById("techstack")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  Tech Stack
                </button>

                <button
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({
                      behavior: "smooth",
                    });
                    setMobileMenu(false);
                  }}
                  className="relative after:absolute after:left-0 after:-bottom-2 after:h-[1px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                >
                  Contact
                </button>
              </div>
            )}

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
      `}</style>

            <section id="Home">
              <FrontendDeveloperSection />
            </section>
            
            <AboutSection />
            
            <section id="showcase">
              <Showcase />
            </section>
            <section id="contact">
              <ContactSection />
            </section>
          </div>
        }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}