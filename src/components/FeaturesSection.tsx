import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const FEATURES = [
  {
    title: "Nuestro ecosistema",
    description: "Diseño, instalación y mantenimiento",
  },
  {
    title: "Compromiso",
    description: "Resultados medibles y sostenibilidad",
  },
  {
    title: "Servicio Premium",
    description: "Atención personalizada con seguimiento 24/7",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
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

export function FeaturesSection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-011" ref={ref} className="bg-white px-6 py-24 relative overflow-hidden">
      {/* Moving solar panel pattern */}
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

      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={-1}
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-gray-900 tracking-tight">
            Lo que nos <span className="text-[#F26522]">define</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="relative text-center md:text-left"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={i}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#F26522] text-white mb-8 shadow-xl shadow-[#F26522]/20">
                <span className="text-2xl font-bold">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight leading-tight mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-lg md:text-xl leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
