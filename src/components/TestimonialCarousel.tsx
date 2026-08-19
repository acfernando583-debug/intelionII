import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const PRODUCTS = [
  {
    title: "Paneles Solares",
    description:
      "Alta eficiencia y durabilidad con tecnología de punta para máxima generación de energía.",
    image: "/images/products/product-panels.jpg",
    accent: "#F26522",
  },
  {
    title: "Inversores",
    description:
      "Conversión inteligente de energía DC a AC con marcas líderes en el mercado.",
    image: "/images/products/product-inverter.jpg",
    accent: "#E8704E",
  },
  {
    title: "Baterías",
    description:
      "Almacenamiento de energía para respaldo y autonomía en sistemas híbridos y aislados.",
    image: "/images/products/product-battery.jpg",
    accent: "#F26522",
  },
];

const geometricShapes = [
  "polygon(6% 0%, 94% 0%, 100% 6%, 100% 94%, 94% 100%, 6% 100%, 0% 94%, 0% 6%)",
  "ellipse(50% 50% at 50% 50%)",
  "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
];

const expandedShapes = [
  "polygon(2% 0%, 98% 0%, 100% 2%, 100% 98%, 98% 100%, 2% 100%, 0% 98%, 0% 2%)",
  "ellipse(48% 48% at 50% 50%)",
  "polygon(3% 0%, 97% 0%, 100% 100%, 0% 100%)",
];

export function TestimonialCarousel() {
  const { ref, inView } = useInViewAnimation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const totalOriginal = PRODUCTS.length;

  const step = 427.5;

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

  const cardTitle = (product: typeof PRODUCTS[number], index: number) => {
    const shapes = ["Octógono", "Elipse", "Trapecio"];
    return `${product.title} — ${shapes[index]}`;
  };

  return (
    <section id="sec-013" ref={ref} className="bg-[#F5F5F5] px-6 py-24 relative overflow-hidden">
      {/* Moving solar panel pattern background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3Cpattern id='panels' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Crect x='10' y='10' width='25' height='25' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.8'/%3E%3Crect x='45' y='10' width='25' height='25' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.8'/%3E%3Crect x='10' y='45' width='25' height='25' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.8'/%3E%3Crect x='45' y='45' width='25' height='25' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.8'/%3E%3Cline x1='10' y1='35' x2='35' y2='35' stroke='rgba(242,101,34,0.3)' stroke-width='0.5'/%3E%3Cline x1='45' y1='35' x2='70' y2='35' stroke='rgba(242,101,34,0.3)' stroke-width='0.5'/%3E%3Cline x1='35' y1='10' x2='35' y2='35' stroke='rgba(242,101,34,0.3)' stroke-width='0.5'/%3E%3Cline x1='35' y1='45' x2='35' y2='70' stroke='rgba(242,101,34,0.3)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panels)'/%3E%3C/svg%3E")`,
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />
      <div className="max-w-[88rem] mx-auto relative">
        <div className="flex items-end justify-between mb-16">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#F26522]" />
              <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Tecnología</span>
              <span className="w-2 h-2 rounded-full bg-[#F26522]" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
              Nuestra <span className="text-[#F26522]">tecnología</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="relative"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] } },
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
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
              {PRODUCTS.map((p, i) => (
                <div
                  key={i}
                  ref={i < totalOriginal ? cardRef : null}
                  className="w-full md:w-[427.5px] flex-shrink-0 px-3"
                >
                  <motion.div
                    className="relative h-full min-h-[420px] group cursor-pointer"
                    whileHover={{ 
                      scale: 1.05,
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    }}
                    style={{ 
                      transformOrigin: "center center",
                    }}
                  >
                    {/* Geometric frame border */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/40 group-hover:border-[#F26522]/50 transition-all duration-500 pointer-events-none"
                      animate={{
                        clipPath: geometricShapes[i % geometricShapes.length],
                      }}
                      whileHover={{
                        clipPath: expandedShapes[i % expandedShapes.length],
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />

                    {/* Image with geometric mask */}
                    <motion.div 
                      className="absolute inset-0 overflow-hidden"
                      animate={{
                        clipPath: geometricShapes[i % geometricShapes.length],
                      }}
                      whileHover={{
                        clipPath: expandedShapes[i % expandedShapes.length],
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <img
                        src={p.image}
                        alt=""
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    </motion.div>

                    {/* Animated corner accents */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 pointer-events-none"
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full border-t-2 border-r-2 border-[#F26522]/40" />
                    </motion.div>
                    <motion.div
                      className="absolute bottom-4 left-4 w-16 h-16 pointer-events-none"
                      animate={{ rotate: [0, -90, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="w-full h-full border-b-2 border-l-2 border-[#E8704E]/40" />
                    </motion.div>

                    {/* Title badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium tracking-wide border border-white/20">
                        {cardTitle(p, i)}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-between h-full p-8">
                      <div>
                        <motion.div
                          className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20 group-hover:bg-[#F26522]/20 group-hover:border-[#F26522]/30 transition-all duration-300"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <div className="w-6 h-6 rounded-full bg-[#F26522]" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-white tracking-tight leading-tight mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                          {p.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                          {p.description}
                        </p>
                      </div>

                      {/* Geometric CTA */}
                      <motion.div
                        className="inline-flex items-center gap-2 text-sm font-medium text-white mt-6"
                        whileHover={{ x: 8 }}
                      >
                        <span className="relative">
                          <span className="relative z-10">Explorar</span>
                          <motion.span
                            className="absolute bottom-0 left-0 h-[2px] bg-[#F26522]"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                            transition={{ duration: 0.3 }}
                          />
                        </span>
                        <motion.span
                          animate={{ x: [0, 6, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight className="w-4 h-4 text-[#F26522]" />
                        </motion.span>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation con geometría */}
          <div className="flex gap-3 mt-10">
            <motion.button
              onClick={handlePrev}
              className="relative w-14 h-14 flex items-center justify-center border-2 border-gray-900/10 hover:border-[#F26522] hover:bg-[#F26522] hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Anterior"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </motion.button>
            <motion.button
              onClick={handleNext}
              className="relative w-14 h-14 flex items-center justify-center border-2 border-gray-900/10 hover:border-[#F26522] hover:bg-[#F26522] hover:text-white transition-all duration-300"
              style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Siguiente"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
