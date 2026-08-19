import { motion } from "framer-motion";
import { CtaButton } from "./Buttons";

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

export function AboutSection() {
  return (
    <section id="sec-002" className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-16 sm:pb-20 lg:pb-24 overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.55)' stroke-width='0.6'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.35)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`
        }}
      />
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 relative">
        <motion.div
          className="flex items-center gap-3 mb-8 sm:mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={0}
        >
          <div className="w-6 h-6 rounded-full bg-gray-900 text-white text-[11px] leading-[12px] font-semibold flex items-center justify-center">
            1
          </div>
          <span className="text-[12px] leading-[13px] font-medium text-gray-900">
            Quiénes somos
          </span>
        </motion.div>

        <motion.h2
          className="font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-10 sm:mb-14 lg:mb-20 text-[clamp(1.5rem,4vw,3.2rem)]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          custom={1}
        >
          Energía solar inteligente para hogares, edificios e industria.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            className="lg:col-span-5 flex flex-col gap-5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={2}
          >
            <p className="text-[15px] leading-[1.7] text-gray-900">
              Diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-900">
              Nuestro equipo combina experiencia técnica, materiales de primer nivel y un acompañamiento cercano para que cada proyecto funcione de verdad: desde la primera visita y el diseño personalizado hasta la puesta en marcha, el monitoreo continuo y el mantenimiento preventivo.
            </p>
            <p className="text-[15px] leading-[1.7] text-gray-900">
              Trabajamos con marcas líderes, inversores certificados y estructuras adaptadas a cada techo o superficie, garantizando cumplimiento normativo, seguridad eléctrica y retorno de inversión medible.
            </p>
            <div className="pt-2">
              <CtaButton text="Solicitar diagnóstico" variant="orange" />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-7 flex flex-col gap-5"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20px" }}
            custom={3}
          >
            <div className="video-panel-wrapper">
              <video
                src="/videos/3.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-panel-filter w-full aspect-video object-cover"
              />
              <div className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.55)' stroke-width='0.6'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.35)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
            <div className="video-panel-wrapper">
              <video
                src="/videos/4.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="video-panel-filter w-full aspect-video object-cover"
              />
              <div className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.55)' stroke-width='0.6'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.35)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
