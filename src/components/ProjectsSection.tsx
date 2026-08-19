import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const PROJECTS = [
  {
    name: "Clínicas y Hospitales",
    description:
      "Energía ininterrumpida para equipos electromédicos y sistemas críticos de salud.",
    image: "/images/project-clinicas.jpg",
  },
  {
    name: "Laboratorios Farmacéuticos",
    description:
      "Continuidad operativa y calidad de onda para protección de cadenas de frío.",
    image: "/images/project-laboratorios.jpg",
  },
  {
    name: "Plantas de Producción",
    description:
      "Reducción de costos energéticos y ventaja competitiva con energía solar de gran escala.",
    image: "/images/project-plantas.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function ProjectsSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section id="sec-014" ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/30 to-white" />
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full border border-black/5" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full border border-black/5" />
      </div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={cardVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={-1}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#F26522]" />
            <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Proyectos</span>
            <span className="w-2 h-2 rounded-full bg-[#F26522]" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-gray-900 tracking-tight mb-6">
            Sectores que <span className="text-[#F26522]">transformamos</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada proyecto combina ingeniería, tecnología y acompañamiento continuo.
          </p>
        </motion.div>

        {/* Projects list - editorial style */}
        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.name}
              className="relative"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Image side */}
                <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:col-start-6" : ""}`}>
                  <div className="relative group">
                    {/* Geometric frame */}
                    <div className="absolute -inset-3 border-2 border-[#F26522]/10 rounded-[32px] group-hover:border-[#F26522]/30 transition-all duration-500" />
                    
                    {/* Image container */}
                    <div className="relative overflow-hidden rounded-[28px] bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[300px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      
                      {/* Overlay content */}
                      <div className="absolute inset-0 flex items-end p-8 md:p-10">
                        <div className="max-w-md">
                          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium tracking-wide border border-white/20 mb-4">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-3">
                            {project.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <div className="space-y-6">
                    <div>
                      <span className="text-[#F26522] text-xs font-semibold tracking-wider uppercase block mb-3">
                        Sector salud
                      </span>
                      <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight leading-tight">
                        {project.name}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <motion.button 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#F26522]/30"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Ver caso de estudio</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-[32px] p-8 lg:p-10 border border-gray-200/60 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">¿Listo para comenzar su proyecto?</h3>
              <p className="text-gray-600 text-sm max-w-md">
                Solicite un diagnóstico gratuito y descubra cómo la energía solar puede transformar su hogar o empresa.
              </p>
            </div>
            <motion.button 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#F26522] hover:bg-[#e05a1a] text-white font-medium rounded-full transition-all duration-300 shadow-lg shadow-[#F26522]/30 flex-shrink-0"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Solicitar diagnóstico</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
