import { useRef, useEffect, useState } from "react";
import CylinderCarousel from "./CylinderCarousel";

const techCategories = [
  {
    category: "Frontend",
    items: [
      { name: "HTML5", icon: "https://cdn.simpleicons.org/html5/E34F26", color: "#E34F26" },
      { name: "CSS3", icon: "https://cdn.simpleicons.org/css/1572B6", color: "#1572B6" },
      { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E", color: "#F7DF1E" },
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178C6" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB", color: "#61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", color: "#FFFFFF" },
      { name: "Tailwind", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#06B6D4" }
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
      { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB", color: "#3776AB" },
      { name: "Nest.js", icon: "https://cdn.simpleicons.org/nestjs/E0234E", color: "#E0234E" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", color: "#47A248" },
      { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20", color: "#ffffff" },
      { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", color: "#FFCA28" }
    ]
  },
  {
    category: "Tools & Deployment",
    items: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032", color: "#F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/FFFFFF", color: "#FFFFFF" },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/FFFFFF", color: "#FFFFFF" },
      { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00C7B7", color: "#00C7B7" },
      { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", color: "#2496ED" },
      { name: "Terminal", icon: "https://cdn.simpleicons.org/gnometerminal/4EAA25", color: "#4EAA25" }
    ]
  },
  {
    category: "UI & Design",
    items: [
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", color: "#F24E1E" },
      { name: "Framer", icon: "https://cdn.simpleicons.org/framer/0055FF", color: "#0055FF" },
      { name: "Material UI", icon: "https://cdn.simpleicons.org/mui/007FFF", color: "#007FFF" }
    ]
  }
];

const projects = [
  {
    title: "Sushi Mobile App UI",
    desc: "A sleek and modern mobile app UI design for a sushi restaurant, featuring high quality photography, dark mode, and glassmorphism.",
    tech: "Figma, Mobile UI Design",
    domain: "UI/UX",
    thumbnail: "/sushi_mobile_ui_thumbnail.jpg",
    github: "",
    live: "https://www.figma.com/proto/QrGBMHTtWryF1rftrnplhV/Untitled?node-id=9-3&p=f&viewport=116%2C277%2C0.11&t=cU4gKSSWs4aIPiCL-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=11%3A196&page-id=0%3A1",
  },
  {
    title: "Restaurant Website Prototype",
    desc: "A beautiful, modern restaurant website UI design presentation featuring high quality food photography and an elegant layout.",
    tech: "Figma, UI/UX Design",
    domain: "UI/UX",
    thumbnail: "/restaurant_ui_thumbnail.jpg",
    github: "",
    live: "https://www.figma.com/proto/QrGBMHTtWryF1rftrnplhV/Untitled?node-id=49-1881&p=f&viewport=360%2C130%2C0.08&t=WaAXFdGcF9yRkD2T-1&scaling=scale-down&content-scaling=fixed&page-id=49%3A1876",
  },
  {
    title: "EV Charging Station App UI",
    desc: "A modern, sleek mobile app UI design for an EV charging station finder, featuring a map interface and intelligent routing.",
    tech: "Figma, Mobile UI Design",
    domain: "UI/UX",
    thumbnail: "/ev_charging_app_thumbnail.jpg",
    github: "",
    live: "https://www.figma.com/proto/QrGBMHTtWryF1rftrnplhV/Untitled?node-id=65-5235&p=f&viewport=-501%2C166%2C0.07&t=22pVp9f5Ke62p67R-1&scaling=min-zoom&content-scaling=responsive&starting-point-node-id=65%3A5235&page-id=49%3A2523",
  },
  {
    title: "AI BioScan",
    desc: "Intelligent Health Risk Assessment System using machine learning for symptom analysis and real-time health risk prediction with personalized recommendations.",
    tech: "React.js, Python, PostgreSQL, AI/ML",
    domain: "Healthcare / MedTech",
    thumbnail: "/ai_bioscan.jpg",
    github: "https://github.com/Atharv-14-ai/aibioscan.git",
    live: "https://aibioscan.vercel.app/",
  },
  {
    title: "YT Video Summarizer",
    desc: "AI-powered application that generates concise summaries from YouTube videos using LLMs with transcript chunking and asynchronous processing.",
    tech: "React.js, Node.js, OpenAI/Gemini API",
    domain: "NLP / AI Tools",
    thumbnail: "/youtube_summarizer.jpg",
    github: "https://github.com/Atharv-14-ai/Youtube_Transcript_Summarizer.git",
    live: "https://youtube-transcript-summarizer-m3kq.vercel.app/",
  },
  {
    title: "Text-to-Image Generator",
    desc: "Generative AI web application using Stable Diffusion for text-to-image generation, with containerized backend services.",
    tech: "React.js, Flask, Stable Diffusion, Docker",
    domain: "Generative AI",
    thumbnail: "/text_to_image.jpg",
    github: "https://github.com/Atharv-14-ai/Text_to_img.git",
    live: "https://text-to-image-w2ji.vercel.app/login",
  },
];

const certificates = [
  { 
    title: "UI Design", 
    tech: "UI Design", 
    thumbnail: "/certificates/UI design.pdf" 
  },
  { 
    title: "UX Design", 
    tech: "UX Design", 
    thumbnail: "/certificates/UX design.pdf" 
  },
  { 
    title: "Graphics Design", 
    tech: "Graphics Design", 
    thumbnail: "/certificates/Graphics Design.pdf" 
  },
  { 
    title: "Data Flair Web Development", 
    tech: "Web Development", 
    thumbnail: "/certificates/Data Flair WebDevelopment.pdf" 
  },
  { 
    title: "Simplilearn Full Stack Development", 
    tech: "Full Stack", 
    thumbnail: "/certificates/Simplilearn Full Stack Development.pdf" 
  },
  { 
    title: "AWS Academy Cloud Foundations", 
    tech: "AWS", 
    thumbnail: "/certificates/AWS Academy Cloud Foundations.pdf" 
  },
  { 
    title: "Google Cloud Generative AI Leader", 
    tech: "Google Cloud / AI", 
    thumbnail: "/certificates/Udemy Agentic AI.pdf" 
  },
  { 
    title: "Walmart Software Engineering Virtual Experience", 
    tech: "Software Engineering", 
    thumbnail: "/certificates/Walmart Software Engineering.pdf" 
  },
  { 
    title: "Infosys Mastering Python", 
    tech: "Python", 
    thumbnail: "/certificates/Infosys Mastering Python.pdf" 
  },
  { 
    title: "Udemy Advanced Mathematics", 
    tech: "Mathematics", 
    thumbnail: "/certificates/Udemy Advanced Mathematics.pdf" 
  },
  { 
    title: "Udemy Cyber Defender", 
    tech: "Cybersecurity", 
    thumbnail: "/certificates/Udemy Cyber Defender.pdf" 
  },
  { 
    title: "Android Developer Internship", 
    tech: "Android / Mobile", 
    thumbnail: "/certificates/Android Developer Internship.pdf" 
  },
];

const GithubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 16l4-5h-3V4h-2v7H8l4 5zm-8 4h16v-2H4v2z" />
  </svg>
);

const Spinner = () => (
  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2v4m0 12v4m10-10h-4M6 12H2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

function ProjectCard({ item, index }: { item: typeof projects[0], index: number }) {
  return (
    <div
      className="group relative rounded-3xl border border-white/15 overflow-hidden bg-black
      hover:border-white/30 transition-all duration-500 shadow-2xl backdrop-blur-3xl w-[90%] max-w-[340px] md:w-full md:max-w-none mx-auto flex flex-col"
      style={{ backdropFilter: "blur(40px)" }}
    >
      <div className="relative w-full h-48 overflow-hidden bg-white/5">
        <img
          src={item.thumbnail}
          alt={item.tech}
          draggable={false}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-mono mb-2 block">
            0{(index % 3) + 1} — {item.domain || "PROJECT"}
          </span>
          <h3 className="text-xl font-bold tracking-tight text-white mb-2 line-clamp-1">
            {item.title}
          </h3>
          <p className="text-xs text-white/60 mb-4 leading-relaxed line-clamp-3">
            {item.desc}
          </p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-wrap gap-1.5">
            {item.tech.split(', ').map(t => (
              <span key={t} className="px-2 py-0.5 text-[9px] font-medium uppercase rounded-sm border border-white/10 bg-white/5 text-white/70">
                {t}
              </span>
            ))}
          </div>
          <div className="flex shrink-0">
            {item.live && (
              <a
                href={item.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full 
                bg-white/10 border border-white/20 text-white 
                hover:bg-white hover:text-black hover:scale-110 
                transition-all duration-300 ml-2 shrink-0 pointer-events-auto z-10"
                title="View Live Site"
              >
                <ExternalLinkIcon />
              </a>
            )}
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-8 h-8 rounded-full 
                bg-white/10 border border-white/20 text-white 
                hover:bg-white hover:text-black hover:scale-110 
                transition-all duration-300 ml-2 shrink-0 pointer-events-auto z-10"
                title="View on GitHub"
              >
                <GithubIcon />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CertCard({ item, onView }: { item: typeof certificates[0] & { link?: string }; onView: () => void }) {
  return (
    <div className="portfolio10-cert-card group h-[400px] flex flex-col w-full">
      <div className="portfolio10-cert-image shrink-0 relative overflow-hidden bg-white/5 flex items-center justify-center">
        {item.thumbnail.endsWith(".pdf") ? (
            <iframe 
                src={`${item.thumbnail}#toolbar=0&navpanes=0&scrollbar=0&view=Fit`} 
                className="absolute w-[calc(100%+18px)] h-[calc(100%+18px)] top-0 left-0 pointer-events-none border-0" 
                scrolling="no" 
                title={item.title}
            />
        ) : (
            <img src={item.thumbnail} alt={item.title} />
        )}
      </div>
      <div className="portfolio10-cert-content flex flex-col flex-grow">
        <h3 className="line-clamp-2" title={item.title}>{item.title}</h3>
        <p className="line-clamp-2" title="A professional certification showcasing expertise and proficiency in this domain.">
          A professional certification showcasing expertise and proficiency in this domain.
        </p>
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 gap-3">
          <div className="portfolio10-cert-tech mb-0 flex-1 w-full">
            <span className="w-full">{item.tech}</span>
          </div>
          <div className="portfolio10-cert-actions flex-1 w-full">
            <button onClick={onView} className="portfolio10-btn-demo w-full">
              View Certificate
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        .portfolio10-cert-card {
            background: #0f0f0f;
            border: 1px solid rgba(229,228,226,0.35);
            border-radius: 18px;
            overflow: hidden;
            transition: 0.4s ease;
            text-align: left;
            display: flex;
            flex-direction: column;
            height: 100%;
            width: 100%;
        }

        .portfolio10-cert-card:hover {
            transform: translateY(-12px);
        }

        .portfolio10-cert-image {
            height: 190px;
            overflow: hidden;
        }

        .portfolio10-cert-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: 0.6s ease;
        }

        .portfolio10-cert-card:hover .portfolio10-cert-image img {
            transform: scale(1.1);
        }

        .portfolio10-cert-content {
            padding: 25px;
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }

        .portfolio10-cert-content h3 {
            font-size: 20px;
            margin-bottom: 12px;
            font-family: 'Poppins', sans-serif;
            font-weight: 600;
        }

        .portfolio10-cert-content p {
            font-size: 14px;
            color: #b5b5b5;
            line-height: 1.6;
            margin-bottom: 18px;
        }

        .portfolio10-cert-tech {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }

        .portfolio10-cert-tech span {
            font-size: 11px;
            padding: 0 14px;
            border-radius: 20px;
            border: 1px solid #E5E4E2;
            color: #fff;
            height: 32px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 100%;
        }

        .portfolio10-cert-actions {
            display: flex;
            gap: 14px;
            flex-wrap: wrap;
        }

        .portfolio10-btn-demo {
            text-decoration: none;
            font-size: 11px;
            padding: 0 14px;
            border-radius: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            height: 32px;
            transition: 0.3s ease;
            background: transparent;
            border: 1px solid #E5E4E2;
            color: #ffffff;
            cursor: pointer;
            white-space: nowrap;
        }

        .portfolio10-btn-demo:hover {
            background: #E5E4E2;
            color: #0b0b0b;
            box-shadow: 0 0 18px rgba(229,228,226,0.6);
        }
      `}</style>
    </div>
  );
}

// ─── 3D Dome Sphere Tech Stack ────────────────────────────────────────────────
function TechGrid() {
  return (
    <div className="w-full max-w-5xl px-4 flex flex-col gap-12 mb-12">
      {techCategories.map((category, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-white/40 mb-6 font-mono">
            {category.category}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.items.map((tech) => (
              <div
                key={tech.name}
                className="group relative flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:-translate-y-1 transition-all duration-300 cursor-default shadow-lg"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = tech.color;
                  e.currentTarget.style.boxShadow = `0 8px 30px ${tech.color}45`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
function CertModal({ cert, onClose }: { cert: any; onClose: () => void }) {
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      const response = await fetch(cert.thumbnail, { mode: "cors" });
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${cert.title}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Download failed:", err);
    }
    setTimeout(() => setDownloading(false), 500);
  };

  if (!cert) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-4xl bg-[#0b0b0b] border border-white/10 rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/50">
          <h3 className="text-xl font-bold text-white pr-8">{cert.title}</h3>
          <button onClick={onClose} className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors shrink-0">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 flex justify-center bg-black/20 w-full h-[65vh]">
          {cert.thumbnail.endsWith(".pdf") ? (
            <iframe 
                src={cert.thumbnail} 
                className="w-full h-full rounded-lg shadow-lg border border-white/5" 
                title={cert.title}
            />
          ) : (
            <img src={cert.thumbnail} alt={cert.title} className="max-h-[60vh] object-contain rounded-lg shadow-lg border border-white/5" />
          )}
        </div>
        <div className="p-4 border-t border-white/10 bg-black/50 flex justify-end gap-3">
          {cert.link && (
            <button onClick={() => window.open(cert.link, "_blank", "noopener,noreferrer")} className="px-5 py-2.5 rounded-full border border-white/20 text-white hover:bg-white/10 text-sm font-medium transition-colors">
              View on LinkedIn
            </button>
          )}
          <button onClick={handleDownload} disabled={downloading} className="px-5 py-2.5 rounded-full bg-[#E5E4E2] text-black hover:bg-slate-300 text-sm font-medium transition-colors disabled:opacity-50">
            {downloading ? "Downloading..." : "Download"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────

export default function ShowcaseSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section className="relative w-full min-h-[85vh] md:min-h-screen bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 py-0 md:py-12 -mt-16 sm:mt-0 md:mt-12">
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* Label */}
        <div className="relative flex items-center justify-center gap-4 mb-5 opacity-0 animate-[fadeSlideDown_0.8s_ease_forwards]">
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
          <span className="text-[10px] uppercase tracking-[0.45em] text-white/35 font-mono">
            Showcase
          </span>
          <div className="relative overflow-hidden">
            <div className="w-10 h-px bg-white/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-[lineMove_2s_linear_infinite]" />
          </div>
        </div>

        {/* Heading */}
        <div className="relative overflow-hidden mb-12">
          <h1
            className="text-center font-black tracking-tight leading-none drop-shadow-[0_0_25px_rgba(255,255,255,0.15)] text-white opacity-0 whitespace-nowrap animate-[headingReveal_1s_cubic-bezier(0.22,1,0.36,1)_0.15s_forwards]"
            style={{ fontSize: "clamp(32px,6vw,80px)" }}
          >
            <span className="inline-block bg-gradient-to-b from-white via-white to-white/45 bg-clip-text text-transparent">
              Portfolio Showcase
            </span>
          </h1>
        </div>

        {/* Content Area - Sequential Layout */}
        <div className="w-full flex flex-col items-center gap-32 pb-32">
          
          {/* Projects Section */}
          <div className="w-full relative z-20 flex flex-col items-center" style={{ perspective: '1000px' }}>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-16 opacity-0 animate-[fadeSlideUp_0.8s_ease_forwards]">
              Projects
            </h2>
            <CylinderCarousel 
              items={projects.map((item, i) => (
                <ProjectCard key={i} item={item} index={i} />
              ))} 
              radius={430} 
              itemWidth={290} 
            />
          </div>

          {/* Certificates Section */}
          <div id="certificates" className="w-full max-w-5xl px-4 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-16">
              Certificates
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full items-stretch">
              {certificates.map((item, i) => (
                <div key={i} className="flex w-full h-full">
                  <CertCard item={item} onView={() => setSelectedCert(item)} />
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Section */}
          <div id="techstack" className="w-full flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-12">
              Tech Stack
            </h2>
            <TechGrid />
          </div>

        </div>
      </div>

      {selectedCert && <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />}

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes contentIn {
          from { opacity: 0; transform: translateY(32px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes headingReveal {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes lineMove {
          from { transform: translateX(-100%); }
          to   { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
