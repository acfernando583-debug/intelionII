import { motion, useScroll, useTransform } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight, Shield, Leaf, BarChart3, Globe, Sun, Home } from "lucide-react";

const SERVICES = [
  {
    id: "diseno",
    icon: Sun,
    title: "Diseño e ingeniería",
    description: "Desarrollamos soluciones personalizadas con tecnología de última generación. Nuestro equipo de ingenieros realiza un análisis detallado de su consumo energético, evaluando factores como orientación solar, sombreado, tipo de techumbre y necesidades específicas de cada instalación.",
    features: ["Simulación 3D de producción", "Dimensionamiento óptimo", "Propuesta económica detallada"],
    metric: "98%",
    metricLabel: "Precisión en cálculo"
  },
  {
    id: "instalacion",
    icon: Home,
    title: "Instalación certificada",
    description: "Montaje profesional por técnicos certificados con años de experiencia en proyectos residenciales, comerciales e industriales. Utilizamos únicamente componentes de marcas líderes y seguimos protocolos de seguridad rigurosos en cada etapa del proceso.",
    features: ["Técnicos certificados", "Componentes premium", "Protocolos de seguridad"],
    metric: "500+",
    metricLabel: "Proyectos instalados"
  },
  {
    id: "monitoreo",
    icon: BarChart3,
    title: "Monitoreo inteligente",
    description: "Seguimiento en tiempo real del rendimiento de su sistema solar. Acceda a datos detallados de producción, consumo y ahorro desde cualquier dispositivo. Nuestro equipo recibe alertas automáticas ante cualquier anomalía para actuar de forma proactiva.",
    features: ["Dashboard 24/7", "Alertas automáticas", "Reportes mensuales"],
    metric: "24/7",
    metricLabel: "Monitoreo activo"
  },
  {
    id: "mantenimiento",
    icon: Shield,
    title: "Mantenimiento preventivo",
    description: "Programa integral de mantenimiento que maximiza la vida útil de su inversión. Incluye limpieza profesional de paneles, revisión de conexiones, actualización de software y calibración de inversores para mantener la eficiencia óptima del sistema.",
    features: ["Limpieza profesional", "Revisión técnica", "Actualizaciones"],
    metric: "25",
    metricLabel: "Años de garantía"
  },
  {
    id: "sostenibilidad",
    icon: Leaf,
    title: "Sostenibilidad garantizada",
    description: "Cada proyecto contribuye directamente a la reducción de emisiones de CO2. Calculamos y certificamos el impacto ambiental positivo de su transición energética. Le ayudamos a cumplir con sus objetivos de sostenibilidad corporativa o residencial.",
    features: ["Certificación ambiental", "Huella de carbono", "Reportes ESG"],
    metric: "100%",
    metricLabel: "Energía limpia"
  },
  {
    id: "cobertura",
    icon: Globe,
    title: "Cobertura nacional",
    description: "Presencia en las principales ciudades y regiones de Colombia. Nuestra infraestructura nos permite atender proyectos en cualquier ubicación del país, garantizando tiempos de respuesta optimizados y soporte técnico cercano.",
    features: ["Presencia nacional", "Soporte local", "Logística integrada"],
    metric: "15+",
    metricLabel: "Ciudades activas"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
    }
  })
};

export function ServicesSection() {
  const { ref, inView } = useInViewAnimation();
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, -30]);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-[#0a0a0f]">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
          animate={{
            x: [0, 150, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.06) 0%, transparent 70%)",
            filter: "blur(80px)"
          }}
          animate={{
            x: [0, -100, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="relative max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div 
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Servicios</span>
            <span className="w-2 h-2 rounded-full bg-[#F26522]" />
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ letterSpacing: "-0.04em" }}
          >
            Soluciones integrales para su<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F26522] to-[#E8704E]">transición energética</span>
          </motion.h2>
          <motion.p
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Desde el diseño hasta el mantenimiento continuo, ofrecemos un servicio completo que garantiza el máximo rendimiento y durabilidad de su sistema solar fotovoltaico.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className="group relative rounded-3xl p-8 lg:p-10 bg-white/5 border border-white/10 hover:border-[#F26522]/30 transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Glow effect */}
              <motion.div 
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(242,101,34,0.2) 0%, transparent 70%)",
                  filter: "blur(40px)"
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              <div className="relative z-10">
                {/* Icon and metric */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <service.icon className="w-7 h-7 text-[#F26522]" strokeWidth={1.5} />
                  </motion.div>
                  <div className="text-right">
                    <motion.div 
                      className="text-2xl font-bold text-[#F26522] tracking-tight"
                      whileHover={{ scale: 1.1 }}
                    >
                      {service.metric}
                    </motion.div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{service.metricLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center gap-2 text-sm text-white/60"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: 0.5 + i * 0.1 + idx * 0.05 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F26522]/60 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button 
                  className="inline-flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#F26522] transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Conocer más</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/5 rounded-3xl p-8 lg:p-10 border border-white/10">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-white mb-2">¿Listo para comenzar su proyecto?</h3>
              <p className="text-white/60 text-sm max-w-md">
                Solicite un diagnóstico gratuito y descubra cómo la energía solar puede transformar su hogar o empresa.
              </p>
            </div>
            <motion.button 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#F26522]/30 flex-shrink-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Solicitar diagnóstico</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
