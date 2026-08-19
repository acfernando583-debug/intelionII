import { LogoIcon } from "./HeroParts";
import { CtaButton } from "./Buttons";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Mail, Phone } from "lucide-react";

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

export function Footer() {
  const { ref } = useInViewAnimation();

  return (
    <footer id="sec-016" ref={ref} className="relative bg-[#0a0a0f] pt-24 pb-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#0a0a0f] to-[#0a0a0f]" />
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.08) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, 200, 0],
            y: [0, -100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.06) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
          animate={{
            x: [0, -150, 0],
            y: [0, 120, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Panel grid pattern */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.5)' stroke-width='0.5'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.3)' stroke-width='0.4'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        className="relative max-w-[1200px] mx-auto px-6"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-20px" }}
        custom={0}
      >
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Logo and description */}
          <motion.div
            className="md:col-span-5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={0}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#F26522] to-[#E8704E] flex items-center justify-center shadow-lg shadow-[#F26522]/30">
                <LogoIcon className="w-7 h-7" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                INTELION
              </span>
            </div>
            <p className="text-white/60 text-base leading-relaxed max-w-sm mb-8">
              Diseño, instalación y mantenimiento de sistemas solares fotovoltaicos. Transformando el consumo energético de hogares, edificios e industria.
            </p>
            <div className="flex flex-col gap-3">
              <a href="mailto:intelionsolar@gmail.com" className="inline-flex items-center gap-3 text-white/60 hover:text-[#F26522] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">intelionsolar@gmail.com</span>
              </a>
              <a href="https://wa.me/573508336293" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 text-white/60 hover:text-[#F26522] transition-colors duration-300">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">350-8336293</span>
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            className="md:col-span-3 md:col-start-7"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={1}
          >
            <h4 className="text-white font-bold mb-6 text-sm tracking-wider uppercase">Navegación</h4>
            <div className="flex flex-col gap-3">
              {["Nosotros", "Soluciones", "Proceso", "Tecnología", "Contacto"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white/60 hover:text-[#F26522] transition-colors duration-300 text-base group"
                >
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#F26522] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="md:col-span-3"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={2}
          >
            <div className="relative rounded-[32px] p-8 overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <h4 className="text-white font-bold text-lg mb-3">¿Listo para comenzar?</h4>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Solicite un diagnóstico gratuito y descubra cómo la energía solar puede transformar su hogar o empresa.
                </p>
                <CtaButton text="Contactar" variant="orange" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div 
          className="border-t border-white/10 pt-8"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={3}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-white/40 text-sm">© 2026 INTELION Solar. Todos los derechos reservados.</span>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-[#F26522] transition-colors duration-300 text-sm">Privacidad</a>
              <a href="#" className="text-white/40 hover:text-[#F26522] transition-colors duration-300 text-sm">Términos</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
