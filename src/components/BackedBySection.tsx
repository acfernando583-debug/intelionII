import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useParallax } from "../hooks/useParallax";
import { Shader, Swirl, FilmGrain } from "shaders/react";
import { useState } from "react";

const BACKERS = [
  { name: "Risen", phrase: "Alta eficiencia en paneles" },
  { name: "Canadian Solar", phrase: "Tecnología canadiense premium" },
  { name: "ZNShine Solar", phrase: "Innovación en módulos solares" },
  { name: "Victron Energy", phrase: "Energía confiable 24/7" },
  { name: "Dyness", phrase: "Baterías de última generación" },
  { name: "Pylontech", phrase: "Almacenamiento inteligente" },
  { name: "Must", phrase: "Inversores de alta potencia" },
];

export function BackedBySection() {
  const { ref, inView } = useInViewAnimation();
  const parallaxStyle = useParallax(0.1);
  const [shaderAvailable, setShaderAvailable] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    if (!inView) return;
    const sequence = async () => {
      await controls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    };
    sequence();
  }, [inView, controls]);

  const duplicated = [...BACKERS, ...BACKERS, ...BACKERS];

  return (
    <section id="sec-008" ref={ref} className="bg-[#F5F5F5] px-6 py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          transform: `translateY(${parallaxStyle}px)`,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(0,0,0,0.25)' opacity='0.9'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.6,
        }}
      />

      {shaderAvailable && (
        <Shader
          className="absolute inset-0 w-full h-full pointer-events-none"
          onUnavailable={() => setShaderAvailable(false)}
        >
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <FilmGrain strength={0.05} />
        </Shader>
      )}

      <div className="max-w-[88rem] mx-auto relative">
        <div className="text-center mb-16">
          <motion.div 
            className="inline-flex items-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            <span className="text-gray-900 text-sm font-semibold tracking-wider uppercase">Marcas</span>
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
          </motion.div>
          <motion.p
            className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Certificadas que nos respaldan y garantizan la más alta calidad en cada componente.
          </motion.p>
        </div>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex items-center gap-12 md:gap-16 lg:gap-20"
            animate={controls}
          >
            {duplicated.map((backer, i) => (
              <motion.div
                key={i}
                className="relative shrink-0 group cursor-pointer"
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 rounded-3xl bg-white border border-gray-200/60 shadow-sm hover:shadow-xl hover:border-[#F26522]/30 transition-all duration-500 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative z-10 text-center">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight leading-none mb-3 group-hover:text-[#F26522] transition-colors duration-300">
                      {backer.name}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                      {backer.phrase}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
