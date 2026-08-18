import { useState } from "react";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_IMAGES = [
  "/images/gallery/gallery-01.jpg",
  "/images/gallery/gallery-02.jpg",
  "/images/gallery/gallery-03.jpg",
  "/images/gallery/gallery-04.jpg",
  "/images/gallery/gallery-05.jpg",
  "/images/gallery/gallery-06.jpg",
];

export function GallerySection() {
  const { ref, inView } = useInViewAnimation();
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <section ref={ref} className="relative py-24 lg:py-32 overflow-hidden bg-gray-900">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-black" />
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle at 20% 30%, rgba(242,101,34,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(232,112,78,0.1) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full block">
            <defs>
              <pattern id="diamond-grid" patternUnits="userSpaceOnUse" width="100" height="100">
                <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="rgba(242,101,34,0.2)" strokeWidth="0.5" opacity="1" />
                <circle cx="50" cy="50" r="8" fill="rgba(242,101,34,0.15)" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diamond-grid)" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-3 mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
            <span className="text-[#F26522] text-sm font-semibold tracking-wider uppercase">Galería</span>
            <span className="w-2 h-2 rounded-full bg-[#F26522] animate-pulse" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-medium leading-tight text-white tracking-tight ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ letterSpacing: "-0.04em", animationDelay: "0.15s" }}>
            Proyectos en <span className="text-[#F26522]">imágenes</span>
          </h2>
        </div>

        {/* Gallery container */}
        <div className={`relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 p-6 lg:p-8 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
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
            
            {/* Minimalist navigation */}
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

            {/* Minimalist counter */}
            <div className="absolute bottom-6 left-6 text-white/80 text-xs font-medium tracking-widest">
              {String(selectedImage + 1).padStart(2, '0')} / {String(GALLERY_IMAGES.length).padStart(2, '0')}
            </div>
          </div>

          {/* Timeline / progress indicator */}
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

          {/* Minimalist thumbnails row */}
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
    </section>
  );
}
