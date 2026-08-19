import { motion, useInView } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";

const GALLERY_IMAGES = [
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  })
};

export function InfoSection() {
  const { ref } = useInViewAnimation();
  const [selectedImage, setSelectedImage] = useState(0);
  const sectionInView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <section id="sec-004" ref={ref} className="relative min-h-screen bg-black py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0f] to-black" />
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(242,101,34,0.15) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{
            x: [0, 80, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(232,112,78,0.12) 0%, transparent 70%)",
            filter: "blur(60px)"
          }}
          animate={{
            x: [0, -60, 0],
            y: [0, 50, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cdefs%3E%3Cpattern id='panel' patternUnits='userSpaceOnUse' width='40' height='40'%3E%3Crect width='40' height='40' fill='none' stroke='rgba(242,101,34,0.55)' stroke-width='0.6'/%3E%3Cpath d='M40 0v40M0 40h40' stroke='rgba(242,101,34,0.35)' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23panel)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-10 w-full">
        {/* About card */}
        <motion.div
          className="relative rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl"
          variants={fadeInUp}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          custom={0}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F26522]/10 via-transparent to-[#E8704E]/10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F26522]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Top label */}
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            custom={1}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F26522]/10 text-[#F26522] text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
              Quiénes somos
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            custom={2}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-[0.95] tracking-tight text-white">
              Innovando el <br className="hidden sm:block" />
              <span className="text-[#F26522] font-serif italic">espíritu</span> de la energía solar
            </h2>
          </motion.div>

          {/* Body paragraph */}
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            custom={3}
          >
            <p className="text-white/80 text-sm sm:text-base leading-[1.7]">
              INTELION es una empresa especializada en el diseño, instalación y mantenimiento de sistemas de energía solar fotovoltaica, enfocada en brindar soluciones seguras, eficientes y personalizadas para hogares, edificios e industria.
            </p>
          </motion.div>

          {/* Gallery section */}
          <motion.div 
            className="mt-16"
            variants={fadeInUp}
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            custom={4}
          >
            <div className="relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-6 lg:p-8">
              {/* Main image */}
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-2xl overflow-hidden mb-6 group">
                {GALLERY_IMAGES.map((img, idx) => (
                  <motion.img
                    key={idx}
                    src={img}
                    alt={`Galería imagen ${idx + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ 
                      opacity: selectedImage === idx ? 1 : 0,
                      scale: selectedImage === idx ? 1 : 1.05
                    }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    loading={idx === selectedImage ? "eager" : "lazy"}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Navigation */}
                <motion.button
                  onClick={() => setSelectedImage((prev) => (prev === 0 ? GALLERY_IMAGES.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F26522] hover:scale-110 transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                <motion.button
                  onClick={() => setSelectedImage((prev) => (prev === GALLERY_IMAGES.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#F26522] hover:scale-110 transition-all duration-300 border border-white/10 opacity-0 group-hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>

                {/* Counter */}
                <div className="absolute bottom-6 left-6 text-white/80 text-xs font-medium tracking-widest">
                  {String(selectedImage + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
                </div>
              </div>

              {/* Timeline indicator */}
              <div className="flex items-center gap-3 mb-6">
                {GALLERY_IMAGES.map((_, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-1 flex-1 rounded-full transition-all duration-500 ${
                      selectedImage === idx
                        ? "bg-[#F26522]"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    whileHover={{ scaleY: 2 }}
                  >
                    <motion.span
                      className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full transition-all duration-300 ${
                        selectedImage === idx
                          ? "bg-[#F26522] scale-125"
                          : "bg-white/40 scale-100"
                      }`}
                      animate={{ scale: selectedImage === idx ? 1.25 : 1 }}
                    />
                  </motion.button>
                ))}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {GALLERY_IMAGES.map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative flex-1 aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                      selectedImage === idx
                        ? "ring-1 ring-[#F26522]/60 shadow-lg shadow-[#F26522]/20"
                        : "opacity-40 hover:opacity-80"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
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
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
