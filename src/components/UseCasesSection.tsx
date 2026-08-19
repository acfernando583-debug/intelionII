import { motion } from "framer-motion";
import { ArrowRight, Home, Building2, Factory } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

const USECASES = [
  {
    title: "Hogar",
    description:
      "Reduce tu factura eléctrica, aumenta tu independencia energética y aporta al cuidado del medio ambiente. Opción de integración con baterías para respaldo ante cortes de red.",
    Icon: Home,
    image: "/images/usecase-hogar.jpg",
    shape: "rounded-[40px_40px_40px_40px]",
    hoverShape: "rounded-[32px_48px_32px_48px]",
  },
  {
    title: "Edificio",
    description:
      "Optimiza el consumo energético en zonas comunes, reduce costos operativos y gestiona sistemas para ascensores, bombas de agua y presurización.",
    Icon: Building2,
    image: "/images/usecase-edificio.jpg",
    shape: "rounded-[60px_32px_60px_32px]",
    hoverShape: "rounded-[48px_40px_48px_40px]",
  },
  {
    title: "Industria",
    description:
      "Proyectos solares de alta capacidad para reducir costos energéticos, mejorar competitividad y avanzar hacia la sostenibilidad empresarial.",
    Icon: Factory,
    image: "/images/usecase-industria.jpg",
    shape: "rounded-[32px_32px_48px_48px]",
    hoverShape: "rounded-[40px_40px_48px_48px]",
  },
];

export function UseCasesSection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-009" ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 10% 90%, rgba(242,101,34,0.15) 0%, transparent 40%), radial-gradient(circle at 90% 10%, rgba(232,112,78,0.1) 0%, transparent 40%)",
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full border border-black/10" />
      </div>
      <div className="max-w-[88rem] mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div className="md:pr-8">
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={0}
            >
              <span className="w-2 h-2 rounded-full bg-[#F26522]" />
              <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Soluciones</span>
              <span className="w-2 h-2 rounded-full bg-[#F26522]" />
            </motion.div>
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] mb-6 tracking-tight text-gray-900"
              style={{ letterSpacing: "-0.04em" }}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={1}
            >
              Hogar, Edificio,<br />
              <span className="text-[#F26522]">Industria</span>
            </motion.h2>
            <motion.p
              className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={2}
            >
              Sistemas fotovoltaicos adaptados a cada necesidad, desde el autoconsumo residencial hasta proyectos de alta potencia industrial.
            </motion.p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {USECASES.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative group overflow-hidden min-h-[420px]"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={i + 3}
              whileHover={{ 
                scale: 1.03,
                y: -8,
                rotate: i % 2 === 0 ? 1 : -1,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20 
              }}
            >
              {/* Geometric frame */}
              <div className={`absolute inset-0 ${item.shape} transition-all duration-700 group-hover:${item.hoverShape} border-2 border-white/20 group-hover:border-[#F26522]/40`} />
              
              {/* Image with clip-path */}
              <div 
                className="absolute inset-2 overflow-hidden"
                style={{
                  clipPath: i === 0 
                    ? "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    : i === 1 
                    ? "circle(50% at 50% 50%)"
                    : "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                }}
              >
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ objectPosition: "center" }}
                />
              </div>
              
              {/* Gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 via-gray-900/40 to-gray-900/10" />
              
              {/* Geometric decoration */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-2 border-[#F26522]/20 opacity-0 group-hover:opacity-100"
                animate={{ 
                  rotate: [0, 90, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                <div>
                  <item.Icon className="w-10 h-10 mb-6 text-[#F26522]" strokeWidth={1.5} />
                  <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-4 text-white tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <div>
                  <p className="text-white/80 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <a href="#" className="inline-flex items-center gap-2 group/btn">
                    <span className="text-white font-medium text-base group-hover/btn:text-[#F26522] transition-colors duration-300">
                      Conocer más
                    </span>
                    <span className="w-10 h-10 rounded-full bg-[#F26522]/80 backdrop-blur flex items-center justify-center group-hover/btn:bg-[#F26522] group-hover/btn:scale-110 group-hover/btn:rotate-45 transition-all duration-300">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
