import { motion, useScroll, useTransform } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "diseno",
    image: "/images/products/product-panels.jpg",
    title: "Diseño e ingeniería",
    description: "Soluciones personalizadas con tecnología de última generación. Análisis detallado de consumo, orientación solar, sombreado y tipo de techumbre.",
    features: ["Simulación 3D", "Dimensionamiento óptimo", "Propuesta económica"],
    metric: "98%",
    metricLabel: "Precisión",
    accent: "from-[#F26522]/40 to-transparent",
    phrase: "Diseño a medida para máximo rendimiento"
  },
  {
    id: "instalacion",
    image: "/images/products/product-structure.jpg",
    title: "Instalación certificada",
    description: "Montaje profesional por técnicos certificados. Componentes de marcas líderes y protocolos de seguridad rigurosos.",
    features: ["Técnicos certificados", "Componentes premium", "Seguridad total"],
    metric: "500+",
    metricLabel: "Proyectos",
    accent: "from-[#E8704E]/40 to-transparent",
    phrase: "Instalación profesional y segura"
  },
  {
    id: "monitoreo",
    image: "/images/products/product-monitoring.jpg",
    title: "Monitoreo inteligente",
    description: "Seguimiento en tiempo real del rendimiento. Dashboard 24/7 con alertas automáticas y reportes mensuales.",
    features: ["Dashboard 24/7", "Alertas automáticas", "Reportes mensuales"],
    metric: "24/7",
    metricLabel: "Monitoreo",
    accent: "from-[#F26522]/40 to-transparent",
    phrase: "Control total en tiempo real"
  },
  {
    id: "mantenimiento",
    image: "/images/products/product-inverter.jpg",
    title: "Mantenimiento preventivo",
    description: "Programa integral que maximiza la vida útil. Limpieza profesional, revisión técnica y actualizaciones.",
    features: ["Limpieza profesional", "Revisión técnica", "Actualizaciones"],
    metric: "25",
    metricLabel: "Años garantía",
    accent: "from-[#E8704E]/40 to-transparent",
    phrase: "Máxima vida útil garantizada"
  },
  {
    id: "sostenibilidad",
    image: "/images/products/product-battery.jpg",
    title: "Sostenibilidad garantizada",
    description: "Reducción de emisiones CO2 certificada. Cumplimiento de objetivos ESG y reportes ambientales.",
    features: ["Certificación ambiental", "Huella de carbono", "Reportes ESG"],
    metric: "100%",
    metricLabel: "Energía limpia",
    accent: "from-[#F26522]/40 to-transparent",
    phrase: "Impacto ambiental positivo"
  },
  {
    id: "cobertura",
    image: "/images/hero-solar-farm.jpg",
    title: "Cobertura nacional",
    description: "Presencia en principales ciudades. Infraestructura para atender proyectos en cualquier ubicación del país.",
    features: ["Presencia nacional", "Soporte local", "Logística integrada"],
    metric: "15+",
    metricLabel: "Ciudades",
    accent: "from-[#E8704E]/40 to-transparent",
    phrase: "Alcance en todo el país"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 80, rotateX: 10, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  })
};

export function ServicesSection() {
  const { ref } = useInViewAnimation();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -80]);

  return (
    <section id="sec-007" ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Parallax animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
        <motion.div
          className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.12) 0%, transparent 60%)",
            filter: "blur(100px)"
          }}
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.08) 0%, transparent 60%)",
            filter: "blur(100px)"
          }}
          animate={{
            x: [0, -150, 0],
            y: [0, 120, 0],
            scale: [1, 1.4, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.5'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.3)' stroke-width='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`
          }}
        />
      </motion.div>

      <div className="relative max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={ref ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Servicios</span>
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
          </motion.div>
          <motion.h2
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={ref ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ letterSpacing: "-0.04em" }}
          >
            Lo que hacemos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] to-[#E8704E]">por usted</span>
          </motion.h2>
          <motion.p
            className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={ref ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Cada servicio está diseñado para maximizar el retorno de su inversión en energía solar.
          </motion.p>
        </div>

        {/* Services grid - dynamic asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 auto-rows-[280px]">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="group relative rounded-[28px] overflow-hidden cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={ref ? "visible" : "hidden"}
              custom={i}
              whileHover={{ 
                scale: 1.03, 
                y: -12,
                rotateY: 5,
                rotateX: -5
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }}
              style={{ 
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
            >
              {/* Animated gradient border */}
              <motion.div 
                className="absolute inset-0 rounded-[28px]"
                style={{
                  background: `linear-gradient(135deg, rgba(242,101,34,0.4), transparent, rgba(232,112,78,0.3))`,
                  padding: "1px"
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 rounded-[28px] bg-[#0a0a0f]" />
              </motion.div>

              {/* Floating orbs */}
              <motion.div 
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, rgba(242,101,34,0.4) 0%, transparent 70%)`,
                  filter: "blur(40px)"
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div 
                className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(circle, rgba(232,112,78,0.3) 0%, transparent 70%)`,
                  filter: "blur(30px)"
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, -15, 0],
                  y: [0, 15, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col justify-between h-full p-8 lg:p-10">
                <div>
                  {/* Image media */}
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[4/3] object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                    {service.phrase && (
                      <div className="absolute inset-0 flex items-center justify-center p-6">
                        <span className="inline-block px-4 py-2 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-medium tracking-wide border border-white/10 text-center">
                          {service.phrase}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Metric badge */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
                    whileHover={{ scale: 1.05, borderColor: "rgba(242,101,34,0.4)" }}
                  >
                    <span className="text-xl font-bold text-[#F26522] tracking-tight">{service.metric}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-widest">{service.metricLabel}</span>
                  </motion.div>

                  {/* Title with gradient underline */}
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {/* Features with staggered reveal */}
                <div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        className="flex items-center gap-3 text-sm text-white/50"
                        initial={{ opacity: 0, x: -20 }}
                        animate={ref ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          delay: 0.8 + i * 0.15 + idx * 0.08,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        <motion.span 
                          className="w-2 h-2 rounded-full bg-[#F26522] flex-shrink-0"
                          animate={{
                            scale: [1, 1.3, 1],
                            boxShadow: [
                              "0 0 0 0 rgba(242,101,34,0.4)",
                              "0 0 0 4px rgba(242,101,34,0)",
                              "0 0 0 0 rgba(242,101,34,0)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: idx * 0.3
                          }}
                        />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* Animated CTA */}
                  <motion.button 
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/80 group"
                    whileHover={{ x: 10 }}
                  >
                    <span className="relative">
                      <span className="relative z-10">Conocer más</span>
                      <motion.span 
                        className="absolute bottom-0 left-0 h-[1px] bg-[#F26522]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <ArrowRight className="w-4 h-4 text-[#F26522]" />
                    </motion.span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - advanced glassmorphism */}
        <motion.div 
          className="mt-16 lg:mt-24"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={ref ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 60, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative rounded-[32px] p-8 lg:p-12 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
            {/* Animated gradient orbs */}
            <motion.div 
              className="absolute top-0 right-0 w-64 h-64 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(242,101,34,0.2) 0%, transparent 70%)",
                filter: "blur(60px)"
              }}
              animate={{
                scale: [1, 1.5, 1],
                x: [0, 30, 0],
                y: [0, -20, 0]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(232,112,78,0.15) 0%, transparent 70%)",
                filter: "blur(50px)"
              }}
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -20, 0],
                y: [0, 20, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 20 0 L 0 0 0 20' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <motion.h3 
                  className="text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ref ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.3, duration: 0.6 }}
                >
                  ¿Listo para comenzar?
                </motion.h3>
                <motion.p 
                  className="text-white/60 text-lg max-w-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={ref ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  Solicite un diagnóstico gratuito y descubra cómo la energía solar puede transformar su hogar o empresa.
                </motion.p>
              </div>
              <motion.button 
                className="relative inline-flex items-center gap-3 px-10 py-5 bg-[#F26522] text-white font-semibold rounded-full overflow-hidden group"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 30 }}
                animate={ref ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                {/* Shimmer effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: [-200, 200]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10 text-lg">Solicitar diagnóstico</span>
                <ArrowRight className="relative z-10 w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
