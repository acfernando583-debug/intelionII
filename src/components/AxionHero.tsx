import { useState, useEffect } from "react";
import { ArrowRight, Clock, Menu, X } from "lucide-react";
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from "shaders/react";

function getLondonTime() {
  return new Date().toLocaleTimeString("en-GB", {
    timeZone: "Europe/London",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function LondonClock() {
  const [time, setTime] = useState(getLondonTime());

  useEffect(() => {
    const interval = setInterval(() => setTime(getLondonTime()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:flex items-center gap-1.5 text-gray-600">
      <Clock size={14} />
      <span className="text-[13px]">{time} en Londres</span>
    </div>
  );
}

export function TextRoll({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`relative inline-flex flex-col overflow-hidden h-[20px] ${className}`}>
      <span className="group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
        <span className="block h-[20px] leading-[20px]">{text}</span>
        <span className="block h-[20px] leading-[20px]">{text}</span>
      </span>
    </span>
  );
}

export function CtaButton({
  text,
  variant = "dark",
  className = "",
}: {
  text: string;
  variant?: "dark" | "orange";
  className?: string;
}) {
  const bgColor = variant === "dark" ? "bg-gray-900" : "bg-[#F26522]";
  const hoverBg = variant === "dark" ? "hover:bg-gray-800" : "hover:bg-[#e05a1a]";
  const arrowColor = variant === "dark" ? "text-gray-900" : "text-[#F26522]";
  const sizeClasses = variant === "dark"
    ? "pl-5 pr-2 py-2"
    : "pl-5 sm:pl-6 pr-2 py-2";
  const circleSize = variant === "dark" ? "w-6 h-6" : "w-7 h-7 sm:w-8 sm:h-8";
  const arrowSize = variant === "dark" ? 14 : 16;

  return (
    <button
      className={`group inline-flex items-center ${bgColor} ${hoverBg} ${sizeClasses} text-white text-[13px] font-medium rounded-full transition-colors duration-300 ${className}`}
    >
      <span className="relative inline-flex flex-col overflow-hidden h-[20px] mr-1">
        <span className="group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
          <span className="block h-[20px] leading-[20px]">{text}</span>
          <span className="block h-[20px] leading-[20px]">{text}</span>
        </span>
      </span>
      <span
        className={`inline-flex items-center justify-center bg-white rounded-full transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 ${circleSize}`}
      >
        <ArrowRight size={arrowSize} className={arrowColor} />
      </span>
    </button>
  );
}

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section id="sec-001" className="relative h-screen bg-[#EFEFEF] overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Shader className="w-full h-full">
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow
            baseColor="#ffffff"
            downColor="#ff5f03"
            leftColor="#ff5f03"
            rightColor="#ff5f03"
            upColor="#ff5f03"
            momentum={13}
            radius={3.5}
          />
          <FlutedGlass
            aberration={0.61}
            angle={31}
            frequency={8}
            highlight={0.12}
            highlightSoftness={0}
            lightAngle={-90}
            refraction={4}
            shape="rounded"
            softness={1}
            speed={0.15}
          />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full">
        <div className="max-w-[1440px] mx-auto p-2 sm:p-3">
          <div className="bg-white rounded-full px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-white text-[10px] sm:text-[11px] font-bold tracking-tight">AX</span>
              </div>
              <div className="hidden md:flex items-center gap-4 lg:gap-6">
                {["Proyectos", "Estudio", "Journal", "Contacto"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-[14px] text-gray-900 hover:text-gray-500 transition-colors duration-300"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-[13px] text-gray-600 hidden xl:block">
                Proyectos disponibles para 2026
              </span>
              <LondonClock />
              <CtaButton text="Solicitar diagnóstico" variant="dark" />
            </div>
            <button
              className="md:hidden bg-gray-900 rounded-full p-2 text-white"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl mx-3 mb-3 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            menuOpen ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="bg-gray-100 rounded-full px-3 py-1.5">
              <span className="text-[13px] text-gray-600 font-medium">
                {getLondonTime()} en Londres
              </span>
            </div>
            <button
              className="bg-gray-900 rounded-full p-2 text-white"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              <X size={20} />
            </button>
          </div>
          <div className="flex flex-col gap-6 mb-8">
            {["Proyectos", "Estudio", "Journal", "Contacto"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-[28px] leading-[32px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </div>
          <button className="w-full bg-[#F26522] hover:bg-[#e05a1a] text-white text-[15px] font-medium rounded-full py-4 flex items-center justify-center gap-2 transition-colors duration-300">
            Iniciar proyecto
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col h-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-16 lg:pb-20">
        <div className="flex-1" />
        <div>
          <p className="text-[13px] leading-[14px] text-gray-900 tracking-wide mb-5 sm:mb-8">
            INTELION Studio
          </p>
          <h1 className="font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-8 sm:mb-12 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]">
            Creamos experiencias digitales <span className="sm:hidden"> </span><br className="hidden sm:block" />
            para marcas listas para dominar <span className="sm:hidden"> </span><br className="hidden sm:block" />
            su categoría online.
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <button className="group inline-flex items-center bg-[#F26522] hover:bg-[#e05a1a] text-white pl-5 sm:pl-6 pr-2 py-2 text-[13px] leading-[14px] font-medium rounded-full transition-colors duration-300 w-fit">
              <span className="relative inline-flex flex-col overflow-hidden h-[20px] mr-1">
                <span className="group-hover:-translate-y-1/2 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]">
                  <span className="block h-[20px] leading-[20px]">Iniciar proyecto</span>
                  <span className="block h-[20px] leading-[20px]">Iniciar proyecto</span>
                </span>
              </span>
              <span className="inline-flex items-center justify-center bg-white rounded-full w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#F26522] sm:w-[18px] sm:h-[18px]">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>

            <div className="inline-flex items-center gap-2 bg-white rounded-[4px] px-4 py-2.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-shadow duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#E8704E]"
                fill="currentColor"
              >
                <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
              </svg>
              <span className="text-[13px] leading-[14px] font-medium text-gray-900">
                Socio Certificado
              </span>
              <span className="bg-gray-900 text-white text-[10px] leading-[11px] px-1.5 sm:px-2 py-0.5 rounded font-medium">
                Destacado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
