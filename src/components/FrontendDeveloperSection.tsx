import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import OrbitAnimation from "./OrbitAnimation";
export default function FrontendDeveloperSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { amount: 0.4 });

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);


  return (

    <motion.section
      ref={ref}
      id="frontend"
      initial={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      animate={{
        x: 0,
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative w-full min-h-screen bg-black text-white overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12 px-6 md:px-20 pt-36 pb-24 select-none"
    >
      {/* TEXT */}
      <div className="relative z-10 max-w-2xl w-full lg:w-1/2">
        <motion.div className="flex items-center mb-6">
          <motion.span
            animate={{
              width: ["0ch", "32ch", "32ch", "0ch"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              times: [0, 0.3, 0.8, 1],
            }}
            className="inline-block overflow-hidden whitespace-nowrap text-[11px] tracking-[0.3em] uppercase text-white/60 font-mono"
          >
            ✦ Available for work
          </motion.span>

          <motion.span
            animate={{
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="text-white/60 font-mono ml-[2px]"
          >
            |
          </motion.span>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.85, y: 50 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.85, y: 50 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold leading-[1.05] tracking-tighter text-white text-[clamp(48px,8vw,100px)]"
          >
            Full Stack
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, x: -80, rotate: -4 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : { opacity: 0, x: -80, rotate: -4 }}
            transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-extrabold leading-[1.05] tracking-tighter text-white/70 text-[clamp(48px,8vw,100px)]"
          >
            Developer
          </motion.h1>
          
          <motion.h2
             initial={{ opacity: 0, y: 30 }}
             animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
             transition={{ duration: 1, delay: 0.4 }}
             className="font-display font-bold text-white/50 text-[clamp(20px,4vw,36px)] mb-8 mt-2 uppercase tracking-[0.2em]"
          >
            & UI/UX Designer
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative text-sm sm:text-base lg:text-xl
    leading-relaxed max-w-md
    font-[Poppins] font-medium
    tracking-wide
    text-transparent bg-clip-text
    bg-[length:200%_auto]
    bg-gradient-to-r
    from-white via-white/60 to-white
    animate-[shine_4s_linear_infinite]"
        >
          Crafting seamless user experiences and building robust, scalable systems from frontend to backend.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-6 flex flex-wrap gap-4"
        >
          {["MERN Stack", "Nest.js", "Python", "Apache Kafka", "UI/UX Design", "Figma", "Framer"].map((tech) => (
            <div
              key={tech}
              className="
        relative group px-5 py-2.5 rounded-2xl
        text-sm font-medium text-white/90
        bg-white/5 backdrop-blur-xl
        border border-white/10
        overflow-hidden
        transition-all duration-300
      "
            >
              {/* animated border fill */}
              <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 bg-gradient-to-r from-[#E5E4E2]/40 via-[#E5E4E2]/20 to-transparent"></span>

              {/* glowing border line */}
              <span className="absolute inset-0 rounded-2xl border border-[#E5E4E2]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_15px_rgba(229,228,226,0.3)]"></span>

              {/* text */}
              <span className="relative z-10">{tech}</span>
            </div>
          ))}
        </motion.div>


      </div>

      {/* 2D ORBIT ANIMATION */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0"
      >
        <OrbitAnimation />
      </motion.div>
    </motion.section>
  );
}