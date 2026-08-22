import { motion } from "framer-motion";
import { FaDownload, FaBriefcase, FaCode, FaCertificate, FaGlobe, FaArrowRight } from "react-icons/fa";
import { VelocityScroll } from "./VelocityScroll";
import { ButtonMovingBorder } from "./MovingBorderButton";

export default function AboutSection() {

  return (
    <section id="about" className="relative w-full min-h-screen bg-black text-white pt-32 pb-20 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#E5E4E2]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#E5E4E2]/5 blur-[100px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true, amount: 0.2 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="text-center relative z-10"
      >
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-20">
          <VelocityScroll defaultVelocity={3} numRows={1} className="max-w-full">
            <span className="font-bold font-sans" style={{ fontSize: "5rem", lineHeight: "1.1", color: "#E5E4E2" }}>
              ABOUT <span className="text-white">ME</span>
            </span>
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent"></div>
          <VelocityScroll defaultVelocity={-3} numRows={1} className="max-w-full mt-2">
            <span className="font-bold font-sans" style={{ fontSize: "5rem", lineHeight: "1.1", color: "#E5E4E2" }}>
              ABOUT <span className="text-white">ME</span>
            </span>
          </VelocityScroll>
        </div>
        <p className="text-lg text-white/60 mt-2 font-mono px-1 mb-20 tracking-widest uppercase">
          ✧ Passionate about coding and creative technology ✧
        </p>
      </motion.div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-6">
        
        {/* Left Column: Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="md:w-1/3 flex justify-center mb-12 md:mb-0"
        >
          <motion.div 
            className="relative group cursor-pointer"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            {/* Platinum Border Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#E5E4E2] to-slate-700 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0f0f0f] shadow-2xl">
              <img 
                src="/profile.jpeg" 
                alt="Atharv Patil"
                className="w-full max-w-[350px] h-[450px] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none z-10" />
              
              {/* Shine effect on hover */}
              <div className="absolute top-0 -left-[100%] h-full w-[50%] skew-x-[-25deg] bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none z-20" />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left px-4 md:px-12 md:w-1/2"
        >
          <p className="text-2xl text-white/70 font-mono tracking-widest uppercase mb-2">Hello, I'm</p>
          <h3 className="text-[clamp(32px,4vw,56px)] font-black text-white my-2 leading-none">Atharv Patil</h3>
          <div className="text-white/60 leading-relaxed mt-6 font-medium text-lg text-justify space-y-4">
            <p>
              I'm <span className="text-[#E5E4E2] font-bold">Atharv Patil</span>, a Full Stack Developer and UI/UX Designer passionate about building scalable systems and intuitive digital experiences. I work across frontend architecture, APIs, databases, modern interfaces, and cybersecurity, combining engineering with design to create practical and user-focused products.
            </p>
            <p>
              My experience spans full-stack applications, frontend development, AI-powered projects, and interface design. I enjoy solving complex technical problems while keeping the final product simple, usable, and visually engaging.
            </p>
          </div>
          <div className="my-8 bg-white/5 border-l-4 border-[#E5E4E2] p-5 rounded-r-lg italic text-white/80 font-serif text-lg shadow-md">
            "Whoever strives shall succeed."
          </div>
          <div className="flex flex-row gap-4 mt-8 justify-center md:justify-start items-center">
            <ButtonMovingBorder 
              as="a" 
              href="/Resume.pdf"
              target="_blank"
              duration={3000} 
              borderRadius="0.75rem" 
              className="bg-black/80 border border-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-[0_0_24px_8px_rgba(229,228,226,0.2)] hover:bg-[#111]"
            >
              <FaDownload /> Resume
            </ButtonMovingBorder>
            <ButtonMovingBorder 
              as="button" 
              onClick={() => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" })}
              duration={3000} 
              borderRadius="0.75rem" 
              className="bg-black/80 border border-white/10 text-white font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-[0_0_24px_8px_rgba(229,228,226,0.2)] hover:bg-[#111]"
            >
              <FaBriefcase /> Showcase
            </ButtonMovingBorder>
          </div>
        </motion.div>
      </div>


    </section>
  );
}
