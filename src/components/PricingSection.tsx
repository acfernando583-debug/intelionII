import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { GeometricPattern } from "./GeometricPattern";

const STEP_COLORS = [
  { soft: "rgba(242,101,34,0.25)", border: "rgba(242,101,34,0.6)", glow: "rgba(242,101,34,0.35)", shape: "60% 40% 70% 30% / 50% 60% 40% 50%", accent: "#F26522" },
  { soft: "rgba(232,112,78,0.25)", border: "rgba(232,112,78,0.6)", glow: "rgba(232,112,78,0.35)", shape: "40% 60% 50% 50% / 60% 40% 60% 40%", accent: "#E8704E" },
  { soft: "rgba(0,0,0,0.25)", border: "rgba(0,0,0,0.6)", glow: "rgba(0,0,0,0.35)", shape: "50% 50% 60% 40% / 40% 50% 50% 60%", accent: "#000000" },
  { soft: "rgba(242,101,34,0.25)", border: "rgba(242,101,34,0.6)", glow: "rgba(242,101,34,0.35)", shape: "55% 45% 45% 55% / 55% 45% 55% 45%", accent: "#F26522" },
];

const STEPS = [
  {
    number: "01",
    title: "Análisis y Diagnóstico",
    description:
      "Evaluación del consumo energético, análisis técnico del sitio e identificación de oportunidades de ahorro.",
  },
  {
    number: "02",
    title: "Diseño e Ingeniería",
    description:
      "Dimensionamiento del sistema, selección de tecnología adecuada, evaluación técnica y económica.",
  },
  {
    number: "03",
    title: "Instalación Certificada",
    description:
      "Montaje profesional, pruebas de aislamiento, configuración de inversores y puesta en marcha.",
  },
  {
    number: "04",
    title: "Monitoreo y Soporte",
    description:
      "Seguimiento continuo del rendimiento, mantenimiento preventivo y soporte especializado.",
  },
];

export function PricingSection() {
  const { ref, inView } = useInViewAnimation();
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section ref={ref} className="bg-white px-6 py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F5F5]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
        <GeometricPattern type="rect-grid" color="rgba(0,0,0,0.5)" size={100} />
      </div>
      <div className="max-w-[88rem] mx-auto relative">
        <div className="mb-20">
          <div className={`inline-block mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Proceso</span>
          </div>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900 tracking-tight mb-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            Cómo desarrollamos<br />
            <span className="text-[#F26522]">su proyecto</span>
          </h2>
          <p
            className={`text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl ${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.25s" }}
          >
            Un solo aliado para todo el ciclo de su sistema solar, desde el análisis inicial hasta la operación y mantenimiento continuo.
          </p>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 26 22 C 50 4, 50 4, 74 22" fill="none" stroke="#F26522" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.7s" }} />
            <path d="M 76 32 C 94 52, 68 58, 24 76" fill="none" stroke="#E8704E" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.9s" }} />
            <path d="M 26 78 C 50 96, 50 96, 74 78" fill="none" stroke="#000000" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "1.1s" }} />
          </svg>
          <svg className="absolute inset-0 w-full h-full pointer-events-none md:hidden" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M 50 16 C 68 28, 68 36, 50 42" fill="none" stroke="#F26522" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.7s" }} />
            <path d="M 50 56 C 68 62, 68 66, 50 76" fill="none" stroke="#E8704E" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "0.9s" }} />
            <path d="M 50 80 C 68 86, 68 90, 50 96" fill="none" stroke="#000000" strokeWidth="0.6" strokeLinecap="round" className="connector-line" style={{ animationDelay: "1.1s" }} />
          </svg>
          {/* Desktop wave dots (2-col grid) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 50 }}>
            <div className={`wave-dot wave-desktop-1 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-desktop-2 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-desktop-3 ${isHovering ? "active" : ""}`} />
          </div>
          {/* Mobile wave dots (1-col layout) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none md:hidden" style={{ zIndex: 50 }}>
            <div className={`wave-dot wave-mobile-1 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-mobile-2 ${isHovering ? "active" : ""}`} />
            <div className={`wave-dot wave-mobile-3 ${isHovering ? "active" : ""}`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STEPS.map((step, i) => {
              const color = STEP_COLORS[i];
              return (
                <div
                  key={step.number}
                  className={`group relative rounded-[32px] p-8 md:p-10 overflow-hidden cursor-pointer ${inView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{
                    animationDelay: `${0.3 + i * 0.12}s`,
                    backgroundColor: "#f3f4f6",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = color.soft;
                    el.style.borderRadius = color.shape;
                    el.style.transform = "translateY(-6px) scale(1.02)";
                    el.style.boxShadow = `0 25px 50px -12px ${color.glow}, 0 0 0 1px ${color.border}`;
                    const inner = el.querySelector('.relative.z-10') as HTMLElement;
                    if (inner) inner.style.padding = "6px";
                    const header = el.querySelector('.flex.items-center.justify-between') as HTMLElement;
                    if (header) {
                      header.style.justifyContent = "center";
                      header.style.gap = "0";
                    }
                    const dot = el.querySelector('.w-10.h-10.rounded-full') as HTMLElement;
                    if (dot) dot.style.opacity = "0";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.backgroundColor = "#f3f4f6";
                    el.style.borderRadius = "32px";
                    el.style.transform = "translateY(0) scale(1)";
                    el.style.boxShadow = "none";
                    const inner = el.querySelector('.relative.z-10') as HTMLElement;
                    if (inner) inner.style.padding = "0";
                    const header = el.querySelector('.flex.items-center.justify-between') as HTMLElement;
                    if (header) {
                      header.style.justifyContent = "space-between";
                      header.style.gap = "";
                    }
                    const dot = el.querySelector('.w-10.h-10.rounded-full') as HTMLElement;
                    if (dot) dot.style.opacity = "1";
                  }}
                >
                <div
                  className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ backgroundColor: color.glow }}
                />
                  <div
                    className="relative z-10 flex flex-col items-center text-center transition-all duration-500"
                    style={{ padding: "0" }}
                  >
                    <div className="flex items-center justify-between mb-6 w-full transition-all duration-500">
                      <span
                        className="text-6xl md:text-7xl font-medium tracking-tighter transition-all duration-500"
                        style={{ color: color.accent }}
                      >
                        {step.number}
                      </span>
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                        style={{ backgroundColor: color.soft }}
                      >
                        <div
                          className="w-2 h-2 rounded-full transition-colors duration-500"
                          style={{ backgroundColor: color.accent }}
                        />
                      </div>
                    </div>
                    <h3
                      className="text-gray-900 text-xl md:text-2xl font-medium mb-4 transition-all duration-500"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-600 text-base leading-relaxed transition-all duration-500 max-w-[90%]"
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
