import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "proyecto-5",
    title: "Energía que impulsa",
    subtitle: "tu hogar.",
    description:
      "Diseño e instalación de sistemas fotovoltaicos residenciales con monitoreo inteligente y respaldo en baterías.",
    video: "/videos/5.mp4",
    poster: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85",
    color: "from-[#F26522]/30 to-transparent"
  },
  {
    id: "proyecto-6",
    title: "Eficiencia",
    subtitle: "comprobada.",
    description:
      "Operación y mantenimiento de plantas solares con reporting continuo, soporte especializado y cumplimiento normativo.",
    video: "/videos/6.mp4",
    poster: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85",
    color: "from-[#E8704E]/30 to-transparent"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  })
};

export function CaseStudiesSection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-003" ref={ref} className="bg-white pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Badge row */}
        <motion.div
          className="flex items-center gap-3 mb-6 sm:mb-8"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={0}
        >
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white text-[11px] leading-[12px] font-semibold flex items-center justify-center">
            2
          </div>
          <span className="text-[12px] leading-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900">
            Proyectos destacados
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="font-semibold leading-[1.08] tracking-[-0.04em] text-gray-900 mb-10 sm:mb-14 lg:mb-16 text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)]"
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={1}
        >
          Nuestros proyectos
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="group cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={idx + 2}
            >
              <div className="relative rounded-2xl overflow-hidden bg-black">
                <video
                  src={project.video}
                  poster={project.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: "contrast(1.05) brightness(0.95) saturate(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute bottom-4 left-4">
                  <div className="flex items-center bg-white rounded-full h-9 overflow-hidden transition-all duration-300 ease-in-out w-9 group-hover:w-[168px]">
                    <span className="ml-3 text-[13px] font-medium text-gray-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 whitespace-nowrap">
                      Ver caso de estudio
                    </span>
                    <span className="ml-auto mr-3 inline-flex items-center justify-center transition-transform duration-300 ease-in-out -rotate-45 group-hover:rotate-0">
                      <ArrowRight className="w-4 h-4 text-gray-900" />
                    </span>
              </div>
              </div>
              </div>
              <p className="text-[13px] leading-[14px] text-gray-600 mt-4 leading-relaxed">
                {project.description}
              </p>
              <p className="text-[14px] leading-[15px] font-semibold text-gray-900 mt-1">
                {project.title} {project.subtitle && <span className="text-[#F26522]">{project.subtitle}</span>}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
