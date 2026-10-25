import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if device supports fine pointer (mouse); skip on touch devices
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }
    };

    // Event delegation on mouseover - eliminates costly elementFromPoint & getComputedStyle reflows
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
      isHovering = !!interactive;
    };

    // Smooth trailing ring via requestAnimationFrame lerp (runs strictly on GPU compositor)
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0) scale(${isHovering ? 1.3 : 1})`;
      }
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    animId = requestAnimationFrame(loop);
    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(animId);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full mix-blend-difference pointer-events-none z-[9999] will-change-transform transition-transform duration-75"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/60 rounded-full mix-blend-difference pointer-events-none z-[9998] will-change-transform transition-transform duration-150"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      />
    </>
  );
}
