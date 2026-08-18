import { ArrowRight, PanelsTopLeft, Zap, BatteryCharging, Cable, Gauge } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const PRODUCTS = [
  {
    title: "Paneles Solares",
    description:
      "Alta eficiencia y durabilidad con tecnología de punta para máxima generación de energía.",
    Icon: PanelsTopLeft,
    image: "/images/products/product-panels.jpg",
  },
  {
    title: "Inversores",
    description:
      "Conversión inteligente de energía DC a AC con marcas líderes en el mercado.",
    Icon: Zap,
    image: "/images/products/product-inverter.jpg",
  },
  {
    title: "Baterías",
    description:
      "Almacenamiento de energía para respaldo y autonomía en sistemas híbridos y aislados.",
    Icon: BatteryCharging,
    image: "/images/products/product-battery.jpg",
  },
  {
    title: "Estructura y Cableado",
    description:
      "Montaje seguro y profesional con componentes certificados para máxima durabilidad.",
    Icon: Cable,
    image: "/images/products/product-structure.jpg",
  },
  {
    title: "Monitoreo y Control",
    description:
      "Seguimiento remoto del rendimiento y gestión inteligente de su sistema solar.",
    Icon: Gauge,
    image: "/images/products/product-monitoring.jpg",
  },
];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isSnapping, setIsSnapping] = useState(false);
  const [step, setStep] = useState(452.5);
  const cardRef = useRef<HTMLDivElement>(null);
  const totalOriginal = PRODUCTS.length;
  const items = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

  useEffect(() => {
    const updateStep = () => {
      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        setStep(width + 24);
      }
    };
    updateStep();
    window.addEventListener("resize", updateStep);
    return () => window.removeEventListener("resize", updateStep);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => {
        const next = prev + 1;
        if (next >= totalOriginal) {
          setIsSnapping(true);
          return 0;
        }
        return next;
      });
    }, 3000);
    return () => clearInterval(id);
  }, [isHovering, totalOriginal]);

  useEffect(() => {
    if (isSnapping) {
      const timer = setTimeout(() => setIsSnapping(false), 50);
      return () => clearTimeout(timer);
    }
  }, [isSnapping]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? totalOriginal - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => {
      const next = prev + 1;
      if (next >= totalOriginal) {
        setIsSnapping(true);
        return 0;
      }
      return next;
    });
  };

  return (
    <section ref={ref} className="bg-[#F5F5F5] px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      <div className="max-w-[88rem] mx-auto relative">
        <div className="flex items-end justify-between mb-16">
          <div
            className={`${inView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <div className="inline-block mb-4">
              <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Tecnología</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900 tracking-tight">
              Nuestra <span className="font-medium text-[#F26522]" style={{ fontFamily: "ui-sans-serif, system-ui, sans-serif" }}>tecnología</span>
            </h2>
          </div>
        </div>
        <div
          className={`relative ${inView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="overflow-hidden">
            <div
              className="flex"
              style={{
                transform: `translateX(${-activeIndex * step}px)`,
                transition: isSnapping
                  ? "none"
                  : "transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {items.map((p, i) => (
                <div
                  key={i}
                  ref={i < totalOriginal ? cardRef : null}
                  className="w-full md:w-[427.5px] flex-shrink-0 px-3"
                >
                  <div className="bg-white rounded-[32px] md:rounded-[40px] shadow-[0_4px_16px_rgba(0,0,0,0.08)] p-8 h-full card-hover relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-[#F5F5F5] flex items-center justify-center mb-6 group-hover:bg-[#F26522]/10 transition-colors duration-300">
                        <p.Icon
                          className="w-7 h-7 text-gray-900 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                          strokeWidth={1.75}
                        />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {p.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {p.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <button
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 btn-hover"
              aria-label="Anterior"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all duration-300 btn-hover"
              aria-label="Siguiente"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
