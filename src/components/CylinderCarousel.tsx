import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface CylinderCarouselProps {
  items: React.ReactNode[];
  radius?: number;
  itemWidth?: number;
}

export default function CylinderCarousel({ items, radius = 450, itemWidth = 320 }: CylinderCarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress of the wrapper relative to viewport
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"]
  });

  // Add a slight spring to make the scroll rotation feel smooth and weighty
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001
  });

  // Map scroll progress (0 to 1) to a full rotation (0 to -360 degrees)
  const rotation = useTransform(smoothProgress, [0, 1], [0, -360]);

  const numItems = items.length;
  const theta = 360 / numItems;

  return (
    <div ref={wrapperRef} className="relative w-full h-[300vh]">
      <div className="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
        
        <div 
          className="relative w-full flex items-center justify-center"
          style={{ height: '500px', perspective: '1600px' }}
        >
          <motion.div
            className="relative w-full h-full flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              rotateY: rotation
            }}
          >
            {items.map((item, index) => {
              const rotateY = index * theta;
              return (
                <div
                  key={index}
                  className="absolute"
                  style={{
                    width: itemWidth,
                    transform: `rotateY(${rotateY}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'visible', // Visible from the back for 3D depth
                  }}
                >
                  {item}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
