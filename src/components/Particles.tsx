import { useMemo } from "react";

interface Particle {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  size: string;
  opacity: string;
  background: string;
}

export function Particles() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 13) % 100}%`,
      animationDuration: `${6 + (i % 8)}s`,
      animationDelay: `${(i % 5)}s`,
      size: `${2 + (i % 4)}px`,
      opacity: `${0.2 + (i % 4) * 0.1}`,
      background: i % 2 === 0
        ? "rgba(255, 214, 0, 0.5)"
        : "rgba(255, 255, 255, 0.4)",
    }));
  }, []);

  return (
    <div className="particles-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: p.animationDuration,
            animationDelay: p.animationDelay,
            background: p.background,
          }}
        />
      ))}
    </div>
  );
}
