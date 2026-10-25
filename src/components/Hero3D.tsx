import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);

  // Generate random particles (2000 is visually indistinguishable from 5000 but 60% faster)
  const positions = useMemo(() => {
    const count = 2000;
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 10;
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      array[i * 3] = x;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = z;
    }
    return array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 5] }}
          gl={{ powerPreference: "high-performance", antialias: false }}
          dpr={[1, 1.5]}
        >
          <Particles />
        </Canvas>
      )}
    </div>
  );
}
