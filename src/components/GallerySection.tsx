import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const STATS = [
  { value: "100%", label: "Energía limpia" },
  { value: "24/7", label: "Monitoreo activo" },
  { value: "50%", label: "Renta deducible" },
  { value: "0%", label: "IVA en componentes" },
];

const BRANDS = [
  "Risen", "Canadian Solar", "Victron Energy", "Dyness", "Pylontech", "Felicity Solar", "ZNShine", "Procet Scientific"
];

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function GallerySection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-015" ref={ref} className="bg-[#0a0a0f] px-6 py-24 relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='grid' width='40' height='40' patternUnits='userSpaceOnUse'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.5'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.3)' stroke-width='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={-1}
        >
          <span className="text-[#F26522] text-sm font-semibold tracking-widest uppercase block mb-4">
            Intelion
          </span>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight text-white tracking-tight mb-6">
            <span className="text-[#F26522]">Energía Solar Inteligente</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Cifras y marcas que respaldan cada instalación.
          </p>
        </motion.div>

        {/* Big stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              custom={i}
            >
              <div className="text-5xl md:text-6xl font-bold text-[#F26522] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-white/50 text-sm md:text-base tracking-wide uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand strip */}
        <motion.div
          className="border-t border-white/10 pt-12"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={STATS.length}
        >
          <p className="text-center text-white/40 text-xs tracking-widest uppercase mb-8">
            Marcas certificadas
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {BRANDS.map((brand, i) => (
              <motion.span
                key={brand}
                className="text-white/70 text-lg md:text-xl font-medium tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
              >
                {brand}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="mt-20 text-center"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={STATS.length + 1}
        >
          <p className="text-white/30 text-sm md:text-base tracking-wide">
            Diseño · Instalación · Mantenimiento
          </p>
        </motion.div>
      </div>
    </section>
  );
}
