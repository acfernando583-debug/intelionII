import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function PartnerSection() {
  const { ref } = useInViewAnimation();

  return (
    <section id="sec-015" ref={ref} className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Animated geometric background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-black" />
        <motion.div
          className="absolute top-20 left-[10%] w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.1) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, 150, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-[10%] w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.08) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.5'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.3)' stroke-width='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-[88rem] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Large text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={0}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
              <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Disponible</span>
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-white tracking-tight mb-6">
              Transforme su <br />
              consumo <span className="text-[#F26522]">energético</span>
            </h2>
            
            <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-lg mb-8">
              Analizamos su necesidad energética y diseñamos la solución que mejor se adapte a su proyecto. Energía solar inteligente para hogares, edificios e industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button 
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#F26522] hover:bg-[#e05a1a] text-white font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-[#F26522]/30"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Solicitar diagnóstico gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Llamar ahora</span>
                <Phone className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right side - Geometric cards */}
          <motion.div
            className="relative"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={1}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <motion.div
                className="relative rounded-[32px] p-6 overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 group-hover:border-[#F26522]/30 transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#F26522]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Email</h3>
                  <p className="text-white/60 text-sm">intelionsolar@gmail.com</p>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="relative rounded-[32px] p-6 overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8704E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4 border border-white/10 group-hover:border-[#E8704E]/30 transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#E8704E]" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">WhatsApp</h3>
                  <p className="text-white/60 text-sm">350-8336293</p>
                </div>
              </motion.div>

              {/* Card 3 - spans 2 columns */}
              <motion.div
                className="relative rounded-[32px] p-6 overflow-hidden group cursor-pointer col-span-2"
                whileHover={{ scale: 1.03, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:border-[#F26522]/30 transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#F26522]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-1">Cobertura Nacional</h3>
                    <p className="text-white/60 text-sm">Presencia en las principales ciudades de Colombia</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating metric */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[#F26522]/10 border border-[#F26522]/20 flex items-center justify-center"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-[#F26522]">24/7</div>
                <div className="text-[10px] text-white/40 uppercase tracking-wider">Soporte</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
