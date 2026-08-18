import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { WordsPullUpMultiStyle } from "./TextReveal";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Wand2, Zap, Shield, Globe, Award } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
];

export function InfoSection() {
  const { ref, inView } = useInViewAnimation();
  const [activeCard, setActiveCard] = useState("historia");
  const [selectedImage, setSelectedImage] = useState(0);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, -50]);

  const aboutSegments = [
    { text: "Innovando el", className: "font-normal" },
    { text: "espíritu", className: "text-[#F26522] font-serif italic" },
    { text: "de la energía solar", className: "font-normal" }
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex overflow-hidden bg-black py-20">
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-black" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(222,219,200,0.08) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(222,219,200,0.05) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        {/* About card */}
        <div className="bg-[#101010] rounded-3xl p-8 md:p-12 lg:p-16">
          {/* Top label */}
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#F26522] text-[10px] sm:text-xs tracking-widest uppercase">Quiénes somos</span>
          </motion.div>

          {/* Main heading with WordsPullUpMultiStyle */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9]">
              <WordsPullUpMultiStyle segments={aboutSegments} />
            </h2>
          </div>

          {/* Body paragraph with animated letters */}
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <p className="text-primary text-xs sm:text-sm md:text-base leading-relaxed">
              INTELION es una empresa especializada en el diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
            </p>
          </motion.div>

          {/* Gallery section */}
          <div className="mt-16">
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-6 lg:p-8">
              {/* Main image with crossfade */}
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden mb-6 group">
                {GALLERY_IMAGES.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Galería imagen ${idx + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      selectedImage === idx 
                        ? "opacity-100 scale-100" 
                        : "opacity-0 scale-105"
                    }`}
                    loading={idx === selectedImage ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Navigation */}
                <button
                  onClick={() => setSelectedImage((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setSelectedImage((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Counter */}
                <div className="absolute bottom-6 left-6 text-white/80 text-xs font-medium tracking-widest">
                  {String(selectedImage + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
                </div>
              </div>

              {/* Timeline indicator */}
              <div className="flex items-center gap-3 mb-6">
                {GALLERY_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-px flex-1 transition-all duration-500 ${
                      selectedImage === idx
                        ? "bg-[#F26522]"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                  >
                    <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedImage === idx
                        ? "bg-[#F26522] scale-125"
                        : "bg-white/40 scale-100"
                    }`} />
                  </button>
                ))}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {GALLERY_IMAGES.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative flex-1 aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === idx
                        ? "ring-1 ring-[#F26522]/60"
                        : "opacity-40 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Miniatura ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 transition-opacity duration-300 ${
                      selectedImage === idx
                        ? "bg-[#F26522]/10 opacity-100"
                        : "bg-black/20 opacity-0 hover:opacity-100"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            <motion.button
              onClick={() => setActiveCard("ecosistema")}
              className={`relative rounded-2xl p-6 text-left transition-all duration-300 overflow-hidden group ${
                activeCard === "ecosistema"
                  ? "bg-gradient-to-br from-[#F26522]/20 to-[#F26522]/10 border border-[#F26522]/30"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeCard === "ecosistema"
                    ? "bg-[#F26522] text-black"
                    : "bg-white/10 text-[#F26522]"
                }`}>
                  <Sparkles className="w-7 h-7" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-base tracking-tight">Nuestro ecosistema</h4>
                <p className="text-white/60 text-xs leading-relaxed">Diseño, instalación y mantenimiento</p>
              </div>
            </motion.button>

            <motion.button
              onClick={() => setActiveCard("compromiso")}
              className={`relative rounded-2xl p-6 text-left transition-all duration-300 overflow-hidden group ${
                activeCard === "compromiso"
                  ? "bg-gradient-to-br from-[#F26522]/20 to-[#F26522]/10 border border-[#F26522]/30"
                  : "bg-white/5 border border-white/10 hover:bg-white/10"
              }`}
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeCard === "compromiso"
                    ? "bg-[#F26522] text-black"
                    : "bg-white/10 text-[#F26522]"
                }`}>
                  <Wand2 className="w-7 h-7" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-base tracking-tight">Compromiso</h4>
                <p className="text-white/60 text-xs leading-relaxed">Resultados medibles y sostenibilidad</p>
              </div>
            </motion.button>
          </div>

          {/* Service card */}
          <motion.div
            className="relative rounded-2xl p-6 bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden mt-6"
            whileHover={{ y: -5 }}
          >
            <div className="relative z-10 flex items-start gap-5">
              <div className="w-24 h-16 rounded-xl bg-gradient-to-br from-[#F26522]/20 to-[#F26522]/10 flex items-center justify-center overflow-hidden border border-white/10 flex-shrink-0">
                <Zap className="w-8 h-8 text-[#F26522]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <h4 className="text-white font-semibold text-base tracking-tight">Servicio Premium</h4>
                  <span className="px-2 py-0.5 rounded-full bg-[#F26522]/20 text-[#F26522] text-[10px] font-medium tracking-wider uppercase">Nuevo</span>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-3">
                  Atención personalizada y cercana con seguimiento 24/7. Nuestro equipo de expertos le acompaña en cada etapa del proyecto, desde el diagnóstico inicial hasta el monitoreo continuo.
                </p>
                <div className="flex items-center gap-4 text-xs text-white/40">
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#F26522]" />
                    Garantía extendida
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#F26522]" />
                    Cobertura nacional
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#F26522]" />
                    Certificado
                  </span>
                </div>
              </div>
              <button className="w-10 h-10 rounded-full bg-[#F26522]/20 flex items-center justify-center text-[#F26522] hover:bg-[#F26522] hover:text-black transition-all duration-300 flex-shrink-0">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
