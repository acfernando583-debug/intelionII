import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useParallax } from "../hooks/useParallax";

const STEPS = [
  {
    number: "01",
    title: "Análisis y Diagnóstico",
    description:
      "Evaluamos su consumo energético y analizamos las condiciones del sitio para identificar oportunidades de ahorro.",
  },
  {
    number: "02",
    title: "Diseño e Ingeniería",
    description:
      "Dimensionamos el sistema ideal y seleccionamos la tecnología que mejor se adapte a su presupuesto y requerimientos.",
  },
  {
    number: "03",
    title: "Instalación Certificada",
    description:
      "Ejecutamos el montaje profesional, pruebas de funcionamiento y puesta en marcha del sistema completo.",
  },
  {
    number: "04",
    title: "Monitoreo Continuo",
    description:
      "Seguimos el rendimiento en tiempo real y brindamos soporte continuo para maximizar su inversión.",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function PricingSection() {
  const { ref, inView } = useInViewAnimation();
  const parallaxOffset = useParallax(0.1);

  return (
    <section id="sec-010" ref={ref} className="bg-[#0a0a0f] px-6 py-24 relative overflow-hidden">
      {/* Parallax dot-grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
          willChange: "transform",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cdefs%3E%3Cpattern id='grid' width='80' height='80' patternUnits='userSpaceOnUse'%3E%3Ccircle cx='40' cy='40' r='1.5' fill='rgba(242,101,34,0.8)'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, 120, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.06) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={-1}
        >
          <span className="text-[#F26522] text-sm font-semibold tracking-widest uppercase block mb-4">
            Proceso
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white tracking-tight mb-6">
            Cómo desarrollamos<br />
            <span className="text-[#F26522]">su proyecto</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Un solo aliado para todo el ciclo de su sistema solar, desde el análisis inicial hasta la operación y mantenimiento continuo.
          </p>
        </motion.div>

        {/* Steps estilo flujo continuo */}
        <div className="max-w-2xl mx-auto">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative flex items-start gap-6 py-8"
              variants={itemVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              {/* Línea conectora vertical */}
              {i < STEPS.length - 1 && (
                <div className="absolute left-[19px] top-[52px] w-px h-[calc(100%-52px)] bg-gradient-to-b from-[#F26522]/40 via-[#F26522]/20 to-transparent" />
              )}

              {/* Step indicator animado */}
              <motion.div
                className="relative flex-shrink-0"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#F26522] flex items-center justify-center bg-[#0a0a0f]">
                  <span className="text-sm font-bold text-[#F26522]">{step.number}</span>
                </div>
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-[#F26522]/50"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </motion.div>

              {/* Contenido del paso */}
              <div className="flex-1 min-w-0 pt-0.5">
                <motion.h3
                  className="text-lg md:text-xl font-semibold text-white tracking-tight mb-2"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
