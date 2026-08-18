import { motion } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { Quote } from "lucide-react";
import { WordsPullUpMultiStyle } from "./TextReveal";
import { CtaButton } from "./Buttons";


export function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <img
      src="/images/intelion-logo.png"
      alt="INTELION"
      className={className}
    />
  );
}

const heroHeadlineSegments = [
  { text: "Energía Solar", className: "" },
  { text: "Inteligente", className: "text-[#F26522] font-serif italic" },
];

export function HeroSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="relative h-screen bg-black overflow-hidden p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />

        {/* Noise overlay */}
        <div className="noise-overlay" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-6 lg:px-10 pb-10">
          <div className="grid grid-cols-12 gap-4 lg:gap-8 items-end">
            {/* Left column - Heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw] font-medium leading-[0.85] tracking-[-0.07em] relative"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUpMultiStyle segments={heroHeadlineSegments} />
              </h1>
            </div>

            {/* Right column - Description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.2] max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                Diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <CtaButton text="Solicitar diagnóstico" variant="orange" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  const { ref, inView } = useInViewAnimation();

  return (
    <section ref={ref} className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden bg-black">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="relative">
        <motion.div
          className={`${inView ? "opacity-100" : "opacity-0"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <Quote className="w-8 h-8 text-primary mb-6" />
        </motion.div>
        <motion.h2
          className="text-[32px] md:text-[40px] lg:text-[44px] leading-[1.1] text-primary tracking-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ color: "#E1E0CC" }}
        >
          Nuestra misión es transformar el consumo energético de hogares, edificios e industria mediante{" "}
          <span className="text-primary">soluciones solares inteligentes</span>, confiables y sostenibles.
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Combinamos ingeniería, tecnología y un enfoque cercano al cliente para convertir el recurso solar en ahorro energético, eficiencia operativa y sostenibilidad a largo plazo. Un solo aliado para todo el ciclo de su sistema solar.
        </motion.p>
      </div>
    </section>
  );
}
