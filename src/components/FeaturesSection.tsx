import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Check, ArrowRight } from "lucide-react";
import { WordsPullUpMultiStyle } from "./TextReveal";

const features = [
  {
    id: "video",
    type: "video",
    title: "Tu proyecto, en marcha.",
    video: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
  },
  {
    id: "almacenamiento",
    type: "card",
    number: "01",
    title: "Sistemas con Almacenamiento",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
    items: [
      "Integración de baterías de respaldo",
      "Soluciones para continuidad energética",
      "Optimización del autoconsumo"
    ]
  },
  {
    id: "instalacion",
    type: "card",
    number: "02",
    title: "Instalación y Puesta en Marcha",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
    items: [
      "Integración de inversores y estructuras",
      "Pruebas, configuración y arranque",
      "Sistemas conectados a red, híbridos y aislados"
    ]
  },
  {
    id: "mantenimiento",
    type: "card",
    number: "03",
    title: "Operación y Mantenimiento",
    icon: "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
    items: [
      "Monitoreo del rendimiento del sistema",
      "Diagnóstico y optimización",
      "Soporte técnico especializado"
    ]
  }
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
    }
  })
};

export function FeaturesSection() {
  const { ref, inView } = useInViewAnimation();

  const headerSegments = [
    { text: "Tecnología confiable para", className: "" },
    { text: "soluciones eficientes.", className: "text-[#F26522]" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen bg-black py-24 overflow-hidden">
      {/* Noise overlay */}
      <div className="bg-noise" />

      <div className="relative z-10 max-w-[88rem] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight">
            <WordsPullUpMultiStyle segments={headerSegments} />
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {features.map((feature, i) => (
            <motion.div
              key={feature.id}
              className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#212121] group"
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={i}
            >
              {feature.type === "video" ? (
                <>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    src={feature.video}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <h3 className="text-xl font-normal" style={{ color: "#E1E0CC" }}>
                      {feature.title}
                    </h3>
                  </div>
                </>
              ) : (
                <div className="relative z-10 p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden mb-4">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Title with number */}
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-[#F26522] text-xs font-mono">{feature.number}</span>
                    <h3 className="text-lg font-normal text-white tracking-tight">{feature.title}</h3>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {feature.items!.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                        <Check className="w-3.5 h-3.5 text-[#F26522] flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Learn more link */}
                  <button className="inline-flex items-center gap-2 text-sm text-white group-hover:text-[#F26522] transition-colors duration-300">
                    <span>Conocer más</span>
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
